/**
 * Files, FTP, extensions, PHP — REST JSON + management where useful.
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();
const domainName = process.env.PLESK_DOMAIN;

if (!domainName) {
  throw new Error("Set PLESK_DOMAIN (e.g. example.com)");
}

const domains = await plesk.domains.list({ name: domainName });
const domain = domains[0];
if (!domain) {
  throw new Error(`Domain not found: ${domainName}`);
}

// --- REST (JSON) ---
const files = await plesk.files.list(domain.id, "/");
console.log("REST GET /domains/{id}/fs/list →", files.slice(0, 10));

const ftpUsers = await plesk.ftpusers.list({ domain: domainName });
console.log("REST GET /ftpusers?domain=… →", ftpUsers);

const extensions = await plesk.extensions.list();
console.log("REST GET /extensions →", extensions.slice(0, 5));

// --- Management API ---
const phpHandlers = await plesk.phpHandler.list({});
console.log("management phpHandler.list →", phpHandlers);

const nodeVersions = await plesk.nodejs.versions({});
console.log("management nodejs.versions →", nodeVersions);
