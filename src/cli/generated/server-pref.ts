/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _serverPrefOptionFlags,
  _serverPrefFlagKeys,
  ServerPrefSetDefaultRequestSchema,
  ServerPrefLocalesListRequestSchema,
  ServerPrefSkinsListRequestSchema,
  ServerPrefTemplatesListRequestSchema,
  ServerPrefUpdateRequestSchema,
  ServerPrefShowRequestSchema,
  ServerPrefLoadCustomizationsRequestSchema,
  ServerPrefUpdateWebAppFirewallRequestSchema,
  ServerPrefShowWebAppFirewallRequestSchema,
  type ServerPrefSetDefaultRequest,
  type ServerPrefLocalesListRequest,
  type ServerPrefSkinsListRequest,
  type ServerPrefTemplatesListRequest,
  type ServerPrefUpdateRequest,
  type ServerPrefShowRequest,
  type ServerPrefLoadCustomizationsRequest,
  type ServerPrefUpdateWebAppFirewallRequest,
  type ServerPrefShowWebAppFirewallRequest,
} from "../../models/cli-commands/server-pref.js";

/** Interface and System Preferences */
export class ServerPrefResource {
  constructor(private readonly http: HttpClient) {}

  /** Interface and System Preferences: setDefault */
  setDefault(body: ServerPrefSetDefaultRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--set-default",
      schema: ServerPrefSetDefaultRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: localesList */
  localesList(body: ServerPrefLocalesListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--locales-list",
      schema: ServerPrefLocalesListRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: skinsList */
  skinsList(body: ServerPrefSkinsListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--skins-list",
      schema: ServerPrefSkinsListRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: templatesList */
  templatesList(body: ServerPrefTemplatesListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--templates-list",
      schema: ServerPrefTemplatesListRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: update */
  update(body: ServerPrefUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--update",
      schema: ServerPrefUpdateRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: show */
  show(body: ServerPrefShowRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--show",
      schema: ServerPrefShowRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: loadCustomizations */
  loadCustomizations(body: ServerPrefLoadCustomizationsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--load-customizations",
      schema: ServerPrefLoadCustomizationsRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: updateWebAppFirewall */
  updateWebAppFirewall(body: ServerPrefUpdateWebAppFirewallRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--update-web-app-firewall",
      schema: ServerPrefUpdateWebAppFirewallRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }

  /** Interface and System Preferences: showWebAppFirewall */
  showWebAppFirewall(body: ServerPrefShowWebAppFirewallRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "server_pref",
      command: "--show-web-app-firewall",
      schema: ServerPrefShowWebAppFirewallRequestSchema,
      body,
      optionFlags: _serverPrefOptionFlags,
      flagKeys: _serverPrefFlagKeys,
    });
  }
}
