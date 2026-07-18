import {
  PleskClient,
  ClientRequestSchema,
  DomainRequestSchema,
  DomainStatusSchema,
  DnsRecordRequestSchema,
  PleskApiError,
  ValidationError,
} from "../dist/index.js";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

assert(typeof PleskClient === "function", "PleskClient export");
assert(typeof PleskApiError === "function", "PleskApiError export");
assert(typeof ValidationError === "function", "ValidationError export");

const client = new PleskClient({
  host: "example.com:8443",
  apiKey: "test-key",
  ips: ["1.1.1.1"],
  ownerLogin: "admin",
});

assert(client.host === "example.com:8443", "host");
assert(client.ips[0] === "1.1.1.1", "ips");
assert(client.ownerLogin === "admin", "ownerLogin");
assert(typeof client.clients.list === "function", "clients.list");
assert(typeof client.domains.create === "function", "domains.create");
assert(typeof client.files.list === "function", "files.list");
assert(typeof client.dns.listRecords === "function", "dns.listRecords");
assert(typeof client.helpers.createCustomerWithDomain === "function", "helpers");

const parsed = ClientRequestSchema.parse({
  name: "John",
  login: "john",
  email: "john@example.com",
  password: "Secret1",
  type: "customer",
});
assert(parsed.login === "john", "ClientRequestSchema");

const domain = DomainRequestSchema.parse({
  name: "example.com",
  hosting_type: "virtual",
  plan: { name: "Unlimited" },
});
assert(domain.name === "example.com", "DomainRequestSchema");

assert(DomainStatusSchema.parse({ status: "active" }).status === "active", "DomainStatus");
assert(
  DnsRecordRequestSchema.parse({ type: "A", host: "www", value: "1.2.3.4" }).type === "A",
  "DnsRecordRequest",
);

client.setURL("https://panel.example.com");
assert(client.host === "https://panel.example.com", "setURL");

client.setKey("new-key");
client.setImpersonate("reseller1");
client.setIPs(["9.9.9.9"]);
assert(client.ips[0] === "9.9.9.9", "setIPs");

let threw = false;
try {
  ClientRequestSchema.parse({ name: "x" });
} catch {
  threw = true;
}
assert(threw, "ClientRequestSchema rejects incomplete");

console.log("smoke-models: ok");
