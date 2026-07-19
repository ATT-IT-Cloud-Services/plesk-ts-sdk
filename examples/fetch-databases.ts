/**
 * Databases — REST JSON vs management API.
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();

// --- REST (JSON) ---
const databases = await plesk.databases.list();
console.log("REST GET /databases →", databases.slice(0, 5));

const servers = await plesk.databases.listServers();
console.log("REST GET /db_servers →", servers);

if (databases[0]) {
  const users = await plesk.databases.listUsers({ dbId: databases[0].id });
  console.log("REST GET /dbusers?dbId=… →", users);
}

// --- Management API ---
const dbServers = await plesk.databaseServer.list({});
console.log("management databaseServer.list →", dbServers);

// xmlInfo requires the database server name (often the host from REST)
const serverName = process.env.PLESK_DB_SERVER ?? servers[0]?.host;
if (serverName) {
  const dbServerXml = await plesk.databaseServer.xmlInfo({ name: serverName });
  console.log("management databaseServer.xmlInfo →", dbServerXml);
}
