/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _scheduledBackupOptionFlags: Record<string, string> = {

};

/** @internal */
export const _scheduledBackupFlagKeys: string[] = [];

/** Request for `plesk.scheduledBackup.enable` */
export const ScheduledBackupEnableRequestSchema = z.object({
  name: z.string(),
});
export type ScheduledBackupEnableRequest = z.infer<typeof ScheduledBackupEnableRequestSchema>;

/** Request for `plesk.scheduledBackup.disable` */
export const ScheduledBackupDisableRequestSchema = z.object({
  name: z.string(),
});
export type ScheduledBackupDisableRequest = z.infer<typeof ScheduledBackupDisableRequestSchema>;

/** Request for `plesk.scheduledBackup.configure` */
export const ScheduledBackupConfigureRequestSchema = z.object({
  name: z.string(),
});
export type ScheduledBackupConfigureRequest = z.infer<typeof ScheduledBackupConfigureRequestSchema>;

/** Request for `plesk.scheduledBackup.run` */
export const ScheduledBackupRunRequestSchema = z.object({
  name: z.string(),
});
export type ScheduledBackupRunRequest = z.infer<typeof ScheduledBackupRunRequestSchema>;

/** Request for `plesk.scheduledBackup.list` */
export const ScheduledBackupListRequestSchema = z.object({
  name: z.string().optional(),
});
export type ScheduledBackupListRequest = z.infer<typeof ScheduledBackupListRequestSchema>;

