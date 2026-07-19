/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _webstatOptionFlags,
  _webstatFlagKeys,
  WebstatAddRequestSchema,
  WebstatRemoveRequestSchema,
  WebstatListRequestSchema,
  WebstatDelAllRequestSchema,
  type WebstatAddRequest,
  type WebstatRemoveRequest,
  type WebstatListRequest,
  type WebstatDelAllRequest,
} from "../../models/cli-commands/webstat.js";

/** Web Statistics */
export class WebstatResource {
  constructor(private readonly http: HttpClient) {}

  /** Web Statistics: add */
  add(body: WebstatAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webstat",
      command: "--add",
      schema: WebstatAddRequestSchema,
      body,
      optionFlags: _webstatOptionFlags,
      flagKeys: _webstatFlagKeys,
    });
  }

  /** Web Statistics: remove */
  remove(body: WebstatRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webstat",
      command: "--remove",
      schema: WebstatRemoveRequestSchema,
      body,
      optionFlags: _webstatOptionFlags,
      flagKeys: _webstatFlagKeys,
    });
  }

  /** Web Statistics: list */
  list(body: WebstatListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webstat",
      command: "--list",
      schema: WebstatListRequestSchema,
      body,
      optionFlags: _webstatOptionFlags,
      flagKeys: _webstatFlagKeys,
    });
  }

  /** Web Statistics: delAll */
  delAll(body: WebstatDelAllRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "webstat",
      command: "--del-all",
      schema: WebstatDelAllRequestSchema,
      body,
      optionFlags: _webstatOptionFlags,
      flagKeys: _webstatFlagKeys,
    });
  }
}
