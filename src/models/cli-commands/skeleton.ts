/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _skeletonOptionFlags: Record<string, string> = {

};

/** @internal */
export const _skeletonFlagKeys: string[] = [];

/** Request for `plesk.skeleton.install` */
export const SkeletonInstallRequestSchema = z.object({
  name: z.string().optional(),
});
export type SkeletonInstallRequest = z.infer<typeof SkeletonInstallRequestSchema>;

/** Request for `plesk.skeleton.reset` */
export const SkeletonResetRequestSchema = z.object({
  name: z.string().optional(),
});
export type SkeletonResetRequest = z.infer<typeof SkeletonResetRequestSchema>;

