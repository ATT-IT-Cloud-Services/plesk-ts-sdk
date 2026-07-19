/**
 * Overview: fetch many resources in one script (REST JSON + management).
 *
 * Env:
 *   PLESK_HOST=panel.example.com:8443
 *   PLESK_API_KEY=...
 *   PLESK_DOMAIN=example.com   (optional)
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();
const domainName = process.env.PLESK_DOMAIN;

console.log("=== Server (REST) ===");
console.log(await plesk.server.getMeta());
console.log(await plesk.server.listIps());

console.log("=== Clients (REST) ===");
const clients = await plesk.clients.list();
console.log(`clients: ${clients.length}`);

console.log("=== Customers (management) ===");
console.log(await plesk.customer.list({}));

console.log("=== Domains (REST) ===");
const domains = await plesk.domains.list(
  domainName ? { name: domainName } : undefined,
);
console.log(
  domains.slice(0, 5).map((d) => ({ id: d.id, name: d.name })),
);

console.log("=== Subscriptions / sites (management) ===");
console.log(await plesk.subscription.list({}));
console.log(await plesk.site.list({}));

if (domains[0]) {
  const id = domains[0].id;
  const name = domains[0].name;

  console.log("=== Domain detail (REST) ===");
  console.log(await plesk.domains.get(id));
  console.log(await plesk.domains.getStatus(id));

  console.log("=== DNS records (REST) + zone (management) ===");
  console.log((await plesk.dns.listRecords(name)).slice(0, 5));
  console.log(await plesk.dnsZones.info({ name }));

  console.log("=== Databases (REST) ===");
  console.log(await plesk.databases.list({ domain: name }));
}

console.log("=== Mail (management) ===");
console.log(await plesk.mail.list({}));

console.log("=== PHP handlers (management) ===");
console.log(await plesk.phpHandler.list({}));

console.log("=== Extensions (REST) ===");
console.log((await plesk.extensions.list()).slice(0, 5));

console.log("=== Service plans (management) ===");
console.log(
  await plesk.servicePlan
    .info({ name: "Unlimited" })
    .catch((e: Error) => e.message),
);

console.log("done");
