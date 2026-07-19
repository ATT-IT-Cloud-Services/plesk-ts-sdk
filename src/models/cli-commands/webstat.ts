/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _webstatOptionFlags: Record<string, string> = {

};

/** @internal */
export const _webstatFlagKeys: string[] = [];

/** Request for `plesk.webstat.add` */
export const WebstatAddRequestSchema = z.object({
  name: z.string(),
});
export type WebstatAddRequest = z.infer<typeof WebstatAddRequestSchema>;

/** Request for `plesk.webstat.remove` */
export const WebstatRemoveRequestSchema = z.object({
  name: z.string(),
});
export type WebstatRemoveRequest = z.infer<typeof WebstatRemoveRequestSchema>;

/** Request for `plesk.webstat.list` */
export const WebstatListRequestSchema = z.object({
  name: z.string().optional(),
});
export type WebstatListRequest = z.infer<typeof WebstatListRequestSchema>;

/** Request for `plesk.webstat.delAll` */
export const WebstatDelAllRequestSchema = z.object({
  name: z.string(),
});
export type WebstatDelAllRequest = z.infer<typeof WebstatDelAllRequestSchema>;

