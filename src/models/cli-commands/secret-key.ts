/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _secretKeyOptionFlags: Record<string, string> = {

};

/** @internal */
export const _secretKeyFlagKeys: string[] = [];

/** Request for `plesk.secretKey.create` */
export const SecretKeyCreateRequestSchema = z.object({
  name: z.string(),
});
export type SecretKeyCreateRequest = z.infer<typeof SecretKeyCreateRequestSchema>;

/** Request for `plesk.secretKey.list` */
export const SecretKeyListRequestSchema = z.object({
  name: z.string().optional(),
});
export type SecretKeyListRequest = z.infer<typeof SecretKeyListRequestSchema>;

/** Request for `plesk.secretKey.delete` */
export const SecretKeyDeleteRequestSchema = z.object({
  name: z.string(),
});
export type SecretKeyDeleteRequest = z.infer<typeof SecretKeyDeleteRequestSchema>;

