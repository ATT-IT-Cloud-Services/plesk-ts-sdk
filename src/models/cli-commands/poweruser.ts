/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _poweruserOptionFlags: Record<string, string> = {

};

/** @internal */
export const _poweruserFlagKeys: string[] = [];

/** Request for `plesk.poweruser.on` */
export const PoweruserOnRequestSchema = z.object({
  name: z.string().optional(),
});
export type PoweruserOnRequest = z.infer<typeof PoweruserOnRequestSchema>;

/** Request for `plesk.poweruser.off` */
export const PoweruserOffRequestSchema = z.object({
  name: z.string().optional(),
});
export type PoweruserOffRequest = z.infer<typeof PoweruserOffRequestSchema>;

