/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _adminOptionFlags,
  _adminFlagKeys,
  AdminUpdateRequestSchema,
  AdminInfoRequestSchema,
  AdminSetLoginRequestSchema,
  AdminSetAdminPasswordRequestSchema,
  AdminSetPasswordRequestSchema,
  AdminForceAdminPasswordResetRequestSchema,
  AdminXmlInfoRequestSchema,
  AdminGetLoginLinkRequestSchema,
  AdminGetResetLinkRequestSchema,
  AdminEnableAccessDomainRequestSchema,
  AdminDisableAccessDomainRequestSchema,
  type AdminUpdateRequest,
  type AdminInfoRequest,
  type AdminSetLoginRequest,
  type AdminSetAdminPasswordRequest,
  type AdminSetPasswordRequest,
  type AdminForceAdminPasswordResetRequest,
  type AdminXmlInfoRequest,
  type AdminGetLoginLinkRequest,
  type AdminGetResetLinkRequest,
  type AdminEnableAccessDomainRequest,
  type AdminDisableAccessDomainRequest,
} from "../../models/cli-commands/admin.js";

/** Administration Panel Preferences */
export class AdminResource {
  constructor(private readonly http: HttpClient) {}

  /** Administration Panel Preferences: update */
  update(body: AdminUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--update",
      schema: AdminUpdateRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: info */
  info(body: AdminInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--info",
      schema: AdminInfoRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: setLogin */
  setLogin(body: AdminSetLoginRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--set-login",
      schema: AdminSetLoginRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: setAdminPassword */
  setAdminPassword(body: AdminSetAdminPasswordRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--set-admin-password",
      schema: AdminSetAdminPasswordRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: setPassword */
  setPassword(body: AdminSetPasswordRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--set-password",
      schema: AdminSetPasswordRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: forceAdminPasswordReset */
  forceAdminPasswordReset(body: AdminForceAdminPasswordResetRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--force-admin-password-reset",
      schema: AdminForceAdminPasswordResetRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: xmlInfo */
  xmlInfo(body: AdminXmlInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--xml-info",
      schema: AdminXmlInfoRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: getLoginLink */
  getLoginLink(body: AdminGetLoginLinkRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--get-login-link",
      schema: AdminGetLoginLinkRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: getResetLink */
  getResetLink(body: AdminGetResetLinkRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--get-reset-link",
      schema: AdminGetResetLinkRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: enableAccessDomain */
  enableAccessDomain(body: AdminEnableAccessDomainRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--enable-access-domain",
      schema: AdminEnableAccessDomainRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }

  /** Administration Panel Preferences: disableAccessDomain */
  disableAccessDomain(body: AdminDisableAccessDomainRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin",
      command: "--disable-access-domain",
      schema: AdminDisableAccessDomainRequestSchema,
      body,
      optionFlags: _adminOptionFlags,
      flagKeys: _adminFlagKeys,
    });
  }
}
