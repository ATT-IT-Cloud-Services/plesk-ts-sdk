/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _ipmanageOptionFlags: Record<string, string> = {

};

/** @internal */
export const _ipmanageFlagKeys: string[] = [];

/** Request for `plesk.ipmanage.create` */
export const IpmanageCreateRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageCreateRequest = z.infer<typeof IpmanageCreateRequestSchema>;

/** Request for `plesk.ipmanage.update` */
export const IpmanageUpdateRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageUpdateRequest = z.infer<typeof IpmanageUpdateRequestSchema>;

/** Request for `plesk.ipmanage.remove` */
export const IpmanageRemoveRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageRemoveRequest = z.infer<typeof IpmanageRemoveRequestSchema>;

/** Request for `plesk.ipmanage.reread` */
export const IpmanageRereadRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageRereadRequest = z.infer<typeof IpmanageRereadRequestSchema>;

/** Request for `plesk.ipmanage.ipList` */
export const IpmanageIpListRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpmanageIpListRequest = z.infer<typeof IpmanageIpListRequestSchema>;

/** Request for `plesk.ipmanage.sslList` */
export const IpmanageSslListRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpmanageSslListRequest = z.infer<typeof IpmanageSslListRequestSchema>;

/** Request for `plesk.ipmanage.interList` */
export const IpmanageInterListRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpmanageInterListRequest = z.infer<typeof IpmanageInterListRequestSchema>;

/** Request for `plesk.ipmanage.xmlInfo` */
export const IpmanageXmlInfoRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageXmlInfoRequest = z.infer<typeof IpmanageXmlInfoRequestSchema>;

/** Request for `plesk.ipmanage.resetSslCertificate` */
export const IpmanageResetSslCertificateRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageResetSslCertificateRequest = z.infer<typeof IpmanageResetSslCertificateRequestSchema>;

/** Request for `plesk.ipmanage.autoRemapIpAddresses` */
export const IpmanageAutoRemapIpAddressesRequestSchema = z.object({
  name: z.string(),
});
export type IpmanageAutoRemapIpAddressesRequest = z.infer<typeof IpmanageAutoRemapIpAddressesRequestSchema>;

