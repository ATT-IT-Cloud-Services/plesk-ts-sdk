/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _monitoringOptionFlags,
  _monitoringFlagKeys,
  MonitoringInstallationRequestSchema,
  MonitoringOverviewRequestSchema,
  MonitoringThresholdsRequestSchema,
  MonitoringArrangementRequestSchema,
  type MonitoringInstallationRequest,
  type MonitoringOverviewRequest,
  type MonitoringThresholdsRequest,
  type MonitoringArrangementRequest,
} from "../../models/cli-commands/monitoring.js";

/** Monitoring */
export class MonitoringResource {
  constructor(private readonly http: HttpClient) {}

  /** Monitoring: installation */
  installation(body: MonitoringInstallationRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "monitoring",
      command: "--installation",
      schema: MonitoringInstallationRequestSchema,
      body,
      optionFlags: _monitoringOptionFlags,
      flagKeys: _monitoringFlagKeys,
    });
  }

  /** Monitoring: overview */
  overview(body: MonitoringOverviewRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "monitoring",
      command: "--overview",
      schema: MonitoringOverviewRequestSchema,
      body,
      optionFlags: _monitoringOptionFlags,
      flagKeys: _monitoringFlagKeys,
    });
  }

  /** Monitoring: thresholds */
  thresholds(body: MonitoringThresholdsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "monitoring",
      command: "--thresholds",
      schema: MonitoringThresholdsRequestSchema,
      body,
      optionFlags: _monitoringOptionFlags,
      flagKeys: _monitoringFlagKeys,
    });
  }

  /** Monitoring: arrangement */
  arrangement(body: MonitoringArrangementRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "monitoring",
      command: "--arrangement",
      schema: MonitoringArrangementRequestSchema,
      body,
      optionFlags: _monitoringOptionFlags,
      flagKeys: _monitoringFlagKeys,
    });
  }
}
