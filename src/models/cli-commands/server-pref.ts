/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _serverPrefOptionFlags: Record<string, string> = {

};

/** @internal */
export const _serverPrefFlagKeys: string[] = [];

/** Request for `plesk.serverPref.setDefault` */
export const ServerPrefSetDefaultRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefSetDefaultRequest = z.infer<typeof ServerPrefSetDefaultRequestSchema>;

/** Request for `plesk.serverPref.localesList` */
export const ServerPrefLocalesListRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefLocalesListRequest = z.infer<typeof ServerPrefLocalesListRequestSchema>;

/** Request for `plesk.serverPref.skinsList` */
export const ServerPrefSkinsListRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefSkinsListRequest = z.infer<typeof ServerPrefSkinsListRequestSchema>;

/** Request for `plesk.serverPref.templatesList` */
export const ServerPrefTemplatesListRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefTemplatesListRequest = z.infer<typeof ServerPrefTemplatesListRequestSchema>;

/** Request for `plesk.serverPref.update` */
export const ServerPrefUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefUpdateRequest = z.infer<typeof ServerPrefUpdateRequestSchema>;

/** Request for `plesk.serverPref.show` */
export const ServerPrefShowRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefShowRequest = z.infer<typeof ServerPrefShowRequestSchema>;

/** Request for `plesk.serverPref.loadCustomizations` */
export const ServerPrefLoadCustomizationsRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefLoadCustomizationsRequest = z.infer<typeof ServerPrefLoadCustomizationsRequestSchema>;

/** Request for `plesk.serverPref.updateWebAppFirewall` */
export const ServerPrefUpdateWebAppFirewallRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefUpdateWebAppFirewallRequest = z.infer<typeof ServerPrefUpdateWebAppFirewallRequestSchema>;

/** Request for `plesk.serverPref.showWebAppFirewall` */
export const ServerPrefShowWebAppFirewallRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServerPrefShowWebAppFirewallRequest = z.infer<typeof ServerPrefShowWebAppFirewallRequestSchema>;

