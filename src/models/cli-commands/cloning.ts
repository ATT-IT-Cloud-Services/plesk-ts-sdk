/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _cloningOptionFlags: Record<string, string> = {

};

/** @internal */
export const _cloningFlagKeys: string[] = [];

/** Request for `plesk.cloning.update` */
export const CloningUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type CloningUpdateRequest = z.infer<typeof CloningUpdateRequestSchema>;

/** Request for `plesk.cloning.info` */
export const CloningInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type CloningInfoRequest = z.infer<typeof CloningInfoRequestSchema>;

/** Request for `plesk.cloning.status` */
export const CloningStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type CloningStatusRequest = z.infer<typeof CloningStatusRequestSchema>;

