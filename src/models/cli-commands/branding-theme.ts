/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _brandingThemeOptionFlags: Record<string, string> = {

};

/** @internal */
export const _brandingThemeFlagKeys: string[] = [];

/** Request for `plesk.brandingTheme.pack` */
export const BrandingThemePackRequestSchema = z.object({
  name: z.string(),
});
export type BrandingThemePackRequest = z.infer<typeof BrandingThemePackRequestSchema>;

/** Request for `plesk.brandingTheme.install` */
export const BrandingThemeInstallRequestSchema = z.object({
  name: z.string(),
});
export type BrandingThemeInstallRequest = z.infer<typeof BrandingThemeInstallRequestSchema>;

/** Request for `plesk.brandingTheme.set` */
export const BrandingThemeSetRequestSchema = z.object({
  name: z.string(),
});
export type BrandingThemeSetRequest = z.infer<typeof BrandingThemeSetRequestSchema>;

/** Request for `plesk.brandingTheme.uninstall` */
export const BrandingThemeUninstallRequestSchema = z.object({
  name: z.string(),
});
export type BrandingThemeUninstallRequest = z.infer<typeof BrandingThemeUninstallRequestSchema>;

/** Request for `plesk.brandingTheme.list` */
export const BrandingThemeListRequestSchema = z.object({
  name: z.string().optional(),
});
export type BrandingThemeListRequest = z.infer<typeof BrandingThemeListRequestSchema>;

