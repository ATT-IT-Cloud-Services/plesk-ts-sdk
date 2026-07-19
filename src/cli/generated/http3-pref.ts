/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _http3PrefOptionFlags,
  _http3PrefFlagKeys,
  Http3PrefEnableRequestSchema,
  Http3PrefDisableRequestSchema,
  Http3PrefStatusRequestSchema,
  type Http3PrefEnableRequest,
  type Http3PrefDisableRequest,
  type Http3PrefStatusRequest,
} from "../../models/cli-commands/http3-pref.js";

/** HTTP/3 Support in Plesk */
export class Http3PrefResource {
  constructor(private readonly http: HttpClient) {}

  /** HTTP/3 Support in Plesk: enable */
  enable(body: Http3PrefEnableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "http3_pref",
      command: "--enable",
      schema: Http3PrefEnableRequestSchema,
      body,
      optionFlags: _http3PrefOptionFlags,
      flagKeys: _http3PrefFlagKeys,
    });
  }

  /** HTTP/3 Support in Plesk: disable */
  disable(body: Http3PrefDisableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "http3_pref",
      command: "--disable",
      schema: Http3PrefDisableRequestSchema,
      body,
      optionFlags: _http3PrefOptionFlags,
      flagKeys: _http3PrefFlagKeys,
    });
  }

  /** HTTP/3 Support in Plesk: status */
  status(body: Http3PrefStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "http3_pref",
      command: "--status",
      schema: Http3PrefStatusRequestSchema,
      body,
      optionFlags: _http3PrefOptionFlags,
      flagKeys: _http3PrefFlagKeys,
    });
  }
}
