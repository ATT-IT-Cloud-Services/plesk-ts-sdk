/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _licenseOptionFlags: Record<string, string> = {

};

/** @internal */
export const _licenseFlagKeys: string[] = [];

/** Request for `plesk.license.install` */
export const LicenseInstallRequestSchema = z.object({
  name: z.string().optional(),
});
export type LicenseInstallRequest = z.infer<typeof LicenseInstallRequestSchema>;

/** Request for `plesk.license.checkInstalledLicense` */
export const LicenseCheckInstalledLicenseRequestSchema = z.object({
  name: z.string().optional(),
});
export type LicenseCheckInstalledLicenseRequest = z.infer<typeof LicenseCheckInstalledLicenseRequestSchema>;

/** Request for `plesk.license.retrieve` */
export const LicenseRetrieveRequestSchema = z.object({
  name: z.string().optional(),
});
export type LicenseRetrieveRequest = z.infer<typeof LicenseRetrieveRequestSchema>;

