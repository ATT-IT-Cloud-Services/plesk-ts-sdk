/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _actionLogOptionFlags,
  _actionLogFlagKeys,
  ActionLogShowRequestSchema,
  ActionLogInfoRequestSchema,
  ActionLogUpdateRequestSchema,
  type ActionLogShowRequest,
  type ActionLogInfoRequest,
  type ActionLogUpdateRequest,
} from "../../models/cli-commands/action-log.js";

/** Action Log */
export class ActionLogResource {
  constructor(private readonly http: HttpClient) {}

  /** Action Log: show */
  show(body: ActionLogShowRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "action-log",
      command: "--show",
      schema: ActionLogShowRequestSchema,
      body,
      optionFlags: _actionLogOptionFlags,
      flagKeys: _actionLogFlagKeys,
    });
  }

  /** Action Log: info */
  info(body: ActionLogInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "action-log",
      command: "--info",
      schema: ActionLogInfoRequestSchema,
      body,
      optionFlags: _actionLogOptionFlags,
      flagKeys: _actionLogFlagKeys,
    });
  }

  /** Action Log: update */
  update(body: ActionLogUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "action-log",
      command: "--update",
      schema: ActionLogUpdateRequestSchema,
      body,
      optionFlags: _actionLogOptionFlags,
      flagKeys: _actionLogFlagKeys,
    });
  }
}
