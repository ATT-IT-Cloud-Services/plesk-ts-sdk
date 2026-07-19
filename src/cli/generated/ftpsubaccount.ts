/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _ftpsubaccountOptionFlags,
  _ftpsubaccountFlagKeys,
  FtpsubaccountCreateRequestSchema,
  FtpsubaccountUpdateRequestSchema,
  FtpsubaccountRemoveRequestSchema,
  FtpsubaccountInfoRequestSchema,
  type FtpsubaccountCreateRequest,
  type FtpsubaccountUpdateRequest,
  type FtpsubaccountRemoveRequest,
  type FtpsubaccountInfoRequest,
} from "../../models/cli-commands/ftpsubaccount.js";

/** Additional FTP Accounts */
export class FtpsubaccountResource {
  constructor(private readonly http: HttpClient) {}

  /** Additional FTP Accounts: create */
  create(body: FtpsubaccountCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ftpsubaccount",
      command: "--create",
      schema: FtpsubaccountCreateRequestSchema,
      body,
      optionFlags: _ftpsubaccountOptionFlags,
      flagKeys: _ftpsubaccountFlagKeys,
    });
  }

  /** Additional FTP Accounts: update */
  update(body: FtpsubaccountUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ftpsubaccount",
      command: "--update",
      schema: FtpsubaccountUpdateRequestSchema,
      body,
      optionFlags: _ftpsubaccountOptionFlags,
      flagKeys: _ftpsubaccountFlagKeys,
    });
  }

  /** Additional FTP Accounts: remove */
  remove(body: FtpsubaccountRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ftpsubaccount",
      command: "--remove",
      schema: FtpsubaccountRemoveRequestSchema,
      body,
      optionFlags: _ftpsubaccountOptionFlags,
      flagKeys: _ftpsubaccountFlagKeys,
    });
  }

  /** Additional FTP Accounts: info */
  info(body: FtpsubaccountInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ftpsubaccount",
      command: "--info",
      schema: FtpsubaccountInfoRequestSchema,
      body,
      optionFlags: _ftpsubaccountOptionFlags,
      flagKeys: _ftpsubaccountFlagKeys,
    });
  }
}
