/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _vpsOptimizedOptionFlags: Record<string, string> = {

};

/** @internal */
export const _vpsOptimizedFlagKeys: string[] = [];

/** Request for `plesk.vpsOptimized.status` */
export const VpsOptimizedStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type VpsOptimizedStatusRequest = z.infer<typeof VpsOptimizedStatusRequestSchema>;

/** Request for `plesk.vpsOptimized.turnOn` */
export const VpsOptimizedTurnOnRequestSchema = z.object({
  name: z.string().optional(),
});
export type VpsOptimizedTurnOnRequest = z.infer<typeof VpsOptimizedTurnOnRequestSchema>;

/** Request for `plesk.vpsOptimized.turnOff` */
export const VpsOptimizedTurnOffRequestSchema = z.object({
  name: z.string().optional(),
});
export type VpsOptimizedTurnOffRequest = z.infer<typeof VpsOptimizedTurnOffRequestSchema>;

