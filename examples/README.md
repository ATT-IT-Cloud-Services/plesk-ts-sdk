# Examples

Scripts that **read** data from a Plesk panel using both:

- **REST (JSON)** — `plesk.domains`, `plesk.clients`, `plesk.dns`, …
- **Management APIs** — `plesk.subscription`, `plesk.mail`, `plesk.dnsZones`, … (same call style; transport is transparent)

## Setup

```bash
npm run build

export PLESK_HOST="panel.example.com:8443"
export PLESK_API_KEY="your-api-key"
# or: PLESK_USER=admin PLESK_PASSWORD=secret

# optional for domain-scoped examples
export PLESK_DOMAIN="example.com"
```

Run with Node 22+ (strip types) or `tsx`:

```bash
node --experimental-strip-types examples/fetch-overview.ts
# npx tsx examples/fetch-overview.ts
```

## Scripts

| File | What it fetches |
|------|-----------------|
| [`fetch-overview.ts`](fetch-overview.ts) | Server, clients, domains, DNS, DBs, mail, PHP, extensions |
| [`fetch-server.ts`](fetch-server.ts) | Server meta/IPs (REST) + admin/product/locales (management) |
| [`fetch-clients.ts`](fetch-clients.ts) | Clients/statistics (REST) + customer list/info (management) |
| [`fetch-domains.ts`](fetch-domains.ts) | Domains/status (REST) + subscription/site/subdomain (management) |
| [`fetch-dns.ts`](fetch-dns.ts) | DNS records (REST) + zone / server template (management) |
| [`fetch-databases.ts`](fetch-databases.ts) | Databases/users/servers (REST) + databaseServer (management) |
| [`fetch-mail.ts`](fetch-mail.ts) | Domains (REST) + mail/mailserver (management) |
| [`fetch-files-extensions.ts`](fetch-files-extensions.ts) | Files/FTP/extensions (REST) + phpHandler/nodejs (management) |

Shared client: [`client.ts`](client.ts).
