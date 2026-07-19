/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _resellerPlanOptionFlags: Record<string, string> = {

};

/** @internal */
export const _resellerPlanFlagKeys: string[] = [];

/** Request for `plesk.resellerPlan.create` */
export const ResellerPlanCreateRequestSchema = z.object({
  name: z.string(),
});
export type ResellerPlanCreateRequest = z.infer<typeof ResellerPlanCreateRequestSchema>;

/** Request for `plesk.resellerPlan.update` */
export const ResellerPlanUpdateRequestSchema = z.object({
  name: z.string(),
});
export type ResellerPlanUpdateRequest = z.infer<typeof ResellerPlanUpdateRequestSchema>;

/** Request for `plesk.resellerPlan.duplicate` */
export const ResellerPlanDuplicateRequestSchema = z.object({
  name: z.string(),
});
export type ResellerPlanDuplicateRequest = z.infer<typeof ResellerPlanDuplicateRequestSchema>;

/** Request for `plesk.resellerPlan.remove` */
export const ResellerPlanRemoveRequestSchema = z.object({
  name: z.string(),
});
export type ResellerPlanRemoveRequest = z.infer<typeof ResellerPlanRemoveRequestSchema>;

/** Request for `plesk.resellerPlan.xmlInfo` */
export const ResellerPlanXmlInfoRequestSchema = z.object({
  name: z.string(),
});
export type ResellerPlanXmlInfoRequest = z.infer<typeof ResellerPlanXmlInfoRequestSchema>;

/** Request for `plesk.resellerPlan.createDefault` */
export const ResellerPlanCreateDefaultRequestSchema = z.object({
  name: z.string(),
});
export type ResellerPlanCreateDefaultRequest = z.infer<typeof ResellerPlanCreateDefaultRequestSchema>;

