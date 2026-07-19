/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _serviceOptionFlags,
  _serviceFlagKeys,
  ServiceStartRequestSchema,
  ServiceStopRequestSchema,
  ServiceRestartRequestSchema,
  ServiceStatusRequestSchema,
  ServiceListRequestSchema,
  type ServiceStartRequest,
  type ServiceStopRequest,
  type ServiceRestartRequest,
  type ServiceStatusRequest,
  type ServiceListRequest,
} from "../../models/cli-commands/service.js";

/** Services */
export class ServiceResource {
  constructor(private readonly http: HttpClient) {}

  /** Services: start */
  start(body: ServiceStartRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service",
      command: "--start",
      schema: ServiceStartRequestSchema,
      body,
      optionFlags: _serviceOptionFlags,
      flagKeys: _serviceFlagKeys,
    });
  }

  /** Services: stop */
  stop(body: ServiceStopRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service",
      command: "--stop",
      schema: ServiceStopRequestSchema,
      body,
      optionFlags: _serviceOptionFlags,
      flagKeys: _serviceFlagKeys,
    });
  }

  /** Services: restart */
  restart(body: ServiceRestartRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service",
      command: "--restart",
      schema: ServiceRestartRequestSchema,
      body,
      optionFlags: _serviceOptionFlags,
      flagKeys: _serviceFlagKeys,
    });
  }

  /** Services: status */
  status(body: ServiceStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service",
      command: "--status",
      schema: ServiceStatusRequestSchema,
      body,
      optionFlags: _serviceOptionFlags,
      flagKeys: _serviceFlagKeys,
    });
  }

  /** Services: list */
  list(body: ServiceListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service",
      command: "--list",
      schema: ServiceListRequestSchema,
      body,
      optionFlags: _serviceOptionFlags,
      flagKeys: _serviceFlagKeys,
    });
  }
}
