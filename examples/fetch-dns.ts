/**
 * DNS — REST JSON records vs management zone utilities.
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();
const domainName = process.env.PLESK_DOMAIN;

if (!domainName) {
  throw new Error("Set PLESK_DOMAIN (e.g. example.com)");
}

// --- REST (JSON) — domain query param is the domain name ---
const records = await plesk.dns.listRecords(domainName);
console.log("REST GET /dns/records?domain=… →", records.slice(0, 10));

if (records[0]?.id != null) {
  console.log(
    "REST GET /dns/records/{id} →",
    await plesk.dns.getRecord(records[0].id),
  );
}

// --- Management API ---
const zoneInfo = await plesk.dnsZones.info({ name: domainName });
console.log("management dnsZones.info →", zoneInfo);

const template = await plesk.serverDns.info({});
console.log("management serverDns.info →", template);
