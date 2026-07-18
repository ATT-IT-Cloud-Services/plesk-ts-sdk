# @elizonapp/plesk-ts-sdk

TypeScript SDK for the [Plesk RESTful API](https://docs.plesk.com/) (`/api/v2`).

## Install

GitHub Packages (scope `@elizonapp`):

```bash
npm install @elizonapp/plesk-ts-sdk --registry=https://npm.pkg.github.com
```

Or configure `.npmrc`:

```
@elizonapp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Quick start

```ts
import { PleskClient } from "@elizonapp/plesk-ts-sdk";

const plesk = new PleskClient({
  host: "hostname:8443",
  apiKey: "your-api-key",
  ips: ["1.1.1.1"],
  ownerLogin: "admin",
});

const ips = await plesk.server.listIps();
console.log(ips);
```

### Auth variants

```ts
// X-API-Key
new PleskClient({ host: "panel.example.com:8443", apiKey: "..." });

// Pre-encoded Basic token
new PleskClient({ host: "panel.example.com:8443", basicAuth: "base64(user:pass)" });

// Username + password
new PleskClient({
  host: "panel.example.com:8443",
  username: "admin",
  password: "secret",
  impersonateLogin: "customer1", // optional X-Impersonate-Login
});
```

## Resources

| Namespace | Methods |
|-----------|---------|
| `auth` | `createKey`, `deleteKey`, `createSession` |
| `cli` | `listCommands`, `getRef`, `call` |
| `server` | `getMeta`, `init`, `installLicense`, `listIps` |
| `extensions` | `list`, `install`, `get`, `delete`, `enable`, `disable` |
| `clients` | `list`, `create`, `get`, `update`, `delete`, `listDomains`, `getStatistics`, `activate`, `suspend` |
| `domains` | `list`, `create`, `get`, `update`, `delete`, `getClient`, `getStatus`, `setStatus`, `exec`, `getDnsResolution`, `getLogs` |
| `files` | `getMeta`, `delete`, `list`, `getContent`, `putContent`, `appendContent`, `mkdir`, `copy`, `move`, `chmod` |
| `ftpusers` | `list`, `create`, `update`, `delete` |
| `databases` | `list`, `create`, `delete`, `listUsers`, `createUser`, `updateUser`, `deleteUser`, `listServers` |
| `dns` | `listRecords`, `createRecord`, `getRecord`, `updateRecord`, `deleteRecord` |

Request bodies are validated with **Zod**. Responses are typed TypeScript interfaces.

## Helpers

```ts
// Migrated from the legacy client
await plesk.helpers.createCustomerWithDomain("example.com", {
  name: "John Smith",
  email: "john@example.com",
}, "Unlimited");

await plesk.helpers.createDomainForExistingCustomer("shop.example.com", {
  name: "John Smith",
  email: "john@example.com",
}, "Unlimited");

// New helpers
await plesk.helpers.createDatabaseWithUser({
  name: "appdb",
  parent_domain: { name: "example.com" },
  type: "mysql",
});

await plesk.helpers.upsertDnsRecord({
  domain: "example.com",
  type: "A",
  host: "www",
  value: "1.2.3.4",
});

await plesk.helpers.createFtpUserForDomain({
  name: "ftpuser",
  parent_domain: { name: "example.com" },
});

await plesk.helpers.suspendDomain(7);
await plesk.helpers.activateDomain(7);
```

## Errors

- `ValidationError` — Zod validation failed before the request
- `PleskApiError` — API returned HTTP ≥ 400 (`code`, `message`, `status`, `body`)

## Development

```bash
npm install
npm run typecheck
npm run build
npm run smoke
```

## Migration from `plesk-node` (JS)
[plesk-node](https://github.com/ubarilan/plesk-node)

| Before | After |
|--------|--------|
| `new PleskClient(host, key, ips, owner)` | `new PleskClient({ host, apiKey/basicAuth/username+password, ips, ownerLogin })` |
| `plesk.domains()` | `plesk.domains.list()` |
| `plesk.clients()` | `plesk.clients.list()` |
| `plesk.getIPs()` | `plesk.server.listIps()` |
| `plesk.createClient(...)` | `plesk.clients.create(...)` |
| Package `plesk-node` | `@elizonapp/plesk-ts-sdk` |

## License

MIT
