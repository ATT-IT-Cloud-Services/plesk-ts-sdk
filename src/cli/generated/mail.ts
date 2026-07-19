/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _mailOptionFlags,
  _mailFlagKeys,
  MailCreateRequestSchema,
  MailUpdateRequestSchema,
  MailCreateServiceRequestSchema,
  MailRemoveServiceRequestSchema,
  MailUpdateServiceRequestSchema,
  MailRenameRequestSchema,
  MailListRequestSchema,
  MailRemoveRequestSchema,
  MailOnRequestSchema,
  MailOffRequestSchema,
  MailInfoRequestSchema,
  type MailCreateRequest,
  type MailUpdateRequest,
  type MailCreateServiceRequest,
  type MailRemoveServiceRequest,
  type MailUpdateServiceRequest,
  type MailRenameRequest,
  type MailListRequest,
  type MailRemoveRequest,
  type MailOnRequest,
  type MailOffRequest,
  type MailInfoRequest,
} from "../../models/cli-commands/mail.js";

/** Mail Accounts */
export class MailResource {
  constructor(private readonly http: HttpClient) {}

  /** Mail Accounts: create */
  create(body: MailCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--create",
      schema: MailCreateRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: update */
  update(body: MailUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--update",
      schema: MailUpdateRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: createService */
  createService(body: MailCreateServiceRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--create-service",
      schema: MailCreateServiceRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: removeService */
  removeService(body: MailRemoveServiceRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--remove-service",
      schema: MailRemoveServiceRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: updateService */
  updateService(body: MailUpdateServiceRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--update-service",
      schema: MailUpdateServiceRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: rename */
  rename(body: MailRenameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--rename",
      schema: MailRenameRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: list */
  list(body: MailListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--list",
      schema: MailListRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: remove */
  remove(body: MailRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--remove",
      schema: MailRemoveRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: on */
  on(body: MailOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--on",
      schema: MailOnRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: off */
  off(body: MailOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--off",
      schema: MailOffRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }

  /** Mail Accounts: info */
  info(body: MailInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mail",
      command: "--info",
      schema: MailInfoRequestSchema,
      body,
      optionFlags: _mailOptionFlags,
      flagKeys: _mailFlagKeys,
    });
  }
}
