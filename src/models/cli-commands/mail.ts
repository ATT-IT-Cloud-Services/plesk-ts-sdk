/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _mailOptionFlags: Record<string, string> = {

};

/** @internal */
export const _mailFlagKeys: string[] = [];

/** Request for `plesk.mail.create` */
export const MailCreateRequestSchema = z.object({
  name: z.string(),
});
export type MailCreateRequest = z.infer<typeof MailCreateRequestSchema>;

/** Request for `plesk.mail.update` */
export const MailUpdateRequestSchema = z.object({
  name: z.string(),
});
export type MailUpdateRequest = z.infer<typeof MailUpdateRequestSchema>;

/** Request for `plesk.mail.createService` */
export const MailCreateServiceRequestSchema = z.object({
  name: z.string(),
});
export type MailCreateServiceRequest = z.infer<typeof MailCreateServiceRequestSchema>;

/** Request for `plesk.mail.removeService` */
export const MailRemoveServiceRequestSchema = z.object({
  name: z.string(),
});
export type MailRemoveServiceRequest = z.infer<typeof MailRemoveServiceRequestSchema>;

/** Request for `plesk.mail.updateService` */
export const MailUpdateServiceRequestSchema = z.object({
  name: z.string(),
});
export type MailUpdateServiceRequest = z.infer<typeof MailUpdateServiceRequestSchema>;

/** Request for `plesk.mail.rename` */
export const MailRenameRequestSchema = z.object({
  name: z.string(),
});
export type MailRenameRequest = z.infer<typeof MailRenameRequestSchema>;

/** Request for `plesk.mail.list` */
export const MailListRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailListRequest = z.infer<typeof MailListRequestSchema>;

/** Request for `plesk.mail.remove` */
export const MailRemoveRequestSchema = z.object({
  name: z.string(),
});
export type MailRemoveRequest = z.infer<typeof MailRemoveRequestSchema>;

/** Request for `plesk.mail.on` */
export const MailOnRequestSchema = z.object({
  name: z.string(),
});
export type MailOnRequest = z.infer<typeof MailOnRequestSchema>;

/** Request for `plesk.mail.off` */
export const MailOffRequestSchema = z.object({
  name: z.string(),
});
export type MailOffRequest = z.infer<typeof MailOffRequestSchema>;

/** Request for `plesk.mail.info` */
export const MailInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailInfoRequest = z.infer<typeof MailInfoRequestSchema>;

