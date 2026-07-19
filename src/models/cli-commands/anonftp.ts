/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _anonftpOptionFlags: Record<string, string> = {

};

/** @internal */
export const _anonftpFlagKeys: string[] = [];

/** Request for `plesk.anonftp.update` */
export const AnonftpUpdateRequestSchema = z.object({
  name: z.string(),
});
export type AnonftpUpdateRequest = z.infer<typeof AnonftpUpdateRequestSchema>;

/** Request for `plesk.anonftp.info` */
export const AnonftpInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type AnonftpInfoRequest = z.infer<typeof AnonftpInfoRequestSchema>;

