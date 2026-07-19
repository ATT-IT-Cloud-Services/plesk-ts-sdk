/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _initConfOptionFlags: Record<string, string> = {

};

/** @internal */
export const _initConfFlagKeys: string[] = [];

/** Request for `plesk.initConf.init` */
export const InitConfInitRequestSchema = z.object({
  name: z.string().optional(),
});
export type InitConfInitRequest = z.infer<typeof InitConfInitRequestSchema>;

/** Request for `plesk.initConf.update` */
export const InitConfUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type InitConfUpdateRequest = z.infer<typeof InitConfUpdateRequestSchema>;

/** Request for `plesk.initConf.checkConfigured` */
export const InitConfCheckConfiguredRequestSchema = z.object({
  name: z.string().optional(),
});
export type InitConfCheckConfiguredRequest = z.infer<typeof InitConfCheckConfiguredRequestSchema>;

/** Request for `plesk.initConf.setAdminPassword` */
export const InitConfSetAdminPasswordRequestSchema = z.object({
  name: z.string().optional(),
});
export type InitConfSetAdminPasswordRequest = z.infer<typeof InitConfSetAdminPasswordRequestSchema>;

