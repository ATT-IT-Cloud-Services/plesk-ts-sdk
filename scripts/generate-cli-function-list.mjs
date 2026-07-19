/**
 * Generate data/cli-function-list.md — public SDK surface (no CLI jargon).
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(readFileSync(path.join(root, "data", "cli-catalog.json"), "utf8"));
const outPath = path.join(root, "data", "cli-function-list.md");

const PROPERTY_ALIASES = {
  dns: "dnsZones",
  extension: "extensionTools",
  database: "databaseTools",
};

function publicProperty(p) {
  return PROPERTY_ALIASES[p] ?? p;
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

function optionTypeTs(opt) {
  if (opt.type === "flag" || opt.type === "boolean") return "boolean";
  if (opt.type === "enum" && opt.enum?.length) {
    return opt.enum.map((v) => JSON.stringify(v)).join(" | ");
  }
  return "string";
}

function pascal(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const lines = [];
lines.push("# Management API function list");
lines.push("");
lines.push(`Generated: ${catalog.generatedAt}`);
lines.push(`Utilities: ${catalog.utilityCount} | Methods: ${catalog.methodCount}`);
lines.push("");
lines.push("Usage matches REST resources: Zod request body → `Promise<ActionResponse>`.");
lines.push("");

for (const u of catalog.utilities) {
  const prop = publicProperty(u.property);
  const opts = filterOptions(u.commands[0]?.options ?? [], u.commands);
  lines.push(`## \`plesk.${prop}\` — ${u.title}`);
  lines.push("");

  for (const cmd of u.commands) {
    const type = `${pascal(prop)}${pascal(cmd.method)}Request`;
    lines.push(`### \`plesk.${prop}.${cmd.method}\``);
    lines.push("");
    lines.push("```ts");
    lines.push(`plesk.${prop}.${cmd.method}(body: ${type}): Promise<ActionResponse>`);
    lines.push(`body: {`);
    if (cmd.requiresTarget) lines.push(`  name: string;`);
    else lines.push(`  name?: string;`);
    for (const opt of opts) {
      lines.push(`  ${opt.key}?: ${optionTypeTs(opt)};`);
    }
    lines.push(`}`);
    lines.push("```");
    lines.push("");
  }
}

writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
console.log(`Wrote ${outPath}`);
