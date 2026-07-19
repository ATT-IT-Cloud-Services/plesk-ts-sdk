/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _subscriptionOptionFlags: Record<string, string> = {

};

/** @internal */
export const _subscriptionFlagKeys: string[] = [];

/** Request for `plesk.subscription.create` */
export const SubscriptionCreateRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionCreateRequest = z.infer<typeof SubscriptionCreateRequestSchema>;

/** Request for `plesk.subscription.update` */
export const SubscriptionUpdateRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionUpdateRequest = z.infer<typeof SubscriptionUpdateRequestSchema>;

/** Request for `plesk.subscription.merge` */
export const SubscriptionMergeRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionMergeRequest = z.infer<typeof SubscriptionMergeRequestSchema>;

/** Request for `plesk.subscription.remove` */
export const SubscriptionRemoveRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionRemoveRequest = z.infer<typeof SubscriptionRemoveRequestSchema>;

/** Request for `plesk.subscription.list` */
export const SubscriptionListRequestSchema = z.object({
  name: z.string().optional(),
});
export type SubscriptionListRequest = z.infer<typeof SubscriptionListRequestSchema>;

/** Request for `plesk.subscription.info` */
export const SubscriptionInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type SubscriptionInfoRequest = z.infer<typeof SubscriptionInfoRequestSchema>;

/** Request for `plesk.subscription.webspaceOn` */
export const SubscriptionWebspaceOnRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionWebspaceOnRequest = z.infer<typeof SubscriptionWebspaceOnRequestSchema>;

/** Request for `plesk.subscription.webspaceOff` */
export const SubscriptionWebspaceOffRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionWebspaceOffRequest = z.infer<typeof SubscriptionWebspaceOffRequestSchema>;

/** Request for `plesk.subscription.lockSubscription` */
export const SubscriptionLockSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionLockSubscriptionRequest = z.infer<typeof SubscriptionLockSubscriptionRequestSchema>;

/** Request for `plesk.subscription.unlockSubscription` */
export const SubscriptionUnlockSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionUnlockSubscriptionRequest = z.infer<typeof SubscriptionUnlockSubscriptionRequestSchema>;

/** Request for `plesk.subscription.noSubscription` */
export const SubscriptionNoSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionNoSubscriptionRequest = z.infer<typeof SubscriptionNoSubscriptionRequestSchema>;

/** Request for `plesk.subscription.switchSubscription` */
export const SubscriptionSwitchSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSwitchSubscriptionRequest = z.infer<typeof SubscriptionSwitchSubscriptionRequestSchema>;

/** Request for `plesk.subscription.syncSubscription` */
export const SubscriptionSyncSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSyncSubscriptionRequest = z.infer<typeof SubscriptionSyncSubscriptionRequestSchema>;

/** Request for `plesk.subscription.addSubscription` */
export const SubscriptionAddSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionAddSubscriptionRequest = z.infer<typeof SubscriptionAddSubscriptionRequestSchema>;

/** Request for `plesk.subscription.removeSubscription` */
export const SubscriptionRemoveSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionRemoveSubscriptionRequest = z.infer<typeof SubscriptionRemoveSubscriptionRequestSchema>;

/** Request for `plesk.subscription.changeOwner` */
export const SubscriptionChangeOwnerRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionChangeOwnerRequest = z.infer<typeof SubscriptionChangeOwnerRequestSchema>;

/** Request for `plesk.subscription.addCustomPlanItem` */
export const SubscriptionAddCustomPlanItemRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionAddCustomPlanItemRequest = z.infer<typeof SubscriptionAddCustomPlanItemRequestSchema>;

/** Request for `plesk.subscription.removeCustomPlanItem` */
export const SubscriptionRemoveCustomPlanItemRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionRemoveCustomPlanItemRequest = z.infer<typeof SubscriptionRemoveCustomPlanItemRequestSchema>;

/** Request for `plesk.subscription.removeAllCustomPlanItems` */
export const SubscriptionRemoveAllCustomPlanItemsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionRemoveAllCustomPlanItemsRequest = z.infer<typeof SubscriptionRemoveAllCustomPlanItemsRequestSchema>;

/** Request for `plesk.subscription.showCustomPlanItems` */
export const SubscriptionShowCustomPlanItemsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionShowCustomPlanItemsRequest = z.infer<typeof SubscriptionShowCustomPlanItemsRequestSchema>;

/** Request for `plesk.subscription.shells` */
export const SubscriptionShellsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionShellsRequest = z.infer<typeof SubscriptionShellsRequestSchema>;

/** Request for `plesk.subscription.updatePhpSettings` */
export const SubscriptionUpdatePhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionUpdatePhpSettingsRequest = z.infer<typeof SubscriptionUpdatePhpSettingsRequestSchema>;

/** Request for `plesk.subscription.showPhpSettings` */
export const SubscriptionShowPhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionShowPhpSettingsRequest = z.infer<typeof SubscriptionShowPhpSettingsRequestSchema>;

/** Request for `plesk.subscription.updateWebServerSettings` */
export const SubscriptionUpdateWebServerSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionUpdateWebServerSettingsRequest = z.infer<typeof SubscriptionUpdateWebServerSettingsRequestSchema>;

/** Request for `plesk.subscription.showWebServerSettings` */
export const SubscriptionShowWebServerSettingsRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionShowWebServerSettingsRequest = z.infer<typeof SubscriptionShowWebServerSettingsRequestSchema>;

/** Request for `plesk.subscription.suspend` */
export const SubscriptionSuspendRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionSuspendRequest = z.infer<typeof SubscriptionSuspendRequestSchema>;

/** Request for `plesk.subscription.updateWebAppFirewall` */
export const SubscriptionUpdateWebAppFirewallRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionUpdateWebAppFirewallRequest = z.infer<typeof SubscriptionUpdateWebAppFirewallRequestSchema>;

/** Request for `plesk.subscription.showWebAppFirewall` */
export const SubscriptionShowWebAppFirewallRequestSchema = z.object({
  name: z.string(),
});
export type SubscriptionShowWebAppFirewallRequest = z.infer<typeof SubscriptionShowWebAppFirewallRequestSchema>;

