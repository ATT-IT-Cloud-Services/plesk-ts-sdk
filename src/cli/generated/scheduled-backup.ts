/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _scheduledBackupOptionFlags,
  _scheduledBackupFlagKeys,
  ScheduledBackupEnableRequestSchema,
  ScheduledBackupDisableRequestSchema,
  ScheduledBackupConfigureRequestSchema,
  ScheduledBackupRunRequestSchema,
  ScheduledBackupListRequestSchema,
  type ScheduledBackupEnableRequest,
  type ScheduledBackupDisableRequest,
  type ScheduledBackupConfigureRequest,
  type ScheduledBackupRunRequest,
  type ScheduledBackupListRequest,
} from "../../models/cli-commands/scheduled-backup.js";

/** Managing Scheduled Backup Tasks */
export class ScheduledBackupResource {
  constructor(private readonly http: HttpClient) {}

  /** Managing Scheduled Backup Tasks: enable */
  enable(body: ScheduledBackupEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "scheduled-backup",
      command: "--enable",
      schema: ScheduledBackupEnableRequestSchema,
      body,
      optionFlags: _scheduledBackupOptionFlags,
      flagKeys: _scheduledBackupFlagKeys,
    });
  }

  /** Managing Scheduled Backup Tasks: disable */
  disable(body: ScheduledBackupDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "scheduled-backup",
      command: "--disable",
      schema: ScheduledBackupDisableRequestSchema,
      body,
      optionFlags: _scheduledBackupOptionFlags,
      flagKeys: _scheduledBackupFlagKeys,
    });
  }

  /** Managing Scheduled Backup Tasks: configure */
  configure(body: ScheduledBackupConfigureRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "scheduled-backup",
      command: "--configure",
      schema: ScheduledBackupConfigureRequestSchema,
      body,
      optionFlags: _scheduledBackupOptionFlags,
      flagKeys: _scheduledBackupFlagKeys,
    });
  }

  /** Managing Scheduled Backup Tasks: run */
  run(body: ScheduledBackupRunRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "scheduled-backup",
      command: "--run",
      schema: ScheduledBackupRunRequestSchema,
      body,
      optionFlags: _scheduledBackupOptionFlags,
      flagKeys: _scheduledBackupFlagKeys,
    });
  }

  /** Managing Scheduled Backup Tasks: list */
  list(body: ScheduledBackupListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "scheduled-backup",
      command: "--list",
      schema: ScheduledBackupListRequestSchema,
      body,
      optionFlags: _scheduledBackupOptionFlags,
      flagKeys: _scheduledBackupFlagKeys,
    });
  }
}
