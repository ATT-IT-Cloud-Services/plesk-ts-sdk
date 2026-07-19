/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _brandingOptionFlags: Record<string, string> = {

};

/** @internal */
export const _brandingFlagKeys: string[] = [];

/** Request for `plesk.branding.customTitle` */
export const BrandingCustomTitleRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingCustomTitleRequest = z.infer<typeof BrandingCustomTitleRequestSchema>;

/** Request for `plesk.branding.customLogo` */
export const BrandingCustomLogoRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingCustomLogoRequest = z.infer<typeof BrandingCustomLogoRequestSchema>;

/** Request for `plesk.branding.resetTitle` */
export const BrandingResetTitleRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingResetTitleRequest = z.infer<typeof BrandingResetTitleRequestSchema>;

/** Request for `plesk.branding.resetLogo` */
export const BrandingResetLogoRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingResetLogoRequest = z.infer<typeof BrandingResetLogoRequestSchema>;

/** Request for `plesk.branding.setCustomBackground` */
export const BrandingSetCustomBackgroundRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingSetCustomBackgroundRequest = z.infer<typeof BrandingSetCustomBackgroundRequestSchema>;

/** Request for `plesk.branding.resetCustomBackground` */
export const BrandingResetCustomBackgroundRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingResetCustomBackgroundRequest = z.infer<typeof BrandingResetCustomBackgroundRequestSchema>;

/** Request for `plesk.branding.show` */
export const BrandingShowRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingShowRequest = z.infer<typeof BrandingShowRequestSchema>;

