/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _servicePlanAddonOptionFlags: Record<string, string> = {

};

/** @internal */
export const _servicePlanAddonFlagKeys: string[] = [];

/** Request for `plesk.servicePlanAddon.create` */
export const ServicePlanAddonCreateRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonCreateRequest = z.infer<typeof ServicePlanAddonCreateRequestSchema>;

/** Request for `plesk.servicePlanAddon.update` */
export const ServicePlanAddonUpdateRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonUpdateRequest = z.infer<typeof ServicePlanAddonUpdateRequestSchema>;

/** Request for `plesk.servicePlanAddon.duplicate` */
export const ServicePlanAddonDuplicateRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonDuplicateRequest = z.infer<typeof ServicePlanAddonDuplicateRequestSchema>;

/** Request for `plesk.servicePlanAddon.remove` */
export const ServicePlanAddonRemoveRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonRemoveRequest = z.infer<typeof ServicePlanAddonRemoveRequestSchema>;

/** Request for `plesk.servicePlanAddon.info` */
export const ServicePlanAddonInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServicePlanAddonInfoRequest = z.infer<typeof ServicePlanAddonInfoRequestSchema>;

/** Request for `plesk.servicePlanAddon.xmlInfo` */
export const ServicePlanAddonXmlInfoRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonXmlInfoRequest = z.infer<typeof ServicePlanAddonXmlInfoRequestSchema>;

/** Request for `plesk.servicePlanAddon.updatePhpSettings` */
export const ServicePlanAddonUpdatePhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonUpdatePhpSettingsRequest = z.infer<typeof ServicePlanAddonUpdatePhpSettingsRequestSchema>;

/** Request for `plesk.servicePlanAddon.showPhpSettings` */
export const ServicePlanAddonShowPhpSettingsRequestSchema = z.object({
  name: z.string(),
});
export type ServicePlanAddonShowPhpSettingsRequest = z.infer<typeof ServicePlanAddonShowPhpSettingsRequestSchema>;

