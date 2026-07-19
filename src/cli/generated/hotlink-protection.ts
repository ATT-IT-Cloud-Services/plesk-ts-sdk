/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _hotlinkProtectionOptionFlags,
  _hotlinkProtectionFlagKeys,
  HotlinkProtectionUpdateRequestSchema,
  HotlinkProtectionInfoRequestSchema,
  type HotlinkProtectionUpdateRequest,
  type HotlinkProtectionInfoRequest,
} from "../../models/cli-commands/hotlink-protection.js";

/** Site Content Protection from Hotlinking */
export class HotlinkProtectionResource {
  constructor(private readonly http: HttpClient) {}

  /** Site Content Protection from Hotlinking: update */
  update(body: HotlinkProtectionUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "hotlink_protection",
      command: "--update",
      schema: HotlinkProtectionUpdateRequestSchema,
      body,
      optionFlags: _hotlinkProtectionOptionFlags,
      flagKeys: _hotlinkProtectionFlagKeys,
    });
  }

  /** Site Content Protection from Hotlinking: info */
  info(body: HotlinkProtectionInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "hotlink_protection",
      command: "--info",
      schema: HotlinkProtectionInfoRequestSchema,
      body,
      optionFlags: _hotlinkProtectionOptionFlags,
      flagKeys: _hotlinkProtectionFlagKeys,
    });
  }
}
