/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _userOptionFlags,
  _userFlagKeys,
  UserCreateRequestSchema,
  UserUpdateRequestSchema,
  UserDeleteRequestSchema,
  UserInfoRequestSchema,
  type UserCreateRequest,
  type UserUpdateRequest,
  type UserDeleteRequest,
  type UserInfoRequest,
} from "../../models/cli-commands/user.js";

/** Users */
export class UserResource {
  constructor(private readonly http: HttpClient) {}

  /** Users: create */
  create(body: UserCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "user",
      command: "--create",
      schema: UserCreateRequestSchema,
      body,
      optionFlags: _userOptionFlags,
      flagKeys: _userFlagKeys,
    });
  }

  /** Users: update */
  update(body: UserUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "user",
      command: "--update",
      schema: UserUpdateRequestSchema,
      body,
      optionFlags: _userOptionFlags,
      flagKeys: _userFlagKeys,
    });
  }

  /** Users: delete */
  delete(body: UserDeleteRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "user",
      command: "--delete",
      schema: UserDeleteRequestSchema,
      body,
      optionFlags: _userOptionFlags,
      flagKeys: _userFlagKeys,
    });
  }

  /** Users: info */
  info(body: UserInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "user",
      command: "--info",
      schema: UserInfoRequestSchema,
      body,
      optionFlags: _userOptionFlags,
      flagKeys: _userFlagKeys,
    });
  }
}
