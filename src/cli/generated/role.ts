/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _roleOptionFlags,
  _roleFlagKeys,
  RoleCreateRequestSchema,
  RoleUpdateRequestSchema,
  RoleInfoRequestSchema,
  RoleDeleteRequestSchema,
  type RoleCreateRequest,
  type RoleUpdateRequest,
  type RoleInfoRequest,
  type RoleDeleteRequest,
} from "../../models/cli-commands/role.js";

/** User Roles */
export class RoleResource {
  constructor(private readonly http: HttpClient) {}

  /** User Roles: create */
  create(body: RoleCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "role",
      command: "--create",
      schema: RoleCreateRequestSchema,
      body,
      optionFlags: _roleOptionFlags,
      flagKeys: _roleFlagKeys,
    });
  }

  /** User Roles: update */
  update(body: RoleUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "role",
      command: "--update",
      schema: RoleUpdateRequestSchema,
      body,
      optionFlags: _roleOptionFlags,
      flagKeys: _roleFlagKeys,
    });
  }

  /** User Roles: info */
  info(body: RoleInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "role",
      command: "--info",
      schema: RoleInfoRequestSchema,
      body,
      optionFlags: _roleOptionFlags,
      flagKeys: _roleFlagKeys,
    });
  }

  /** User Roles: delete */
  delete(body: RoleDeleteRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "role",
      command: "--delete",
      schema: RoleDeleteRequestSchema,
      body,
      optionFlags: _roleOptionFlags,
      flagKeys: _roleFlagKeys,
    });
  }
}
