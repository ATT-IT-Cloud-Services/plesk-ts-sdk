/**
 * Server metadata — REST JSON vs management API.
 *
 * Run: node --experimental-strip-types examples/fetch-server.ts
 *   or: npx tsx examples/fetch-server.ts
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();

// --- REST (JSON) ---
const meta = await plesk.server.getMeta();
console.log("REST GET /server → meta", meta);

const ips = await plesk.server.listIps();
console.log("REST GET /server/ips →", ips);

// --- Management API (CLI gate under the hood) ---
const adminInfo = await plesk.admin.info({});
console.log("management admin.info →", adminInfo);

const product = await plesk.productInfo.getMode({});
console.log("management productInfo.getMode →", product);

const locales = await plesk.locales.list({});
console.log("management locales.list →", locales);
