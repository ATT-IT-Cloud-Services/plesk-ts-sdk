/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _vpsOptimizedOptionFlags,
  _vpsOptimizedFlagKeys,
  VpsOptimizedStatusRequestSchema,
  VpsOptimizedTurnOnRequestSchema,
  VpsOptimizedTurnOffRequestSchema,
  type VpsOptimizedStatusRequest,
  type VpsOptimizedTurnOnRequest,
  type VpsOptimizedTurnOffRequest,
} from "../../models/cli-commands/vps-optimized.js";

/** VPS-optimized Mode */
export class VpsOptimizedResource {
  constructor(private readonly http: HttpClient) {}

  /** VPS-optimized Mode: status */
  status(body: VpsOptimizedStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "vps_optimized",
      command: "--status",
      schema: VpsOptimizedStatusRequestSchema,
      body,
      optionFlags: _vpsOptimizedOptionFlags,
      flagKeys: _vpsOptimizedFlagKeys,
    });
  }

  /** VPS-optimized Mode: turnOn */
  turnOn(body: VpsOptimizedTurnOnRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "vps_optimized",
      command: "--turn-on",
      schema: VpsOptimizedTurnOnRequestSchema,
      body,
      optionFlags: _vpsOptimizedOptionFlags,
      flagKeys: _vpsOptimizedFlagKeys,
    });
  }

  /** VPS-optimized Mode: turnOff */
  turnOff(body: VpsOptimizedTurnOffRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "vps_optimized",
      command: "--turn-off",
      schema: VpsOptimizedTurnOffRequestSchema,
      body,
      optionFlags: _vpsOptimizedOptionFlags,
      flagKeys: _vpsOptimizedFlagKeys,
    });
  }
}
