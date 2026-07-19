/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _localesOptionFlags: Record<string, string> = {

};

/** @internal */
export const _localesFlagKeys: string[] = [];

/** Request for `plesk.locales.setDefault` */
export const LocalesSetDefaultRequestSchema = z.object({
  name: z.string(),
});
export type LocalesSetDefaultRequest = z.infer<typeof LocalesSetDefaultRequestSchema>;

/** Request for `plesk.locales.enable` */
export const LocalesEnableRequestSchema = z.object({
  name: z.string(),
});
export type LocalesEnableRequest = z.infer<typeof LocalesEnableRequestSchema>;

/** Request for `plesk.locales.disable` */
export const LocalesDisableRequestSchema = z.object({
  name: z.string(),
});
export type LocalesDisableRequest = z.infer<typeof LocalesDisableRequestSchema>;

/** Request for `plesk.locales.list` */
export const LocalesListRequestSchema = z.object({
  name: z.string().optional(),
});
export type LocalesListRequest = z.infer<typeof LocalesListRequestSchema>;

/** Request for `plesk.locales.status` */
export const LocalesStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type LocalesStatusRequest = z.infer<typeof LocalesStatusRequestSchema>;

