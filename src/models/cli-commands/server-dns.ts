/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _serverDnsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _serverDnsFlagKeys: string[] = [];

/** Request for `plesk.serverDns.add` */
export const ServerDnsAddRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsAddRequest = z.infer<typeof ServerDnsAddRequestSchema>;

/** Request for `plesk.serverDns.set` */
export const ServerDnsSetRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsSetRequest = z.infer<typeof ServerDnsSetRequestSchema>;

/** Request for `plesk.serverDns.updateServer` */
export const ServerDnsUpdateServerRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsUpdateServerRequest = z.infer<typeof ServerDnsUpdateServerRequestSchema>;

/** Request for `plesk.serverDns.updateSoa` */
export const ServerDnsUpdateSoaRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsUpdateSoaRequest = z.infer<typeof ServerDnsUpdateSoaRequestSchema>;

/** Request for `plesk.serverDns.info` */
export const ServerDnsInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsInfoRequest = z.infer<typeof ServerDnsInfoRequestSchema>;

/** Request for `plesk.serverDns.enableCustomBackend` */
export const ServerDnsEnableCustomBackendRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsEnableCustomBackendRequest = z.infer<typeof ServerDnsEnableCustomBackendRequestSchema>;

/** Request for `plesk.serverDns.disableCustomBackend` */
export const ServerDnsDisableCustomBackendRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsDisableCustomBackendRequest = z.infer<typeof ServerDnsDisableCustomBackendRequestSchema>;

/** Request for `plesk.serverDns.setCustomConfig` */
export const ServerDnsSetCustomConfigRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerDnsSetCustomConfigRequest = z.infer<typeof ServerDnsSetCustomConfigRequestSchema>;

