/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _optimizationSettingsOptionFlags,
  _optimizationSettingsFlagKeys,
  OptimizationSettingsEnableModuleRequestSchema,
  OptimizationSettingsDisableModuleRequestSchema,
  OptimizationSettingsStatusRequestSchema,
  OptimizationSettingsSetMpmRequestSchema,
  OptimizationSettingsGetMpmRequestSchema,
  type OptimizationSettingsEnableModuleRequest,
  type OptimizationSettingsDisableModuleRequest,
  type OptimizationSettingsStatusRequest,
  type OptimizationSettingsSetMpmRequest,
  type OptimizationSettingsGetMpmRequest,
} from "../../models/cli-commands/optimization-settings.js";

/** Apache Modules Management */
export class OptimizationSettingsResource {
  constructor(private readonly http: HttpClient) {}

  /** Apache Modules Management: enableModule */
  enableModule(body: OptimizationSettingsEnableModuleRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "optimization_settings",
      command: "--enable-module",
      schema: OptimizationSettingsEnableModuleRequestSchema,
      body,
      optionFlags: _optimizationSettingsOptionFlags,
      flagKeys: _optimizationSettingsFlagKeys,
    });
  }

  /** Apache Modules Management: disableModule */
  disableModule(body: OptimizationSettingsDisableModuleRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "optimization_settings",
      command: "--disable-module",
      schema: OptimizationSettingsDisableModuleRequestSchema,
      body,
      optionFlags: _optimizationSettingsOptionFlags,
      flagKeys: _optimizationSettingsFlagKeys,
    });
  }

  /** Apache Modules Management: status */
  status(body: OptimizationSettingsStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "optimization_settings",
      command: "--status",
      schema: OptimizationSettingsStatusRequestSchema,
      body,
      optionFlags: _optimizationSettingsOptionFlags,
      flagKeys: _optimizationSettingsFlagKeys,
    });
  }

  /** Apache Modules Management: setMpm */
  setMpm(body: OptimizationSettingsSetMpmRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "optimization_settings",
      command: "--set-mpm",
      schema: OptimizationSettingsSetMpmRequestSchema,
      body,
      optionFlags: _optimizationSettingsOptionFlags,
      flagKeys: _optimizationSettingsFlagKeys,
    });
  }

  /** Apache Modules Management: getMpm */
  getMpm(body: OptimizationSettingsGetMpmRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "optimization_settings",
      command: "--get-mpm",
      schema: OptimizationSettingsGetMpmRequestSchema,
      body,
      optionFlags: _optimizationSettingsOptionFlags,
      flagKeys: _optimizationSettingsFlagKeys,
    });
  }
}
