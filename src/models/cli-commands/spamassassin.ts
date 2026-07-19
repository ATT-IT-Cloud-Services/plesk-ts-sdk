/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _spamassassinOptionFlags: Record<string, string> = {

};

/** @internal */
export const _spamassassinFlagKeys: string[] = [];

/** Request for `plesk.spamassassin.update` */
export const SpamassassinUpdateRequestSchema = z.object({
  name: z.string(),
});
export type SpamassassinUpdateRequest = z.infer<typeof SpamassassinUpdateRequestSchema>;

/** Request for `plesk.spamassassin.updateServer` */
export const SpamassassinUpdateServerRequestSchema = z.object({
  name: z.string().optional(),
});
export type SpamassassinUpdateServerRequest = z.infer<typeof SpamassassinUpdateServerRequestSchema>;

/** Request for `plesk.spamassassin.info` */
export const SpamassassinInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type SpamassassinInfoRequest = z.infer<typeof SpamassassinInfoRequestSchema>;

/** Request for `plesk.spamassassin.infoServer` */
export const SpamassassinInfoServerRequestSchema = z.object({
  name: z.string().optional(),
});
export type SpamassassinInfoServerRequest = z.infer<typeof SpamassassinInfoServerRequestSchema>;

