/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _maillistOptionFlags: Record<string, string> = {

};

/** @internal */
export const _maillistFlagKeys: string[] = [];

/** Request for `plesk.maillist.create` */
export const MaillistCreateRequestSchema = z.object({
  name: z.string(),
});
export type MaillistCreateRequest = z.infer<typeof MaillistCreateRequestSchema>;

/** Request for `plesk.maillist.update` */
export const MaillistUpdateRequestSchema = z.object({
  name: z.string(),
});
export type MaillistUpdateRequest = z.infer<typeof MaillistUpdateRequestSchema>;

/** Request for `plesk.maillist.updateService` */
export const MaillistUpdateServiceRequestSchema = z.object({
  name: z.string(),
});
export type MaillistUpdateServiceRequest = z.infer<typeof MaillistUpdateServiceRequestSchema>;

/** Request for `plesk.maillist.remove` */
export const MaillistRemoveRequestSchema = z.object({
  name: z.string(),
});
export type MaillistRemoveRequest = z.infer<typeof MaillistRemoveRequestSchema>;

/** Request for `plesk.maillist.on` */
export const MaillistOnRequestSchema = z.object({
  name: z.string(),
});
export type MaillistOnRequest = z.infer<typeof MaillistOnRequestSchema>;

/** Request for `plesk.maillist.off` */
export const MaillistOffRequestSchema = z.object({
  name: z.string(),
});
export type MaillistOffRequest = z.infer<typeof MaillistOffRequestSchema>;

/** Request for `plesk.maillist.setSecureLinks` */
export const MaillistSetSecureLinksRequestSchema = z.object({
  name: z.string(),
});
export type MaillistSetSecureLinksRequest = z.infer<typeof MaillistSetSecureLinksRequestSchema>;

/** Request for `plesk.maillist.info` */
export const MaillistInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type MaillistInfoRequest = z.infer<typeof MaillistInfoRequestSchema>;

