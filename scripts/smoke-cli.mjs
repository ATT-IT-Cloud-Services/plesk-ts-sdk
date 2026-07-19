/**
 * Smoke: management APIs feel like normal SDK resources (no CLI surface).
 */
import {
  PleskClient,
  SubscriptionCreateRequestSchema,
  ValidationError,
} from "../dist/index.js";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

const client = new PleskClient({
  host: "example.com:8443",
  apiKey: "test-key",
});

assert(typeof client.domains.create === "function", "domains.create");
assert(typeof client.subscription.create === "function", "subscription.create");
assert(typeof client.mail.list === "function", "mail.list");
assert(typeof client.dnsZones.add === "function", "dnsZones.add");
assert(typeof client.phpHandler.list === "function", "phpHandler.list");
assert(typeof client.cli.call === "function", "cli low-level still available");

const ok = SubscriptionCreateRequestSchema.parse({
  name: "example.com",
  owner: "admin",
  servicePlan: "Default Domain",
});
assert(ok.name === "example.com", "schema uses name");

let threw = false;
try {
  SubscriptionCreateRequestSchema.parse({ owner: "admin" });
} catch {
  threw = true;
}
assert(threw, "name required");
assert(typeof ValidationError === "function", "ValidationError");

console.log("smoke-cli: ok");
