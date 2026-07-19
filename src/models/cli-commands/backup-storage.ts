/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _backupStorageOptionFlags: Record<string, string> = {

};

/** @internal */
export const _backupStorageFlagKeys: string[] = [];

/** Request for `plesk.backupStorage.enable` */
export const BackupStorageEnableRequestSchema = z.object({
  name: z.string().optional(),
});
export type BackupStorageEnableRequest = z.infer<typeof BackupStorageEnableRequestSchema>;

/** Request for `plesk.backupStorage.disable` */
export const BackupStorageDisableRequestSchema = z.object({
  name: z.string().optional(),
});
export type BackupStorageDisableRequest = z.infer<typeof BackupStorageDisableRequestSchema>;

/** Request for `plesk.backupStorage.configure` */
export const BackupStorageConfigureRequestSchema = z.object({
  name: z.string().optional(),
});
export type BackupStorageConfigureRequest = z.infer<typeof BackupStorageConfigureRequestSchema>;

/** Request for `plesk.backupStorage.listBackups` */
export const BackupStorageListBackupsRequestSchema = z.object({
  name: z.string().optional(),
});
export type BackupStorageListBackupsRequest = z.infer<typeof BackupStorageListBackupsRequestSchema>;

/** Request for `plesk.backupStorage.enablePasswordProtection` */
export const BackupStorageEnablePasswordProtectionRequestSchema = z.object({
  name: z.string().optional(),
});
export type BackupStorageEnablePasswordProtectionRequest = z.infer<typeof BackupStorageEnablePasswordProtectionRequestSchema>;

/** Request for `plesk.backupStorage.disablePasswordProtection` */
export const BackupStorageDisablePasswordProtectionRequestSchema = z.object({
  name: z.string().optional(),
});
export type BackupStorageDisablePasswordProtectionRequest = z.infer<typeof BackupStorageDisablePasswordProtectionRequestSchema>;

