/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _actionLogOptionFlags: Record<string, string> = {

};

/** @internal */
export const _actionLogFlagKeys: string[] = [];

/** Request for `plesk.actionLog.show` */
export const ActionLogShowRequestSchema = z.object({
  name: z.string().optional(),
});
export type ActionLogShowRequest = z.infer<typeof ActionLogShowRequestSchema>;

/** Request for `plesk.actionLog.info` */
export const ActionLogInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type ActionLogInfoRequest = z.infer<typeof ActionLogInfoRequestSchema>;

/** Request for `plesk.actionLog.update` */
export const ActionLogUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type ActionLogUpdateRequest = z.infer<typeof ActionLogUpdateRequestSchema>;

