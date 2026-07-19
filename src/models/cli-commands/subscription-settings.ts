/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _subscriptionSettingsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _subscriptionSettingsFlagKeys: string[] = [];

/** Request for `plesk.subscriptionSettings.update` */
export const SubscriptionSettingsUpdateRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSettingsUpdateRequest = z.infer<typeof SubscriptionSettingsUpdateRequestSchema>;

/** Request for `plesk.subscriptionSettings.info` */
export const SubscriptionSettingsInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type SubscriptionSettingsInfoRequest = z.infer<typeof SubscriptionSettingsInfoRequestSchema>;

/** Request for `plesk.subscriptionSettings.setDefault` */
export const SubscriptionSettingsSetDefaultRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSettingsSetDefaultRequest = z.infer<typeof SubscriptionSettingsSetDefaultRequestSchema>;

/** Request for `plesk.subscriptionSettings.updatePhpSettings` */
export const SubscriptionSettingsUpdatePhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSettingsUpdatePhpSettingsRequest = z.infer<typeof SubscriptionSettingsUpdatePhpSettingsRequestSchema>;

/** Request for `plesk.subscriptionSettings.showPhpSettings` */
export const SubscriptionSettingsShowPhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSettingsShowPhpSettingsRequest = z.infer<typeof SubscriptionSettingsShowPhpSettingsRequestSchema>;

/** Request for `plesk.subscriptionSettings.clearNginxCache` */
export const SubscriptionSettingsClearNginxCacheRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSettingsClearNginxCacheRequest = z.infer<typeof SubscriptionSettingsClearNginxCacheRequestSchema>;

