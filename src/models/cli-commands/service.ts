/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _serviceOptionFlags: Record<string, string> = {

};

/** @internal */
export const _serviceFlagKeys: string[] = [];

/** Request for `plesk.service.start` */
export const ServiceStartRequestSchema = z.object({
  name: z.string(),
});
export type ServiceStartRequest = z.infer<typeof ServiceStartRequestSchema>;

/** Request for `plesk.service.stop` */
export const ServiceStopRequestSchema = z.object({
  name: z.string(),
});
export type ServiceStopRequest = z.infer<typeof ServiceStopRequestSchema>;

/** Request for `plesk.service.restart` */
export const ServiceRestartRequestSchema = z.object({
  name: z.string(),
});
export type ServiceRestartRequest = z.infer<typeof ServiceRestartRequestSchema>;

/** Request for `plesk.service.status` */
export const ServiceStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServiceStatusRequest = z.infer<typeof ServiceStatusRequestSchema>;

/** Request for `plesk.service.list` */
export const ServiceListRequestSchema = z.object({
  name: z.string().optional(),
});
export type ServiceListRequest = z.infer<typeof ServiceListRequestSchema>;

