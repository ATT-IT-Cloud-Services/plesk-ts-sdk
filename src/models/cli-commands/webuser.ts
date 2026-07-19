/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _webuserOptionFlags: Record<string, string> = {

};

/** @internal */
export const _webuserFlagKeys: string[] = [];

/** Request for `plesk.webuser.create` */
export const WebuserCreateRequestSchema = z.object({
  name: z.string(),
});
export type WebuserCreateRequest = z.infer<typeof WebuserCreateRequestSchema>;

/** Request for `plesk.webuser.update` */
export const WebuserUpdateRequestSchema = z.object({
  name: z.string(),
});
export type WebuserUpdateRequest = z.infer<typeof WebuserUpdateRequestSchema>;

/** Request for `plesk.webuser.remove` */
export const WebuserRemoveRequestSchema = z.object({
  name: z.string(),
});
export type WebuserRemoveRequest = z.infer<typeof WebuserRemoveRequestSchema>;

/** Request for `plesk.webuser.info` */
export const WebuserInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type WebuserInfoRequest = z.infer<typeof WebuserInfoRequestSchema>;

