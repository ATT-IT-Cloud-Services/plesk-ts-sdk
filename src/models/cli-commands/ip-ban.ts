/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _ipBanOptionFlags: Record<string, string> = {

};

/** @internal */
export const _ipBanFlagKeys: string[] = [];

/** Request for `plesk.ipBan.enable` */
export const IpBanEnableRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanEnableRequest = z.infer<typeof IpBanEnableRequestSchema>;

/** Request for `plesk.ipBan.disable` */
export const IpBanDisableRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanDisableRequest = z.infer<typeof IpBanDisableRequestSchema>;

/** Request for `plesk.ipBan.update` */
export const IpBanUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanUpdateRequest = z.infer<typeof IpBanUpdateRequestSchema>;

/** Request for `plesk.ipBan.info` */
export const IpBanInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanInfoRequest = z.infer<typeof IpBanInfoRequestSchema>;

/** Request for `plesk.ipBan.trusted` */
export const IpBanTrustedRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanTrustedRequest = z.infer<typeof IpBanTrustedRequestSchema>;

/** Request for `plesk.ipBan.addTrusted` */
export const IpBanAddTrustedRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanAddTrustedRequest = z.infer<typeof IpBanAddTrustedRequestSchema>;

/** Request for `plesk.ipBan.removeTrusted` */
export const IpBanRemoveTrustedRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanRemoveTrustedRequest = z.infer<typeof IpBanRemoveTrustedRequestSchema>;

/** Request for `plesk.ipBan.banned` */
export const IpBanBannedRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanBannedRequest = z.infer<typeof IpBanBannedRequestSchema>;

/** Request for `plesk.ipBan.unban` */
export const IpBanUnbanRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanUnbanRequest = z.infer<typeof IpBanUnbanRequestSchema>;

/** Request for `plesk.ipBan.jails` */
export const IpBanJailsRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanJailsRequest = z.infer<typeof IpBanJailsRequestSchema>;

/** Request for `plesk.ipBan.enableJails` */
export const IpBanEnableJailsRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanEnableJailsRequest = z.infer<typeof IpBanEnableJailsRequestSchema>;

/** Request for `plesk.ipBan.disableJails` */
export const IpBanDisableJailsRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpBanDisableJailsRequest = z.infer<typeof IpBanDisableJailsRequestSchema>;

