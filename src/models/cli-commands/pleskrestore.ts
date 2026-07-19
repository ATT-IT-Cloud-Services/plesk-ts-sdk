/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _pleskrestoreOptionFlags: Record<string, string> = {

};

/** @internal */
export const _pleskrestoreFlagKeys: string[] = [];

/** Request for `plesk.pleskrestore.restore` */
export const PleskrestoreRestoreRequestSchema = z.object({
  name: z.string(),
});
export type PleskrestoreRestoreRequest = z.infer<typeof PleskrestoreRestoreRequestSchema>;

/** Request for `plesk.pleskrestore.checkBackup` */
export const PleskrestoreCheckBackupRequestSchema = z.object({
  name: z.string(),
});
export type PleskrestoreCheckBackupRequest = z.infer<typeof PleskrestoreCheckBackupRequestSchema>;

/** Request for `plesk.pleskrestore.info` */
export const PleskrestoreInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type PleskrestoreInfoRequest = z.infer<typeof PleskrestoreInfoRequestSchema>;

/** Request for `plesk.pleskrestore.getRestoreTaskStatus` */
export const PleskrestoreGetRestoreTaskStatusRequestSchema = z.object({
  name: z.string(),
});
export type PleskrestoreGetRestoreTaskStatusRequest = z.infer<typeof PleskrestoreGetRestoreTaskStatusRequestSchema>;

/** Request for `plesk.pleskrestore.man` */
export const PleskrestoreManRequestSchema = z.object({
  name: z.string().optional(),
});
export type PleskrestoreManRequest = z.infer<typeof PleskrestoreManRequestSchema>;

