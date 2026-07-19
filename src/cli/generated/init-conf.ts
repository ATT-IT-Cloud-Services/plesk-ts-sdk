/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _initConfOptionFlags,
  _initConfFlagKeys,
  InitConfInitRequestSchema,
  InitConfUpdateRequestSchema,
  InitConfCheckConfiguredRequestSchema,
  InitConfSetAdminPasswordRequestSchema,
  type InitConfInitRequest,
  type InitConfUpdateRequest,
  type InitConfCheckConfiguredRequest,
  type InitConfSetAdminPasswordRequest,
} from "../../models/cli-commands/init-conf.js";

/** Server Configuration */
export class InitConfResource {
  constructor(private readonly http: HttpClient) {}

  /** Server Configuration: init */
  init(body: InitConfInitRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "init_conf",
      command: "--init",
      schema: InitConfInitRequestSchema,
      body,
      optionFlags: _initConfOptionFlags,
      flagKeys: _initConfFlagKeys,
    });
  }

  /** Server Configuration: update */
  update(body: InitConfUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "init_conf",
      command: "--update",
      schema: InitConfUpdateRequestSchema,
      body,
      optionFlags: _initConfOptionFlags,
      flagKeys: _initConfFlagKeys,
    });
  }

  /** Server Configuration: checkConfigured */
  checkConfigured(body: InitConfCheckConfiguredRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "init_conf",
      command: "--check-configured",
      schema: InitConfCheckConfiguredRequestSchema,
      body,
      optionFlags: _initConfOptionFlags,
      flagKeys: _initConfFlagKeys,
    });
  }

  /** Server Configuration: setAdminPassword */
  setAdminPassword(body: InitConfSetAdminPasswordRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "init_conf",
      command: "--set-admin-password",
      schema: InitConfSetAdminPasswordRequestSchema,
      body,
      optionFlags: _initConfOptionFlags,
      flagKeys: _initConfFlagKeys,
    });
  }
}
