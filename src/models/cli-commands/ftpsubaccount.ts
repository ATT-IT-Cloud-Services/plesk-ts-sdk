/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _ftpsubaccountOptionFlags: Record<string, string> = {

};

/** @internal */
export const _ftpsubaccountFlagKeys: string[] = [];

/** Request for `plesk.ftpsubaccount.create` */
export const FtpsubaccountCreateRequestSchema = z.object({
  name: z.string(),
});
export type FtpsubaccountCreateRequest = z.infer<typeof FtpsubaccountCreateRequestSchema>;

/** Request for `plesk.ftpsubaccount.update` */
export const FtpsubaccountUpdateRequestSchema = z.object({
  name: z.string(),
});
export type FtpsubaccountUpdateRequest = z.infer<typeof FtpsubaccountUpdateRequestSchema>;

/** Request for `plesk.ftpsubaccount.remove` */
export const FtpsubaccountRemoveRequestSchema = z.object({
  name: z.string(),
});
export type FtpsubaccountRemoveRequest = z.infer<typeof FtpsubaccountRemoveRequestSchema>;

/** Request for `plesk.ftpsubaccount.info` */
export const FtpsubaccountInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type FtpsubaccountInfoRequest = z.infer<typeof FtpsubaccountInfoRequestSchema>;

