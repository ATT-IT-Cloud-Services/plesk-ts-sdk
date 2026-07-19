/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _optimizationSettingsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _optimizationSettingsFlagKeys: string[] = [];

/** Request for `plesk.optimizationSettings.enableModule` */
export const OptimizationSettingsEnableModuleRequestSchema = z.object({
  name: z.string().optional(),
});
export type OptimizationSettingsEnableModuleRequest = z.infer<typeof OptimizationSettingsEnableModuleRequestSchema>;

/** Request for `plesk.optimizationSettings.disableModule` */
export const OptimizationSettingsDisableModuleRequestSchema = z.object({
  name: z.string().optional(),
});
export type OptimizationSettingsDisableModuleRequest = z.infer<typeof OptimizationSettingsDisableModuleRequestSchema>;

/** Request for `plesk.optimizationSettings.status` */
export const OptimizationSettingsStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type OptimizationSettingsStatusRequest = z.infer<typeof OptimizationSettingsStatusRequestSchema>;

/** Request for `plesk.optimizationSettings.setMpm` */
export const OptimizationSettingsSetMpmRequestSchema = z.object({
  name: z.string().optional(),
});
export type OptimizationSettingsSetMpmRequest = z.infer<typeof OptimizationSettingsSetMpmRequestSchema>;

/** Request for `plesk.optimizationSettings.getMpm` */
export const OptimizationSettingsGetMpmRequestSchema = z.object({
  name: z.string().optional(),
});
export type OptimizationSettingsGetMpmRequest = z.infer<typeof OptimizationSettingsGetMpmRequestSchema>;

