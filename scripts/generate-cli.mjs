/**
 * Generate Zod request models + resource classes that feel like normal SDK APIs.
 * CLI transport is an implementation detail (not exposed in public request/response shapes).
 *
 * Usage: node scripts/generate-cli.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(
  readFileSync(path.join(root, "data", "cli-catalog.json"), "utf8"),
);
const modelsDir = path.join(root, "src", "models", "cli-commands");
const resourcesDir = path.join(root, "src", "cli", "generated");

/** Avoid clashing with existing PleskClient REST namespaces */
const PROPERTY_ALIASES = {
  dns: "dnsZones",
  extension: "extensionTools",
  database: "databaseTools",
};

rmSync(modelsDir, { recursive: true, force: true });
rmSync(resourcesDir, { recursive: true, force: true });
mkdirSync(modelsDir, { recursive: true });
mkdirSync(resourcesDir, { recursive: true });

function fileNameFor(utilityId) {
  return utilityId.replace(/_/g, "-");
}

function publicProperty(catalogProperty) {
  return PROPERTY_ALIASES[catalogProperty] ?? catalogProperty;
}

function classNameFor(property) {
  const p = publicProperty(property);
  return p.charAt(0).toUpperCase() + p.slice(1) + "Resource";
}

function schemaName(property, method) {
  const p = publicProperty(property);
  return `${p.charAt(0).toUpperCase()}${p.slice(1)}${method.charAt(0).toUpperCase()}${method.slice(1)}RequestSchema`;
}

function typeName(property, method) {
  const p = publicProperty(property);
  return `${p.charAt(0).toUpperCase()}${p.slice(1)}${method.charAt(0).toUpperCase()}${method.slice(1)}Request`;
}

function flagsName(property) {
  const p = publicProperty(property);
  return `_${p}OptionFlags`;
}

function flagKeysName(property) {
  const p = publicProperty(property);
  return `_${p}FlagKeys`;
}

function filterOptions(options, commands) {
  const commandFlags = new Set(commands.map((c) => c.command));
  const commandMethods = new Set(commands.map((c) => c.method));
  return (options ?? []).filter((o) => {
    if (!o?.flag || !o?.key) return false;
    if (commandFlags.has(o.flag)) return false;
    if (commandMethods.has(o.key)) return false;
    if (o.key === "name" || o.key === "target") return false;
    if (o.flag.startsWith("--") && o.flag !== "--json") return false;
    return true;
  });
}

function zodForOption(opt) {
  if (opt.type === "flag") return "z.boolean().optional()";
  if (opt.type === "boolean") return "z.boolean().optional()";
  if (opt.type === "enum" && Array.isArray(opt.enum) && opt.enum.length) {
    const vals = opt.enum.map((v) => JSON.stringify(String(v))).join(", ");
    return `z.enum([${vals}]).optional()`;
  }
  return "z.string().optional()";
}

const utilityExports = [];
const modelFileExports = [];

