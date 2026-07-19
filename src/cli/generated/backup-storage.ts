/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _backupStorageOptionFlags,
  _backupStorageFlagKeys,
  BackupStorageEnableRequestSchema,
  BackupStorageDisableRequestSchema,
  BackupStorageConfigureRequestSchema,
  BackupStorageListBackupsRequestSchema,
  BackupStorageEnablePasswordProtectionRequestSchema,
  BackupStorageDisablePasswordProtectionRequestSchema,
  type BackupStorageEnableRequest,
  type BackupStorageDisableRequest,
  type BackupStorageConfigureRequest,
  type BackupStorageListBackupsRequest,
  type BackupStorageEnablePasswordProtectionRequest,
  type BackupStorageDisablePasswordProtectionRequest,
} from "../../models/cli-commands/backup-storage.js";

/** Managing Remote Backup Storage */
export class BackupStorageResource {
  constructor(private readonly http: HttpClient) {}

  /** Managing Remote Backup Storage: enable */
  enable(body: BackupStorageEnableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "backup-storage",
      command: "--enable",
      schema: BackupStorageEnableRequestSchema,
      body,
      optionFlags: _backupStorageOptionFlags,
      flagKeys: _backupStorageFlagKeys,
    });
  }

  /** Managing Remote Backup Storage: disable */
  disable(body: BackupStorageDisableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "backup-storage",
      command: "--disable",
      schema: BackupStorageDisableRequestSchema,
      body,
      optionFlags: _backupStorageOptionFlags,
      flagKeys: _backupStorageFlagKeys,
    });
  }

  /** Managing Remote Backup Storage: configure */
  configure(body: BackupStorageConfigureRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "backup-storage",
      command: "--configure",
      schema: BackupStorageConfigureRequestSchema,
      body,
      optionFlags: _backupStorageOptionFlags,
      flagKeys: _backupStorageFlagKeys,
    });
  }

  /** Managing Remote Backup Storage: listBackups */
  listBackups(body: BackupStorageListBackupsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "backup-storage",
      command: "--list-backups",
      schema: BackupStorageListBackupsRequestSchema,
      body,
      optionFlags: _backupStorageOptionFlags,
      flagKeys: _backupStorageFlagKeys,
    });
  }

  /** Managing Remote Backup Storage: enablePasswordProtection */
  enablePasswordProtection(body: BackupStorageEnablePasswordProtectionRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "backup-storage",
      command: "--enable-password-protection",
      schema: BackupStorageEnablePasswordProtectionRequestSchema,
      body,
      optionFlags: _backupStorageOptionFlags,
      flagKeys: _backupStorageFlagKeys,
    });
  }

  /** Managing Remote Backup Storage: disablePasswordProtection */
  disablePasswordProtection(body: BackupStorageDisablePasswordProtectionRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "backup-storage",
      command: "--disable-password-protection",
      schema: BackupStorageDisablePasswordProtectionRequestSchema,
      body,
      optionFlags: _backupStorageOptionFlags,
      flagKeys: _backupStorageFlagKeys,
    });
  }
}
