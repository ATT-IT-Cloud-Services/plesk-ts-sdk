/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _dnssecOptionFlags: Record<string, string> = {

};

/** @internal */
export const _dnssecFlagKeys: string[] = [];

/** Request for `plesk.dnssec.list` */
export const DnssecListRequestSchema = z.object({
  name: z.string().optional(),
});
export type DnssecListRequest = z.infer<typeof DnssecListRequestSchema>;

/** Request for `plesk.dnssec.info` */
export const DnssecInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type DnssecInfoRequest = z.infer<typeof DnssecInfoRequestSchema>;

/** Request for `plesk.dnssec.sign` */
export const DnssecSignRequestSchema = z.object({
  name: z.string(),
});
export type DnssecSignRequest = z.infer<typeof DnssecSignRequestSchema>;

/** Request for `plesk.dnssec.unsign` */
export const DnssecUnsignRequestSchema = z.object({
  name: z.string(),
});
export type DnssecUnsignRequest = z.infer<typeof DnssecUnsignRequestSchema>;

