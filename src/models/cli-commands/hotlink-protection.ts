/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _hotlinkProtectionOptionFlags: Record<string, string> = {

};

/** @internal */
export const _hotlinkProtectionFlagKeys: string[] = [];

/** Request for `plesk.hotlinkProtection.update` */
export const HotlinkProtectionUpdateRequestSchema = z.object({
  name: z.string(),
});
export type HotlinkProtectionUpdateRequest = z.infer<typeof HotlinkProtectionUpdateRequestSchema>;

/** Request for `plesk.hotlinkProtection.info` */
export const HotlinkProtectionInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type HotlinkProtectionInfoRequest = z.infer<typeof HotlinkProtectionInfoRequestSchema>;

