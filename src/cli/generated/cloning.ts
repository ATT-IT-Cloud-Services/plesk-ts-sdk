/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _cloningOptionFlags,
  _cloningFlagKeys,
  CloningUpdateRequestSchema,
  CloningInfoRequestSchema,
  CloningStatusRequestSchema,
  type CloningUpdateRequest,
  type CloningInfoRequest,
  type CloningStatusRequest,
} from "../../models/cli-commands/cloning.js";

/** Server Cloning Settings */
export class CloningResource {
  constructor(private readonly http: HttpClient) {}

  /** Server Cloning Settings: update */
  update(body: CloningUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "cloning",
      command: "--update",
      schema: CloningUpdateRequestSchema,
      body,
      optionFlags: _cloningOptionFlags,
      flagKeys: _cloningFlagKeys,
    });
  }

  /** Server Cloning Settings: info */
  info(body: CloningInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "cloning",
      command: "--info",
      schema: CloningInfoRequestSchema,
      body,
      optionFlags: _cloningOptionFlags,
      flagKeys: _cloningFlagKeys,
    });
  }

  /** Server Cloning Settings: status */
  status(body: CloningStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "cloning",
      command: "--status",
      schema: CloningStatusRequestSchema,
      body,
      optionFlags: _cloningOptionFlags,
      flagKeys: _cloningFlagKeys,
    });
  }
}
