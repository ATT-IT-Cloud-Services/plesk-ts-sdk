/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _dnsZonesOptionFlags: Record<string, string> = {

};

/** @internal */
export const _dnsZonesFlagKeys: string[] = [];

/** Request for `plesk.dnsZones.add` */
export const DnsZonesAddRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesAddRequest = z.infer<typeof DnsZonesAddRequestSchema>;

/** Request for `plesk.dnsZones.set` */
export const DnsZonesSetRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesSetRequest = z.infer<typeof DnsZonesSetRequestSchema>;

/** Request for `plesk.dnsZones.del` */
export const DnsZonesDelRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesDelRequest = z.infer<typeof DnsZonesDelRequestSchema>;

/** Request for `plesk.dnsZones.delAll` */
export const DnsZonesDelAllRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesDelAllRequest = z.infer<typeof DnsZonesDelAllRequestSchema>;

/** Request for `plesk.dnsZones.reset` */
export const DnsZonesResetRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesResetRequest = z.infer<typeof DnsZonesResetRequestSchema>;

/** Request for `plesk.dnsZones.on` */
export const DnsZonesOnRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesOnRequest = z.infer<typeof DnsZonesOnRequestSchema>;

/** Request for `plesk.dnsZones.off` */
export const DnsZonesOffRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesOffRequest = z.infer<typeof DnsZonesOffRequestSchema>;

/** Request for `plesk.dnsZones.setMaster` */
export const DnsZonesSetMasterRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesSetMasterRequest = z.infer<typeof DnsZonesSetMasterRequestSchema>;

/** Request for `plesk.dnsZones.setSlave` */
export const DnsZonesSetSlaveRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesSetSlaveRequest = z.infer<typeof DnsZonesSetSlaveRequestSchema>;

/** Request for `plesk.dnsZones.updateSoa` */
export const DnsZonesUpdateSoaRequestSchema = z.object({
  name: z.string(),
});
export type DnsZonesUpdateSoaRequest = z.infer<typeof DnsZonesUpdateSoaRequestSchema>;

/** Request for `plesk.dnsZones.info` */
export const DnsZonesInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type DnsZonesInfoRequest = z.infer<typeof DnsZonesInfoRequestSchema>;

