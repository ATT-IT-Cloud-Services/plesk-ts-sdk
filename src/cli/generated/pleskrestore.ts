/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _pleskrestoreOptionFlags,
  _pleskrestoreFlagKeys,
  PleskrestoreRestoreRequestSchema,
  PleskrestoreCheckBackupRequestSchema,
  PleskrestoreInfoRequestSchema,
  PleskrestoreGetRestoreTaskStatusRequestSchema,
  PleskrestoreManRequestSchema,
  type PleskrestoreRestoreRequest,
  type PleskrestoreCheckBackupRequest,
  type PleskrestoreInfoRequest,
  type PleskrestoreGetRestoreTaskStatusRequest,
  type PleskrestoreManRequest,
} from "../../models/cli-commands/pleskrestore.js";

/** Restoration from Backup */
export class PleskrestoreResource {
  constructor(private readonly http: HttpClient) {}

  /** Restoration from Backup: restore */
  restore(body: PleskrestoreRestoreRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskrestore",
      command: "--restore",
      schema: PleskrestoreRestoreRequestSchema,
      body,
      optionFlags: _pleskrestoreOptionFlags,
      flagKeys: _pleskrestoreFlagKeys,
    });
  }

  /** Restoration from Backup: checkBackup */
  checkBackup(body: PleskrestoreCheckBackupRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskrestore",
      command: "--check-backup",
      schema: PleskrestoreCheckBackupRequestSchema,
      body,
      optionFlags: _pleskrestoreOptionFlags,
      flagKeys: _pleskrestoreFlagKeys,
    });
  }

  /** Restoration from Backup: info */
  info(body: PleskrestoreInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskrestore",
      command: "--info",
      schema: PleskrestoreInfoRequestSchema,
      body,
      optionFlags: _pleskrestoreOptionFlags,
      flagKeys: _pleskrestoreFlagKeys,
    });
  }

  /** Restoration from Backup: getRestoreTaskStatus */
  getRestoreTaskStatus(body: PleskrestoreGetRestoreTaskStatusRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskrestore",
      command: "--get-restore-task-status",
      schema: PleskrestoreGetRestoreTaskStatusRequestSchema,
      body,
      optionFlags: _pleskrestoreOptionFlags,
      flagKeys: _pleskrestoreFlagKeys,
    });
  }

  /** Restoration from Backup: man */
  man(body: PleskrestoreManRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskrestore",
      command: "--man",
      schema: PleskrestoreManRequestSchema,
      body,
      optionFlags: _pleskrestoreOptionFlags,
      flagKeys: _pleskrestoreFlagKeys,
    });
  }
}
