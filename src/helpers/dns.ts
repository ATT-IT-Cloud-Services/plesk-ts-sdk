import { z } from "zod";
import { parseOrThrow } from "../errors.js";
import type { PleskClient } from "../client.js";
import { DnsRecordRequestSchema } from "../models/dns.js";

export const UpsertDnsRecordSchema = DnsRecordRequestSchema.extend({
  domain: z.string().min(1),
  match: z
    .object({
      type: z.string().optional(),
      host: z.string().optional(),
    })
    .optional(),
});
export type UpsertDnsRecordInput = z.infer<typeof UpsertDnsRecordSchema>;

export async function upsertDnsRecord(client: PleskClient, input: UpsertDnsRecordInput) {
  const data = parseOrThrow(UpsertDnsRecordSchema, input);
  const { domain, match, ...record } = data;
  const records = await client.dns.listRecords(domain);

  const type = match?.type ?? record.type;
  const host = match?.host ?? record.host;

  const existing = records.find(
    (r) =>
      (type === undefined || r.type === type) &&
      (host === undefined || r.host === host),
  );

  if (existing?.id !== undefined) {
    await client.dns.updateRecord(existing.id, record);
    return { action: "updated" as const, id: existing.id, record: existing };
  }

  const created = await client.dns.createRecord(domain, record);
  return { action: "created" as const, id: created.id, record: created };
}
