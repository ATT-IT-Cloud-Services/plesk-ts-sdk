/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _maillistOptionFlags,
  _maillistFlagKeys,
  MaillistCreateRequestSchema,
  MaillistUpdateRequestSchema,
  MaillistUpdateServiceRequestSchema,
  MaillistRemoveRequestSchema,
  MaillistOnRequestSchema,
  MaillistOffRequestSchema,
  MaillistSetSecureLinksRequestSchema,
  MaillistInfoRequestSchema,
  type MaillistCreateRequest,
  type MaillistUpdateRequest,
  type MaillistUpdateServiceRequest,
  type MaillistRemoveRequest,
  type MaillistOnRequest,
  type MaillistOffRequest,
  type MaillistSetSecureLinksRequest,
  type MaillistInfoRequest,
} from "../../models/cli-commands/maillist.js";

/** Mailing Lists */
export class MaillistResource {
  constructor(private readonly http: HttpClient) {}

  /** Mailing Lists: create */
  create(body: MaillistCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--create",
      schema: MaillistCreateRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: update */
  update(body: MaillistUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--update",
      schema: MaillistUpdateRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: updateService */
  updateService(body: MaillistUpdateServiceRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--update-service",
      schema: MaillistUpdateServiceRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: remove */
  remove(body: MaillistRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--remove",
      schema: MaillistRemoveRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: on */
  on(body: MaillistOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--on",
      schema: MaillistOnRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: off */
  off(body: MaillistOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--off",
      schema: MaillistOffRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: setSecureLinks */
  setSecureLinks(body: MaillistSetSecureLinksRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--set-secure-links",
      schema: MaillistSetSecureLinksRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }

  /** Mailing Lists: info */
  info(body: MaillistInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "maillist",
      command: "--info",
      schema: MaillistInfoRequestSchema,
      body,
      optionFlags: _maillistOptionFlags,
      flagKeys: _maillistFlagKeys,
    });
  }
}
