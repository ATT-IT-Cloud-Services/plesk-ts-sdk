/**
 * Domains / subscriptions / sites — REST JSON vs management API.
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();
const domainName = process.env.PLESK_DOMAIN; // optional filter

// --- REST (JSON) ---
const domains = await plesk.domains.list(
  domainName ? { name: domainName } : undefined,
);
console.log("REST GET /domains →", domains.slice(0, 5));

if (domains[0]) {
  const id = domains[0].id;
  console.log("REST GET /domains/{id} →", await plesk.domains.get(id));
  console.log("REST GET /domains/{id}/status →", await plesk.domains.getStatus(id));
  console.log("REST GET /domains/{id}/client →", await plesk.domains.getClient(id));
  console.log(
    "REST GET /domains/{id}/dns-resolution →",
    await plesk.domains.getDnsResolution(id),
  );
}

// --- Management API ---
const subscriptions = await plesk.subscription.list({});
console.log("management subscription.list →", subscriptions);

const sites = await plesk.site.list({});
console.log("management site.list →", sites);

const name = domainName ?? domains[0]?.name;
if (name) {
  console.log(
    "management subscription.info →",
    await plesk.subscription.info({ name }),
  );
  console.log("management site.info →", await plesk.site.info({ name }));
  console.log(
    "management subdomain.list →",
    await plesk.subdomain.list({}),
  );
}
