/**
 * Clients / customers — REST JSON vs management API.
 */
import { createExampleClient } from "./client.ts";

const plesk = createExampleClient();

// --- REST (JSON) ---
const clients = await plesk.clients.list();
console.log("REST GET /clients →", clients.slice(0, 3));

if (clients[0]) {
  const one = await plesk.clients.get(clients[0].id);
  console.log("REST GET /clients/{id} →", one);

  const stats = await plesk.clients.getStatistics(clients[0].id);
  console.log("REST GET /clients/{id}/statistics →", stats);

  const domains = await plesk.clients.listDomains(clients[0].id);
  console.log("REST GET /clients/{id}/domains →", domains);
}

// --- Management API ---
const customerList = await plesk.customer.list({});
console.log("management customer.list →", customerList);

if (clients[0]?.login) {
  const customerInfo = await plesk.customer.info({ name: clients[0].login });
  console.log("management customer.info →", customerInfo);
}
