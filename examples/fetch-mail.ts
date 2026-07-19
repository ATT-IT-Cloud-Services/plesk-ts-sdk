/**
 * Mail — management API (no dedicated REST mail resource in /api/v2).
 * Combined with REST domain lookup for context.
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();
const domainName = process.env.PLESK_DOMAIN;

// --- REST (JSON): resolve domain context ---
const domains = await plesk.domains.list(
  domainName ? { name: domainName } : undefined,
);
console.log("REST GET /domains →", domains.map((d) => d.name).slice(0, 10));

// --- Management API ---
const mailboxes = await plesk.mail.list({});
console.log("management mail.list →", mailboxes);

const name = domainName ?? domains[0]?.name;
if (name) {
  // mailbox addresses look like user@domain — info needs a mail name when present
  console.log(
    "management mailserver.info →",
    await plesk.mailserver.info({}),
  );
  console.log(
    "management maillist (lists on server) →",
    await plesk.maillist.info({ name }).catch((e: Error) => e.message),
  );
}
