/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _spamassassinOptionFlags,
  _spamassassinFlagKeys,
  SpamassassinUpdateRequestSchema,
  SpamassassinUpdateServerRequestSchema,
  SpamassassinInfoRequestSchema,
  SpamassassinInfoServerRequestSchema,
  type SpamassassinUpdateRequest,
  type SpamassassinUpdateServerRequest,
  type SpamassassinInfoRequest,
  type SpamassassinInfoServerRequest,
} from "../../models/cli-commands/spamassassin.js";

/** Spam Filtering */
export class SpamassassinResource {
  constructor(private readonly http: HttpClient) {}

  /** Spam Filtering: update */
  update(body: SpamassassinUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "spamassassin",
      command: "--update",
      schema: SpamassassinUpdateRequestSchema,
      body,
      optionFlags: _spamassassinOptionFlags,
      flagKeys: _spamassassinFlagKeys,
    });
  }

  /** Spam Filtering: updateServer */
  updateServer(body: SpamassassinUpdateServerRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "spamassassin",
      command: "--update-server",
      schema: SpamassassinUpdateServerRequestSchema,
      body,
      optionFlags: _spamassassinOptionFlags,
      flagKeys: _spamassassinFlagKeys,
    });
  }

  /** Spam Filtering: info */
  info(body: SpamassassinInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "spamassassin",
      command: "--info",
      schema: SpamassassinInfoRequestSchema,
      body,
      optionFlags: _spamassassinOptionFlags,
      flagKeys: _spamassassinFlagKeys,
    });
  }

  /** Spam Filtering: infoServer */
  infoServer(body: SpamassassinInfoServerRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "spamassassin",
      command: "--info-server",
      schema: SpamassassinInfoServerRequestSchema,
      body,
      optionFlags: _spamassassinOptionFlags,
      flagKeys: _spamassassinFlagKeys,
    });
  }
}
