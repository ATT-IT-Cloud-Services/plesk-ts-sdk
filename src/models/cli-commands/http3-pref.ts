/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _http3PrefOptionFlags: Record<string, string> = {

};

/** @internal */
export const _http3PrefFlagKeys: string[] = [];

/** Request for `plesk.http3Pref.enable` */
export const Http3PrefEnableRequestSchema = z.object({
  name: z.string().optional(),
});
export type Http3PrefEnableRequest = z.infer<typeof Http3PrefEnableRequestSchema>;

/** Request for `plesk.http3Pref.disable` */
export const Http3PrefDisableRequestSchema = z.object({
  name: z.string().optional(),
});
export type Http3PrefDisableRequest = z.infer<typeof Http3PrefDisableRequestSchema>;

/** Request for `plesk.http3Pref.status` */
export const Http3PrefStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type Http3PrefStatusRequest = z.infer<typeof Http3PrefStatusRequestSchema>;

