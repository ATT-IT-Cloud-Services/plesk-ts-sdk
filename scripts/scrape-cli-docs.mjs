/**
 * Build cli-catalog.json from cli-seed.json and optionally enrich from Plesk docs.
 * Usage: node scripts/scrape-cli-docs.mjs [--fetch]
 *
 * Without --fetch: builds catalog from seed (offline, reproducible).
 * With --fetch: attempts to enrich options/parameters from docs.plesk.com.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const seedPath = path.join(root, "data", "cli-seed.json");
const outPath = path.join(root, "data", "cli-catalog.json");
const shouldFetch = process.argv.includes("--fetch");

/** Known doc URL fragments for enrichment (optional). */
const DOC_URLS = {
  admin_alias:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/admin_alias-additional-administrator-accounts.72489/",
  "action-log":
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/actionlog-action-log.38400/",
  admin:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/admin-administration-panel-preferences.75496/",
  anonftp:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/anonftp-anonymous-ftp-access.39187/",
  autoresponder:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/autoresponder-mail-autoresponders.39182/",
  certificate:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/certificate-ssl-tls-certificates.39184/",
  cloning:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/cloning-server-cloning-settings.71035/",
  customer:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/customer-customer-accounts.39186/",
  database:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/database-databases.75671/",
  dns:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/dns-dns-zones-on-domains.39190/",
  dnssec:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/dnssec-dnssec.80005/",
  mail:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/mail-mail-accounts.39181/",
  nodejs:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/nodejs-nodejs-versions.77392/",
  php_handler:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/php_handler-php-handlers.72490/",
  "scheduled-backup":
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/scheduledbackup-managing-scheduled-backup-tasks.80003/",
  site:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/site-sites.67067/",
  subscription:
    "https://docs.plesk.com/en-US/obsidian/cli-linux/using-command-line-utilities/subscription-subscriptions.37768/",
};

function toCamelCase(flag) {
  const raw = String(flag)
    .replace(/^--?/, "")
    .replace(/:/g, "-");
  const parts = raw.split(/[-_]/).filter(Boolean);
  if (parts.length === 0) return "unknown";
  return (
    parts[0] +
    parts
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("")
  );
}

function toPropertyName(utilityId) {
  const parts = utilityId.split(/[-_]/);
  return (
    parts[0] +
    parts
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("")
  );
}

function commandToMethod(command) {
  return toCamelCase(command);
}

function normalizeCommand(command) {
  const c = String(command).trim();
  if (c.startsWith("--") || c.startsWith("-") || c.includes(":")) return c;
  // bare tokens like "list", "sign", "info" for extension-style CLIs
  return c;
}

function parseOptionsFromHtml(html) {
  const options = [];
  // Match table rows that look like option flags: `-owner` or `--foo`
  const rowRe =
    /<tr[^>]*>[\s\S]*?<td[^>]*>\s*(?:<[^>]+>)*\s*(-{1,2}[a-zA-Z0-9_.:-]+)\s*(?:<\/[^>]+>)*\s*<\/td>[\s\S]*?<td[^>]*>([\s\S]*?)<\/td>/gi;
  let m;
  const seen = new Set();
  while ((m = rowRe.exec(html))) {
    const flag = m[1].trim();
    if (!flag.startsWith("-")) continue;
    if (flag.startsWith("--") && !flag.includes(" ") && flag.length > 3) {
      // might be a command row in Commands table — skip long --commands in options parse
      // Options are usually single-dash (-owner) but some are --long
    }
    const paramCell = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const key = toCamelCase(flag);
    if (seen.has(key)) continue;
    seen.add(key);
    const isFlag =
      !paramCell ||
      paramCell === "" ||
      /^<\/?/.test(paramCell) ||
      paramCell.toLowerCase() === "none";
    const enumMatch = paramCell.match(/^&lt;([^&]+)&gt;$/) || paramCell.match(/^<([^>]+)>$/);
    let type = "string";
    let enumValues;
    if (isFlag) type = "flag";
    else if (/true\|false/i.test(paramCell)) type = "boolean";
    else if (enumMatch && enumMatch[1].includes("|")) {
      type = "enum";
      enumValues = enumMatch[1].split("|").map((s) => s.trim());
    }
    options.push({
      flag,
      key,
      type,
      ...(enumValues ? { enum: enumValues } : {}),
      parameter: isFlag ? null : paramCell.replace(/&lt;/g, "<").replace(/&gt;/g, ">"),
    });
  }
  return options;
}

