/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _resellerOptionFlags: Record<string, string> = {

};

/** @internal */
export const _resellerFlagKeys: string[] = [];

/** Request for `plesk.reseller.create` */
export const ResellerCreateRequestSchema = z.object({
  name: z.string(),
});
export type ResellerCreateRequest = z.infer<typeof ResellerCreateRequestSchema>;

/** Request for `plesk.reseller.update` */
export const ResellerUpdateRequestSchema = z.object({
  name: z.string(),
});
export type ResellerUpdateRequest = z.infer<typeof ResellerUpdateRequestSchema>;

/** Request for `plesk.reseller.remove` */
export const ResellerRemoveRequestSchema = z.object({
  name: z.string(),
});
export type ResellerRemoveRequest = z.infer<typeof ResellerRemoveRequestSchema>;

/** Request for `plesk.reseller.info` */
export const ResellerInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type ResellerInfoRequest = z.infer<typeof ResellerInfoRequestSchema>;

/** Request for `plesk.reseller.on` */
export const ResellerOnRequestSchema = z.object({
  name: z.string(),
});
export type ResellerOnRequest = z.infer<typeof ResellerOnRequestSchema>;

/** Request for `plesk.reseller.off` */
export const ResellerOffRequestSchema = z.object({
  name: z.string(),
});
export type ResellerOffRequest = z.infer<typeof ResellerOffRequestSchema>;

/** Request for `plesk.reseller.lockSubscription` */
export const ResellerLockSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type ResellerLockSubscriptionRequest = z.infer<typeof ResellerLockSubscriptionRequestSchema>;

/** Request for `plesk.reseller.unlockSubscription` */
export const ResellerUnlockSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type ResellerUnlockSubscriptionRequest = z.infer<typeof ResellerUnlockSubscriptionRequestSchema>;

/** Request for `plesk.reseller.noSubscription` */
export const ResellerNoSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type ResellerNoSubscriptionRequest = z.infer<typeof ResellerNoSubscriptionRequestSchema>;

/** Request for `plesk.reseller.switchSubscription` */
export const ResellerSwitchSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type ResellerSwitchSubscriptionRequest = z.infer<typeof ResellerSwitchSubscriptionRequestSchema>;

/** Request for `plesk.reseller.syncSubscription` */
export const ResellerSyncSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type ResellerSyncSubscriptionRequest = z.infer<typeof ResellerSyncSubscriptionRequestSchema>;

/** Request for `plesk.reseller.convertToCustomer` */
export const ResellerConvertToCustomerRequestSchema = z.object({
  name: z.string(),
});
export type ResellerConvertToCustomerRequest = z.infer<typeof ResellerConvertToCustomerRequestSchema>;

