import { z } from "zod";

export interface DnsRecord {
  id?: number;
  type?: "A" | "CNAME" | "PTR" | "MX" | "NS" | "TXT" | "SOA" | "AXFR" | "SRV" | "AAAA" | "DS" | "CAA" | "TLSA" | "HTTPS";
  host?: string;
  value?: string;
  opt?: string;
  ttl?: number;
}

export const DnsRecordRequestSchema = z.object({
  "type": z.enum(["A", "CNAME", "PTR", "MX", "NS", "TXT", "SOA", "AXFR", "SRV", "AAAA", "DS", "CAA", "TLSA", "HTTPS"]).optional(),
  "host": z.string().optional(),
  "value": z.string().optional(),
  "opt": z.string().optional(),
  "ttl": z.number().optional(),
});
export type DnsRecordRequest = z.infer<typeof DnsRecordRequestSchema>;

