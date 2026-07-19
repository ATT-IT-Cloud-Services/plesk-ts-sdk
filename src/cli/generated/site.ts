/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _siteOptionFlags,
  _siteFlagKeys,
  SiteCreateRequestSchema,
  SiteUpdateRequestSchema,
  SiteMoveRequestSchema,
  SiteRemoveRequestSchema,
  SiteInfoRequestSchema,
  SiteOnRequestSchema,
  SiteSuspendRequestSchema,
  SiteOffRequestSchema,
  SiteListRequestSchema,
  SiteUpdatePhpSettingsRequestSchema,
  SiteShowPhpSettingsRequestSchema,
  type SiteCreateRequest,
  type SiteUpdateRequest,
  type SiteMoveRequest,
  type SiteRemoveRequest,
  type SiteInfoRequest,
  type SiteOnRequest,
  type SiteSuspendRequest,
  type SiteOffRequest,
  type SiteListRequest,
  type SiteUpdatePhpSettingsRequest,
  type SiteShowPhpSettingsRequest,
} from "../../models/cli-commands/site.js";

/** Sites */
export class SiteResource {
  constructor(private readonly http: HttpClient) {}

  /** Sites: create */
  create(body: SiteCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--create",
      schema: SiteCreateRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: update */
  update(body: SiteUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--update",
      schema: SiteUpdateRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: move */
  move(body: SiteMoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--move",
      schema: SiteMoveRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: remove */
  remove(body: SiteRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--remove",
      schema: SiteRemoveRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: info */
  info(body: SiteInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--info",
      schema: SiteInfoRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: on */
  on(body: SiteOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--on",
      schema: SiteOnRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: suspend */
  suspend(body: SiteSuspendRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--suspend",
      schema: SiteSuspendRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: off */
  off(body: SiteOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--off",
      schema: SiteOffRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: list */
  list(body: SiteListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--list",
      schema: SiteListRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: updatePhpSettings */
  updatePhpSettings(body: SiteUpdatePhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--update-php-settings",
      schema: SiteUpdatePhpSettingsRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }

  /** Sites: showPhpSettings */
  showPhpSettings(body: SiteShowPhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "site",
      command: "--show-php-settings",
      schema: SiteShowPhpSettingsRequestSchema,
      body,
      optionFlags: _siteOptionFlags,
      flagKeys: _siteFlagKeys,
    });
  }
}
