/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _autoresponderOptionFlags: Record<string, string> = {

};

/** @internal */
export const _autoresponderFlagKeys: string[] = [];

/** Request for `plesk.autoresponder.update` */
export const AutoresponderUpdateRequestSchema = z.object({
  name: z.string(),
});
export type AutoresponderUpdateRequest = z.infer<typeof AutoresponderUpdateRequestSchema>;

/** Request for `plesk.autoresponder.info` */
export const AutoresponderInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type AutoresponderInfoRequest = z.infer<typeof AutoresponderInfoRequestSchema>;

