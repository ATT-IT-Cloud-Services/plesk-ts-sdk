/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _adminAliasOptionFlags,
  _adminAliasFlagKeys,
  AdminAliasCreateRequestSchema,
  AdminAliasUpdateRequestSchema,
  AdminAliasRemoveRequestSchema,
  AdminAliasInfoRequestSchema,
  AdminAliasXmlInfoRequestSchema,
  AdminAliasListRequestSchema,
  type AdminAliasCreateRequest,
  type AdminAliasUpdateRequest,
  type AdminAliasRemoveRequest,
  type AdminAliasInfoRequest,
  type AdminAliasXmlInfoRequest,
  type AdminAliasListRequest,
} from "../../models/cli-commands/admin-alias.js";

/** Additional Administrator Accounts */
export class AdminAliasResource {
  constructor(private readonly http: HttpClient) {}

  /** Additional Administrator Accounts: create */
  create(body: AdminAliasCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin_alias",
      command: "--create",
      schema: AdminAliasCreateRequestSchema,
      body,
      optionFlags: _adminAliasOptionFlags,
      flagKeys: _adminAliasFlagKeys,
    });
  }

  /** Additional Administrator Accounts: update */
  update(body: AdminAliasUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin_alias",
      command: "--update",
      schema: AdminAliasUpdateRequestSchema,
      body,
      optionFlags: _adminAliasOptionFlags,
      flagKeys: _adminAliasFlagKeys,
    });
  }

  /** Additional Administrator Accounts: remove */
  remove(body: AdminAliasRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin_alias",
      command: "--remove",
      schema: AdminAliasRemoveRequestSchema,
      body,
      optionFlags: _adminAliasOptionFlags,
      flagKeys: _adminAliasFlagKeys,
    });
  }

  /** Additional Administrator Accounts: info */
  info(body: AdminAliasInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin_alias",
      command: "--info",
      schema: AdminAliasInfoRequestSchema,
      body,
      optionFlags: _adminAliasOptionFlags,
      flagKeys: _adminAliasFlagKeys,
    });
  }

  /** Additional Administrator Accounts: xmlInfo */
  xmlInfo(body: AdminAliasXmlInfoRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin_alias",
      command: "--xml-info",
      schema: AdminAliasXmlInfoRequestSchema,
      body,
      optionFlags: _adminAliasOptionFlags,
      flagKeys: _adminAliasFlagKeys,
    });
  }

  /** Additional Administrator Accounts: list */
  list(body: AdminAliasListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "admin_alias",
      command: "--list",
      schema: AdminAliasListRequestSchema,
      body,
      optionFlags: _adminAliasOptionFlags,
      flagKeys: _adminAliasFlagKeys,
    });
  }
}
