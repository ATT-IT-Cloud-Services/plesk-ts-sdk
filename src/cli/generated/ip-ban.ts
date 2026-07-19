/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _ipBanOptionFlags,
  _ipBanFlagKeys,
  IpBanEnableRequestSchema,
  IpBanDisableRequestSchema,
  IpBanUpdateRequestSchema,
  IpBanInfoRequestSchema,
  IpBanTrustedRequestSchema,
  IpBanAddTrustedRequestSchema,
  IpBanRemoveTrustedRequestSchema,
  IpBanBannedRequestSchema,
  IpBanUnbanRequestSchema,
  IpBanJailsRequestSchema,
  IpBanEnableJailsRequestSchema,
  IpBanDisableJailsRequestSchema,
  type IpBanEnableRequest,
  type IpBanDisableRequest,
  type IpBanUpdateRequest,
  type IpBanInfoRequest,
  type IpBanTrustedRequest,
  type IpBanAddTrustedRequest,
  type IpBanRemoveTrustedRequest,
  type IpBanBannedRequest,
  type IpBanUnbanRequest,
  type IpBanJailsRequest,
  type IpBanEnableJailsRequest,
  type IpBanDisableJailsRequest,
} from "../../models/cli-commands/ip-ban.js";

/** IP Address Banning (Fail2Ban) */
export class IpBanResource {
  constructor(private readonly http: HttpClient) {}

  /** IP Address Banning (Fail2Ban): enable */
  enable(body: IpBanEnableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--enable",
      schema: IpBanEnableRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): disable */
  disable(body: IpBanDisableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--disable",
      schema: IpBanDisableRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): update */
  update(body: IpBanUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--update",
      schema: IpBanUpdateRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): info */
  info(body: IpBanInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--info",
      schema: IpBanInfoRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): trusted */
  trusted(body: IpBanTrustedRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--trusted",
      schema: IpBanTrustedRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): addTrusted */
  addTrusted(body: IpBanAddTrustedRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--add-trusted",
      schema: IpBanAddTrustedRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): removeTrusted */
  removeTrusted(body: IpBanRemoveTrustedRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--remove-trusted",
      schema: IpBanRemoveTrustedRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): banned */
  banned(body: IpBanBannedRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--banned",
      schema: IpBanBannedRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): unban */
  unban(body: IpBanUnbanRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--unban",
      schema: IpBanUnbanRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): jails */
  jails(body: IpBanJailsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--jails",
      schema: IpBanJailsRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): enableJails */
  enableJails(body: IpBanEnableJailsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--enable-jails",
      schema: IpBanEnableJailsRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }

  /** IP Address Banning (Fail2Ban): disableJails */
  disableJails(body: IpBanDisableJailsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_ban",
      command: "--disable-jails",
      schema: IpBanDisableJailsRequestSchema,
      body,
      optionFlags: _ipBanOptionFlags,
      flagKeys: _ipBanFlagKeys,
    });
  }
}
