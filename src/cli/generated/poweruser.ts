/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _poweruserOptionFlags,
  _poweruserFlagKeys,
  PoweruserOnRequestSchema,
  PoweruserOffRequestSchema,
  type PoweruserOnRequest,
  type PoweruserOffRequest,
} from "../../models/cli-commands/poweruser.js";

/** Power User Mode */
export class PoweruserResource {
  constructor(private readonly http: HttpClient) {}

  /** Power User Mode: on */
  on(body: PoweruserOnRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "poweruser",
      command: "--on",
      schema: PoweruserOnRequestSchema,
      body,
      optionFlags: _poweruserOptionFlags,
      flagKeys: _poweruserFlagKeys,
    });
  }

  /** Power User Mode: off */
  off(body: PoweruserOffRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "poweruser",
      command: "--off",
      schema: PoweruserOffRequestSchema,
      body,
      optionFlags: _poweruserOptionFlags,
      flagKeys: _poweruserFlagKeys,
    });
  }
}
