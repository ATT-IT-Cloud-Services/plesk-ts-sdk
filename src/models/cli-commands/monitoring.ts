/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _monitoringOptionFlags: Record<string, string> = {

};

/** @internal */
export const _monitoringFlagKeys: string[] = [];

/** Request for `plesk.monitoring.installation` */
export const MonitoringInstallationRequestSchema = z.object({
  name: z.string().optional(),
});
export type MonitoringInstallationRequest = z.infer<typeof MonitoringInstallationRequestSchema>;

/** Request for `plesk.monitoring.overview` */
export const MonitoringOverviewRequestSchema = z.object({
  name: z.string().optional(),
});
export type MonitoringOverviewRequest = z.infer<typeof MonitoringOverviewRequestSchema>;

/** Request for `plesk.monitoring.thresholds` */
export const MonitoringThresholdsRequestSchema = z.object({
  name: z.string().optional(),
});
export type MonitoringThresholdsRequest = z.infer<typeof MonitoringThresholdsRequestSchema>;

/** Request for `plesk.monitoring.arrangement` */
export const MonitoringArrangementRequestSchema = z.object({
  name: z.string().optional(),
});
export type MonitoringArrangementRequest = z.infer<typeof MonitoringArrangementRequestSchema>;