for (const u of catalog.utilities) {
  const fileBase = fileNameFor(u.id);
  const prop = publicProperty(u.property);
  const className = classNameFor(u.property);
  const sharedOptions = filterOptions(
    u.commands[0]?.options ?? [],
    u.commands,
  );

  const schemaBlocks = [];
  const methodMeta = [];

  for (const cmd of u.commands) {
    const sName = schemaName(u.property, cmd.method);
    const tName = typeName(u.property, cmd.method);
    const fields = [];

    if (cmd.requiresTarget) {
      fields.push(`  name: z.string(),`);
    } else {
      fields.push(`  name: z.string().optional(),`);
    }

    for (const opt of sharedOptions) {
      fields.push(`  ${opt.key}: ${zodForOption(opt)},`);
    }

    schemaBlocks.push(`
/** Request for \`plesk.${prop}.${cmd.method}\` */
export const ${sName} = z.object({
${fields.join("\n")}
});
export type ${tName} = z.infer<typeof ${sName}>;
`);
    methodMeta.push({
      method: cmd.method,
      command: cmd.command,
      sName,
      tName,
      requiresTarget: Boolean(cmd.requiresTarget),
    });
  }

  const flagEntries = sharedOptions
    .map((o) => `  ${JSON.stringify(o.key)}: ${JSON.stringify(o.flag)}`)
    .join(",\n");
  const flagKeys = sharedOptions
    .filter((o) => o.type === "flag")
    .map((o) => JSON.stringify(o.key));

  const fName = flagsName(u.property);
  const fkName = flagKeysName(u.property);

  const modelContent = `/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const ${fName}: Record<string, string> = {
${flagEntries || ""}
};

/** @internal */
export const ${fkName}: string[] = [${flagKeys.join(", ")}];
${schemaBlocks.join("")}
`;

  writeFileSync(path.join(modelsDir, `${fileBase}.ts`), modelContent, "utf8");
  modelFileExports.push(fileBase);

  const schemaImports = methodMeta.map((m) => m.sName).join(",\n  ");
  const typeImports = methodMeta.map((m) => `type ${m.tName}`).join(",\n  ");

  const methods = methodMeta.map((m) => {
    return `
  /** ${u.title}: ${m.method} */
  ${m.method}(body: ${m.tName}${m.requiresTarget ? "" : " = {}"}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: ${JSON.stringify(u.id)},
      command: ${JSON.stringify(m.command)},
      schema: ${m.sName},
      body,
      optionFlags: ${fName},
      flagKeys: ${fkName},
    });
  }`;
  });

  const resourceContent = `/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  ${fName},
  ${fkName},
  ${schemaImports},
  ${typeImports},
} from "../../models/cli-commands/${fileBase}.js";

/** ${u.title} */
export class ${className} {
  constructor(private readonly http: HttpClient) {}
${methods.join("\n")}
}
`;

  writeFileSync(path.join(resourcesDir, `${fileBase}.ts`), resourceContent, "utf8");
  utilityExports.push({
    property: prop,
    className,
    fileBase,
    id: u.id,
    title: u.title,
  });
}

writeFileSync(
  path.join(modelsDir, "index.ts"),
  `/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
${modelFileExports.map((f) => `export * from "./${f}.js";`).join("\n")}
`,
  "utf8",
);

const imports = utilityExports
  .map((e) => `import { ${e.className} } from "./${e.fileBase}.js";`)
  .join("\n");
const fields = utilityExports
  .map((e) => `  readonly ${e.property}: ${e.className};`)
  .join("\n");
const assigns = utilityExports
  .map((e) => `    this.${e.property} = new ${e.className}(http);`)
  .join("\n");
const reExports = utilityExports
  .map((e) => `export { ${e.className} } from "./${e.fileBase}.js";`)
  .join("\n");

writeFileSync(
  path.join(resourcesDir, "index.ts"),
  `/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
${imports}

/**
 * Additional management namespaces (same usage style as domains/clients).
 * Transport details are internal.
 */
export class ManagedResources {
${fields}

  constructor(http: HttpClient) {
${assigns}
  }
}

${reExports}
`,
  "utf8",
);

// Generate client mixin interface + assign helper for PleskClient
const mixinFields = utilityExports
  .map((e) => `  readonly ${e.property}: ${e.className};`)
  .join("\n");

writeFileSync(
  path.join(resourcesDir, "client-mixin.ts"),
  `/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import { ManagedResources } from "./index.js";
${imports}

/** Extra namespaces mixed onto PleskClient */
export interface ManagedClientNamespaces {
${mixinFields}
}

export function attachManagedResources(
  target: ManagedClientNamespaces,
  http: HttpClient,
): void {
  const managed = new ManagedResources(http);
  const mutable = target as unknown as Record<string, unknown>;
${utilityExports.map((e) => `  mutable.${e.property} = managed.${e.property};`).join("\n")}
}
`,
  "utf8",
);

console.log(
  `Generated ${utilityExports.length} resources / ${catalog.methodCount} request schemas (invisible transport)`,
);
