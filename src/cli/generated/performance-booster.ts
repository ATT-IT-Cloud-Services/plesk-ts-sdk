/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _performanceBoosterOptionFlags,
  _performanceBoosterFlagKeys,
  PerformanceBoosterInfoRequestSchema,
  PerformanceBoosterStatusRequestSchema,
  PerformanceBoosterApplyRequestSchema,
  PerformanceBoosterRevertRequestSchema,
  PerformanceBoosterDbListSettingsRequestSchema,
  PerformanceBoosterDbApplySettingsRequestSchema,
  PerformanceBoosterDbRevertSettingsRequestSchema,
  type PerformanceBoosterInfoRequest,
  type PerformanceBoosterStatusRequest,
  type PerformanceBoosterApplyRequest,
  type PerformanceBoosterRevertRequest,
  type PerformanceBoosterDbListSettingsRequest,
  type PerformanceBoosterDbApplySettingsRequest,
  type PerformanceBoosterDbRevertSettingsRequest,
} from "../../models/cli-commands/performance-booster.js";

/** Website Performance Optimization */
export class PerformanceBoosterResource {
  constructor(private readonly http: HttpClient) {}

  /** Website Performance Optimization: info */
  info(body: PerformanceBoosterInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "info",
      schema: PerformanceBoosterInfoRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }

  /** Website Performance Optimization: status */
  status(body: PerformanceBoosterStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "status",
      schema: PerformanceBoosterStatusRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }

  /** Website Performance Optimization: apply */
  apply(body: PerformanceBoosterApplyRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "apply",
      schema: PerformanceBoosterApplyRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }

  /** Website Performance Optimization: revert */
  revert(body: PerformanceBoosterRevertRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "revert",
      schema: PerformanceBoosterRevertRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }

  /** Website Performance Optimization: dbListSettings */
  dbListSettings(body: PerformanceBoosterDbListSettingsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "db:list-settings",
      schema: PerformanceBoosterDbListSettingsRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }

  /** Website Performance Optimization: dbApplySettings */
  dbApplySettings(body: PerformanceBoosterDbApplySettingsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "db:apply-settings",
      schema: PerformanceBoosterDbApplySettingsRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }

  /** Website Performance Optimization: dbRevertSettings */
  dbRevertSettings(body: PerformanceBoosterDbRevertSettingsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "performance-booster",
      command: "db:revert-settings",
      schema: PerformanceBoosterDbRevertSettingsRequestSchema,
      body,
      optionFlags: _performanceBoosterOptionFlags,
      flagKeys: _performanceBoosterFlagKeys,
    });
  }
}
