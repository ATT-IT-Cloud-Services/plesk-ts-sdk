/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _webuserOptionFlags,
  _webuserFlagKeys,
  WebuserCreateRequestSchema,
  WebuserUpdateRequestSchema,
  WebuserRemoveRequestSchema,
  WebuserInfoRequestSchema,
  type WebuserCreateRequest,
  type WebuserUpdateRequest,
  type WebuserRemoveRequest,
  type WebuserInfoRequest,
} from "../../models/cli-commands/webuser.js";

/** Web Users */
export class WebuserResource {
  constructor(private readonly http: HttpClient) {}

  /** Web Users: create */
  create(body: WebuserCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webuser",
      command: "--create",
      schema: WebuserCreateRequestSchema,
      body,
      optionFlags: _webuserOptionFlags,
      flagKeys: _webuserFlagKeys,
    });
  }

  /** Web Users: update */
  update(body: WebuserUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webuser",
      command: "--update",
      schema: WebuserUpdateRequestSchema,
      body,
      optionFlags: _webuserOptionFlags,
      flagKeys: _webuserFlagKeys,
    });
  }

  /** Web Users: remove */
  remove(body: WebuserRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webuser",
      command: "--remove",
      schema: WebuserRemoveRequestSchema,
      body,
      optionFlags: _webuserOptionFlags,
      flagKeys: _webuserFlagKeys,
    });
  }

  /** Web Users: info */
  info(body: WebuserInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webuser",
      command: "--info",
      schema: WebuserInfoRequestSchema,
      body,
      optionFlags: _webuserOptionFlags,
      flagKeys: _webuserFlagKeys,
    });
  }
}
