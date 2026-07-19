/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _autoresponderOptionFlags,
  _autoresponderFlagKeys,
  AutoresponderUpdateRequestSchema,
  AutoresponderInfoRequestSchema,
  type AutoresponderUpdateRequest,
  type AutoresponderInfoRequest,
} from "../../models/cli-commands/autoresponder.js";

/** Mail Autoresponders */
export class AutoresponderResource {
  constructor(private readonly http: HttpClient) {}

  /** Mail Autoresponders: update */
  update(body: AutoresponderUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "autoresponder",
      command: "--update",
      schema: AutoresponderUpdateRequestSchema,
      body,
      optionFlags: _autoresponderOptionFlags,
      flagKeys: _autoresponderFlagKeys,
    });
  }

  /** Mail Autoresponders: info */
  info(body: AutoresponderInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "autoresponder",
      command: "--info",
      schema: AutoresponderInfoRequestSchema,
      body,
      optionFlags: _autoresponderOptionFlags,
      flagKeys: _autoresponderFlagKeys,
    });
  }
}
