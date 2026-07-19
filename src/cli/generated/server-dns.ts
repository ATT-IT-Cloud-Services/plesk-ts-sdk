/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _serverDnsOptionFlags,
  _serverDnsFlagKeys,
  ServerDnsAddRequestSchema,
  ServerDnsSetRequestSchema,
  ServerDnsUpdateServerRequestSchema,
  ServerDnsUpdateSoaRequestSchema,
  ServerDnsInfoRequestSchema,
  ServerDnsEnableCustomBackendRequestSchema,
  ServerDnsDisableCustomBackendRequestSchema,
  ServerDnsSetCustomConfigRequestSchema,
  type ServerDnsAddRequest,
  type ServerDnsSetRequest,
  type ServerDnsUpdateServerRequest,
  type ServerDnsUpdateSoaRequest,
  type ServerDnsInfoRequest,
  type ServerDnsEnableCustomBackendRequest,
  type ServerDnsDisableCustomBackendRequest,
  type ServerDnsSetCustomConfigRequest,
} from "../../models/cli-commands/server-dns.js";

/** DNS Zone Template */
export class ServerDnsResource {
  constructor(private readonly http: HttpClient) {}

  /** DNS Zone Template: add */
  add(body: ServerDnsAddRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--add",
      schema: ServerDnsAddRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: set */
  set(body: ServerDnsSetRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--set",
      schema: ServerDnsSetRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: updateServer */
  updateServer(body: ServerDnsUpdateServerRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--update-server",
      schema: ServerDnsUpdateServerRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: updateSoa */
  updateSoa(body: ServerDnsUpdateSoaRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--update-soa",
      schema: ServerDnsUpdateSoaRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: info */
  info(body: ServerDnsInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--info",
      schema: ServerDnsInfoRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: enableCustomBackend */
  enableCustomBackend(body: ServerDnsEnableCustomBackendRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--enable-custom-backend",
      schema: ServerDnsEnableCustomBackendRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: disableCustomBackend */
  disableCustomBackend(body: ServerDnsDisableCustomBackendRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--disable-custom-backend",
      schema: ServerDnsDisableCustomBackendRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }

  /** DNS Zone Template: setCustomConfig */
  setCustomConfig(body: ServerDnsSetCustomConfigRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_dns",
      command: "--set-custom-config",
      schema: ServerDnsSetCustomConfigRequestSchema,
      body,
      optionFlags: _serverDnsOptionFlags,
      flagKeys: _serverDnsFlagKeys,
    });
  }
}
