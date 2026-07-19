/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _servicePlanOptionFlags: Record<string, string> = {

};

/** @internal */
export const _servicePlanFlagKeys: string[] = [];

/** Request for `plesk.servicePlan.create` */
export const ServicePlanCreateRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanCreateRequest = z.infer<typeof ServicePlanCreateRequestSchema>;

/** Request for `plesk.servicePlan.update` */
export const ServicePlanUpdateRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanUpdateRequest = z.infer<typeof ServicePlanUpdateRequestSchema>;

/** Request for `plesk.servicePlan.duplicate` */
export const ServicePlanDuplicateRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanDuplicateRequest = z.infer<typeof ServicePlanDuplicateRequestSchema>;

/** Request for `plesk.servicePlan.remove` */
export const ServicePlanRemoveRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanRemoveRequest = z.infer<typeof ServicePlanRemoveRequestSchema>;

/** Request for `plesk.servicePlan.createDefault` */
export const ServicePlanCreateDefaultRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanCreateDefaultRequest = z.infer<typeof ServicePlanCreateDefaultRequestSchema>;

/** Request for `plesk.servicePlan.info` */
export const ServicePlanInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServicePlanInfoRequest = z.infer<typeof ServicePlanInfoRequestSchema>;

/** Request for `plesk.servicePlan.xmlInfo` */
export const ServicePlanXmlInfoRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanXmlInfoRequest = z.infer<typeof ServicePlanXmlInfoRequestSchema>;

/** Request for `plesk.servicePlan.addCustomPlanItem` */
export const ServicePlanAddCustomPlanItemRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddCustomPlanItemRequest = z.infer<typeof ServicePlanAddCustomPlanItemRequestSchema>;

/** Request for `plesk.servicePlan.removeCustomPlanItem` */
export const ServicePlanRemoveCustomPlanItemRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanRemoveCustomPlanItemRequest = z.infer<typeof ServicePlanRemoveCustomPlanItemRequestSchema>;

/** Request for `plesk.servicePlan.removeAllCustomPlanItems` */
export const ServicePlanRemoveAllCustomPlanItemsRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanRemoveAllCustomPlanItemsRequest = z.infer<typeof ServicePlanRemoveAllCustomPlanItemsRequestSchema>;

/** Request for `plesk.servicePlan.showCustomPlanItems` */
export const ServicePlanShowCustomPlanItemsRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanShowCustomPlanItemsRequest = z.infer<typeof ServicePlanShowCustomPlanItemsRequestSchema>;

/** Request for `plesk.servicePlan.updatePhpSettings` */
export const ServicePlanUpdatePhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanUpdatePhpSettingsRequest = z.infer<typeof ServicePlanUpdatePhpSettingsRequestSchema>;

/** Request for `plesk.servicePlan.showPhpSettings` */
export const ServicePlanShowPhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanShowPhpSettingsRequest = z.infer<typeof ServicePlanShowPhpSettingsRequestSchema>;

