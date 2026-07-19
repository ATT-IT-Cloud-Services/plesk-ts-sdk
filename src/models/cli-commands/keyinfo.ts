/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _keyinfoOptionFlags: Record<string, string> = {

};

/** @internal */
export const _keyinfoFlagKeys: string[] = [];

/** Request for `plesk.keyinfo.info` */
export const KeyinfoInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type KeyinfoInfoRequest = z.infer<typeof KeyinfoInfoRequestSchema>;

/** Request for `plesk.keyinfo.list` */
export const KeyinfoListRequestSchema = z.object({
  name: z.string().optional(),
});
export type KeyinfoListRequest = z.infer<typeof KeyinfoListRequestSchema>;

/** Request for `plesk.keyinfo.testKey` */
export const KeyinfoTestKeyRequestSchema = z.object({
  name: z.string().optional(),
});
export type KeyinfoTestKeyRequest = z.infer<typeof KeyinfoTestKeyRequestSchema>;

