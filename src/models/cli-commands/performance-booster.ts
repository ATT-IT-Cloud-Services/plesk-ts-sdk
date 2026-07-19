/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _performanceBoosterOptionFlags: Record<string, string> = {

};

/** @internal */
export const _performanceBoosterFlagKeys: string[] = [];

/** Request for `plesk.performanceBooster.info` */
export const PerformanceBoosterInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterInfoRequest = z.infer<typeof PerformanceBoosterInfoRequestSchema>;

/** Request for `plesk.performanceBooster.status` */
export const PerformanceBoosterStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterStatusRequest = z.infer<typeof PerformanceBoosterStatusRequestSchema>;

/** Request for `plesk.performanceBooster.apply` */
export const PerformanceBoosterApplyRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterApplyRequest = z.infer<typeof PerformanceBoosterApplyRequestSchema>;

/** Request for `plesk.performanceBooster.revert` */
export const PerformanceBoosterRevertRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterRevertRequest = z.infer<typeof PerformanceBoosterRevertRequestSchema>;

/** Request for `plesk.performanceBooster.dbListSettings` */
export const PerformanceBoosterDbListSettingsRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterDbListSettingsRequest = z.infer<typeof PerformanceBoosterDbListSettingsRequestSchema>;

/** Request for `plesk.performanceBooster.dbApplySettings` */
export const PerformanceBoosterDbApplySettingsRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterDbApplySettingsRequest = z.infer<typeof PerformanceBoosterDbApplySettingsRequestSchema>;

/** Request for `plesk.performanceBooster.dbRevertSettings` */
export const PerformanceBoosterDbRevertSettingsRequestSchema = z.object({
  name: z.string().optional(),
});
export type PerformanceBoosterDbRevertSettingsRequest = z.infer<typeof PerformanceBoosterDbRevertSettingsRequestSchema>;

