/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _siteOptionFlags: Record<string, string> = {

};

/** @internal */
export const _siteFlagKeys: string[] = [];

/** Request for `plesk.site.create` */
export const SiteCreateRequestSchema = z.object({
  name: z.string(),
});
export type SiteCreateRequest = z.infer<typeof SiteCreateRequestSchema>;

/** Request for `plesk.site.update` */
export const SiteUpdateRequestSchema = z.object({
  name: z.string(),
});
export type SiteUpdateRequest = z.infer<typeof SiteUpdateRequestSchema>;

/** Request for `plesk.site.move` */
export const SiteMoveRequestSchema = z.object({
  name: z.string(),
});
export type SiteMoveRequest = z.infer<typeof SiteMoveRequestSchema>;

/** Request for `plesk.site.remove` */
export const SiteRemoveRequestSchema = z.object({
  name: z.string(),
});
export type SiteRemoveRequest = z.infer<typeof SiteRemoveRequestSchema>;

/** Request for `plesk.site.info` */
export const SiteInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type SiteInfoRequest = z.infer<typeof SiteInfoRequestSchema>;

/** Request for `plesk.site.on` */
export const SiteOnRequestSchema = z.object({
  name: z.string(),
});
export type SiteOnRequest = z.infer<typeof SiteOnRequestSchema>;

/** Request for `plesk.site.suspend` */
export const SiteSuspendRequestSchema = z.object({
  name: z.string(),
});
export type SiteSuspendRequest = z.infer<typeof SiteSuspendRequestSchema>;

/** Request for `plesk.site.off` */
export const SiteOffRequestSchema = z.object({
  name: z.string(),
});
export type SiteOffRequest = z.infer<typeof SiteOffRequestSchema>;

/** Request for `plesk.site.list` */
export const SiteListRequestSchema = z.object({
  name: z.string().optional(),
});
export type SiteListRequest = z.infer<typeof SiteListRequestSchema>;

/** Request for `plesk.site.updatePhpSettings` */
export const SiteUpdatePhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SiteUpdatePhpSettingsRequest = z.infer<typeof SiteUpdatePhpSettingsRequestSchema>;

/** Request for `plesk.site.showPhpSettings` */
export const SiteShowPhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SiteShowPhpSettingsRequest = z.infer<typeof SiteShowPhpSettingsRequestSchema>;