function parseCommandsFromHtml(html) {
  const commands = [];
  const seen = new Set();
  const cellRe =
    /<td[^>]*>\s*(?:<[^>]+>)*\s*((?:--?[a-zA-Z0-9_.:-]+)(?:\s+or\s+(?:--?[a-zA-Z0-9_.:-]+))?)\s*/gi;
  let m;
  while ((m = cellRe.exec(html))) {
    const text = m[1];
    const primary = text.split(/\s+or\s+/i)[0].trim();
    if (!primary.startsWith("-") && !primary.includes(":")) continue;
    // Prefer long form
    const parts = text.split(/\s+or\s+/i).map((s) => s.trim());
    const long = parts.find((p) => p.startsWith("--")) || parts[0];
    if (seen.has(long)) continue;
    if (long === "--help" || long === "-h") continue;
    seen.add(long);
    const aliases = parts.filter((p) => p !== long);
    commands.push({ command: long, aliases, requiresTarget: true });
  }
  return commands;
}

async function enrichFromDocs(utility) {
  const url = DOC_URLS[utility.id];
  if (!url) return { options: [], scrapedCommands: null, docUrl: null };
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "plesk-ts-sdk-cli-scraper/1.0" },
    });
    if (!res.ok) return { options: [], scrapedCommands: null, docUrl: url, error: res.status };
    const html = await res.text();
    return {
      options: parseOptionsFromHtml(html),
      scrapedCommands: parseCommandsFromHtml(html),
      docUrl: url,
    };
  } catch (e) {
    return { options: [], scrapedCommands: null, docUrl: url, error: String(e) };
  }
}

/**
 * Whether a command typically takes a positional target (login/domain/name).
 * Default is true for entity utilities; overridden by seed `noPositionalTarget`
 * or by method-name heuristics for read-only / inventory ops.
 */
function commandRequiresTarget(method, utility) {
  if (utility?.noPositionalTarget) return false;

  const m = method.toLowerCase();

  // Exact matches for ops that usually have no positional (even on entity utils)
  const noTargetExact = new Set([
    "list",
    "show",
    "status",
    "help",
    "versions",
    "info",
    "man",
    "all",
    // product_info (also covered by noPositionalTarget)
    "getmode",
    "updatesinfo",
    // server-scoped ops on mixed utilities
    "checkinstalledlicense",
    "checkconfigured",
    "setdefaultserverlocal",
    "updateserver",
    "infoserver",
    "calculateall",
    "generateallwebstat",
  ]);
  if (noTargetExact.has(m)) return false;

  // listEvents, localesList, listBackups, …
  if (m.startsWith("list") || m.endsWith("list")) return false;

  return true;
}

function buildCommandEntry(command, sharedOptions, utility = {}) {
  const normalized = normalizeCommand(command);
  const method = commandToMethod(normalized);
  return {
    command: normalized,
    method,
    aliases: [],
    requiresTarget: commandRequiresTarget(method, utility),
    options: sharedOptions,
  };
}

const seed = JSON.parse(readFileSync(seedPath, "utf8"));
const utilities = [];

for (const u of seed.utilities) {
  let options = [];
  let docUrl = DOC_URLS[u.id] ?? null;
  let scrapeError = null;
  if (shouldFetch) {
    const enriched = await enrichFromDocs(u);
    options = enriched.options ?? [];
    docUrl = enriched.docUrl ?? docUrl;
    scrapeError = enriched.error ?? null;
    // Prefer seed commands (canonical inventory); scraped only for options
  }

  const commands = u.commands.map((c) => buildCommandEntry(c, options, u));
  utilities.push({
    id: u.id,
    property: toPropertyName(u.id),
    title: u.title,
    extensionBackend: Boolean(u.extensionBackend),
    noPositionalTarget: Boolean(u.noPositionalTarget),
    docUrl,
    scrapeError,
    commands,
  });
}

const catalog = {
  generatedAt: new Date().toISOString(),
  source: seed.source,
  fetched: shouldFetch,
  utilityCount: utilities.length,
  methodCount: utilities.reduce((n, u) => n + u.commands.length, 0),
  utilities,
};

mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(catalog, null, 2) + "\n", "utf8");
console.log(
  `Wrote ${outPath} (${catalog.utilityCount} utilities, ${catalog.methodCount} methods, fetch=${shouldFetch})`,
);
