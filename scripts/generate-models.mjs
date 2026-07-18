/**
 * One-shot generator: OpenAPI schemas -> TypeScript models (Zod requests + interfaces).
 * Run: node scripts/generate-models.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const schemas = JSON.parse(
  readFileSync(path.join(root, "openapi.json"), "utf8"),
).components.schemas;

const REQUEST_SCHEMAS = new Set([
  "SecretKeyRequest",
  "SessionRequest",
  "CliCallRequest",
  "ServerInit",
  "Admin",
  "ServerLicense",
  "ExtensionInstallRequest",
  "ClientRequest",
  "ClientUpdateRequest",
  "DomainRequest",
  "DomainUpdateRequest",
  "DomainStatus",
  "DomainExecRequest",
  "OwnerClientReference",
  "PlanReference",
  "DomainReference",
  "FtpUserRequest",
  "FtpUserUpdateRequest",
  "DatabaseRequest",
  "DatabaseUserRequest",
  "DatabaseUserUpdateRequest",
  "DnsRecordRequest",
  "FileContentRequest",
  "FileChmodRequest",
  "FileCopyMoveRequest",
]);

const FILE_MAP = {
  StatusResponse: "common",
  CreatedResponse: "common",
  ErrorResponse: "common",
  PermissionDeniedResponse: "common",
  SecretKeyRequest: "auth",
  SecretKeyResponse: "auth",
  SessionRequest: "auth",
  SessionResponse: "auth",
  CliCallRequest: "cli",
  CliCallResponse: "cli",
  ServerMeta: "server",
  ServerInit: "server",
  Admin: "server",
  ServerIp: "server",
  ServerLicense: "server",
  Extension: "extension",
  ExtensionInstallRequest: "extension",
  Client: "client",
  ClientRequest: "client",
  ClientUpdateRequest: "client",
  ClientStatistics: "client",
  DomainRequest: "domain",
  DomainResponse: "domain",
  DomainReference: "domain",
  DomainUpdateRequest: "domain",
  DomainStatus: "domain",
  DomainExecRequest: "domain",
  DomainExecResponse: "domain",
  DomainLogEntry: "domain",
  LogTypeInfo: "domain",
  DomainLogsResponse: "domain",
  DnsCheck: "domain",
  DomainDnsResolutionResponse: "domain",
  OwnerClientReference: "domain",
  PlanReference: "domain",
  DomainAlias: "domain",
  FtpUser: "ftp",
  FtpUserRequest: "ftp",
  FtpUserUpdateRequest: "ftp",
  Database: "database",
  DatabaseRequest: "database",
  DatabaseServer: "database",
  DatabaseUser: "database",
  DatabaseUserRequest: "database",
  DatabaseUserUpdateRequest: "database",
  DnsRecord: "dns",
  DnsRecordRequest: "dns",
  FileContentResponse: "file",
  FileChmodRequest: "file",
  FileCopyMoveRequest: "file",
  FileContentRequest: "file",
  File: "file",
};

function refName(ref) {
  return ref.replace("#/components/schemas/", "");
}

function zodForProp(prop, depth = 0) {
  if (!prop) return "z.unknown()";
  if (prop.$ref) {
    const n = refName(prop.$ref);
    return REQUEST_SCHEMAS.has(n) ? `${n}Schema` : `z.custom<${n}>()`;
  }
  if (prop.oneOf || prop.anyOf) {
    const variants = (prop.oneOf || prop.anyOf).map((v) => zodForProp(v, depth + 1));
    return `z.union([${variants.join(", ")}])`;
  }
  if (prop.allOf) {
    // simplified: merge as intersection of zod
    const parts = prop.allOf.map((v) => zodForProp(v, depth + 1));
    return parts.length === 1 ? parts[0] : `z.intersection(${parts.join(", ")})`;
  }
  if (prop.enum) {
    const vals = prop.enum.map((v) => JSON.stringify(v)).join(", ");
    if (prop.type === "integer" || typeof prop.enum[0] === "number") {
      return `z.union([${prop.enum.map((v) => `z.literal(${v})`).join(", ")}])`;
    }
    return `z.enum([${vals}])`;
  }
  switch (prop.type) {
    case "string":
      return "z.string()";
    case "integer":
    case "number":
      return "z.number()";
    case "boolean":
      return "z.boolean()";
    case "array":
      return `z.array(${zodForProp(prop.items, depth + 1)})`;
    case "object": {
      if (prop.additionalProperties && !prop.properties) {
        const v = prop.additionalProperties === true
          ? "z.unknown()"
          : zodForProp(prop.additionalProperties, depth + 1);
        return `z.record(z.string(), ${v})`;
      }
      if (!prop.properties) return "z.record(z.string(), z.unknown())";
      const req = new Set(prop.required || []);
      const entries = Object.entries(prop.properties).map(([k, v]) => {
        const z = zodForProp(v, depth + 1);
        return `  ${JSON.stringify(k)}: ${req.has(k) ? z : `${z}.optional()`},`;
      });
      return `z.object({\n${entries.join("\n")}\n})`;
    }
    default:
      if (prop.properties) return zodForProp({ ...prop, type: "object" }, depth);
      return "z.unknown()";
  }
}

function tsTypeForProp(prop, depth = 0) {
  if (!prop) return "unknown";
  if (prop.$ref) return refName(prop.$ref);
  if (prop.enum) {
    return prop.enum.map((v) => JSON.stringify(v)).join(" | ");
  }
  if (prop.oneOf || prop.anyOf) {
    return (prop.oneOf || prop.anyOf).map((v) => tsTypeForProp(v, depth + 1)).join(" | ");
  }
  switch (prop.type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return `Array<${tsTypeForProp(prop.items, depth + 1)}>`;
    case "object": {
      if (prop.additionalProperties && !prop.properties) {
        const v =
          prop.additionalProperties === true
            ? "unknown"
            : tsTypeForProp(prop.additionalProperties, depth + 1);
        return `Record<string, ${v}>`;
      }
      if (!prop.properties) return "Record<string, unknown>";
      const req = new Set(prop.required || []);
      const lines = Object.entries(prop.properties).map(([k, v]) => {
        const opt = req.has(k) ? "" : "?";
        return `  ${k}${opt}: ${tsTypeForProp(v, depth + 1)};`;
      });
      return `{\n${lines.join("\n")}\n}`;
    }
    default:
      if (prop.properties) return tsTypeForProp({ ...prop, type: "object" }, depth);
      return "unknown";
  }
}

function collectRefs(schema, out = new Set()) {
  if (!schema || typeof schema !== "object") return out;
  if (schema.$ref) out.add(refName(schema.$ref));
  for (const v of Object.values(schema)) {
    if (Array.isArray(v)) v.forEach((x) => collectRefs(x, out));
    else if (v && typeof v === "object") collectRefs(v, out);
  }
  return out;
}

const byFile = {};
for (const [name, file] of Object.entries(FILE_MAP)) {
  (byFile[file] ??= []).push(name);
}

const outDir = path.join(root, "src", "models");
mkdirSync(outDir, { recursive: true });

for (const [file, names] of Object.entries(byFile)) {
  const needsZod = names.some((n) => REQUEST_SCHEMAS.has(n));
  // collect cross-file imports for interfaces/$refs used in this file
  const local = new Set(names);
  const imports = new Map(); // file -> Set of names

  for (const name of names) {
    const refs = collectRefs(schemas[name]);
    for (const r of refs) {
      if (local.has(r)) continue;
      const f = FILE_MAP[r];
      if (!f || f === file) continue;
      if (!imports.has(f)) imports.set(f, new Set());
      imports.get(f).add(r);
    }
  }

  let body = "";
  if (needsZod) body += `import { z } from "zod";\n`;

  for (const [f, set] of imports) {
    const list = [...set].sort();
    // import type for interfaces; also schema if request
    const types = list.filter((n) => !REQUEST_SCHEMAS.has(n) || true);
    const schemasImp = list.filter((n) => REQUEST_SCHEMAS.has(n));
    if (types.length) {
      body += `import type { ${types.join(", ")} } from "./${f}.js";\n`;
    }
    if (schemasImp.length && needsZod) {
      body += `import { ${schemasImp.map((n) => `${n}Schema`).join(", ")} } from "./${f}.js";\n`;
    }
  }
  if (body) body += "\n";

  for (const name of names) {
    const sch = schemas[name];
    const desc = sch.description ? `/** ${sch.description.replace(/\*\//g, "*\\/")} */\n` : "";

    if (REQUEST_SCHEMAS.has(name)) {
      const zod = zodForProp({ ...sch, type: sch.type || "object" });
      body += `${desc}export const ${name}Schema = ${zod};\n`;
      body += `export type ${name} = z.infer<typeof ${name}Schema>;\n\n`;
    } else {
      const t = tsTypeForProp({ ...sch, type: sch.type || "object" });
      if (t.startsWith("{")) {
        body += `${desc}export interface ${name} ${t}\n\n`;
      } else {
        body += `${desc}export type ${name} = ${t};\n\n`;
      }
    }

    if (name === "ErrorResponse") {
      body += `export function isErrorResponse(value: unknown): value is ErrorResponse {\n`;
      body += `  return (\n    typeof value === "object" &&\n    value !== null &&\n    "code" in value &&\n    "message" in value &&\n    typeof (value as ErrorResponse).code === "number" &&\n    typeof (value as ErrorResponse).message === "string"\n  );\n}\n\n`;
    }
    if (name === "PermissionDeniedResponse") {
      body += `export function isPermissionDeniedResponse(value: unknown): value is PermissionDeniedResponse {\n`;
      body += `  return isErrorResponse(value);\n}\n\n`;
    }
  }

  writeFileSync(path.join(outDir, `${file}.ts`), body);
  console.log("wrote", file, names.length);
}

// barrel
const barrel = Object.keys(byFile)
  .sort()
  .map((f) => `export * from "./${f}.js";`)
  .join("\n");
writeFileSync(path.join(outDir, "index.ts"), barrel + "\n");
console.log("done");
