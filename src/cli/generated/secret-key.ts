/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _secretKeyOptionFlags,
  _secretKeyFlagKeys,
  SecretKeyCreateRequestSchema,
  SecretKeyListRequestSchema,
  SecretKeyDeleteRequestSchema,
  type SecretKeyCreateRequest,
  type SecretKeyListRequest,
  type SecretKeyDeleteRequest,
} from "../../models/cli-commands/secret-key.js";

/** Authentication in Plesk XML API */
export class SecretKeyResource {
  constructor(private readonly http: HttpClient) {}

  /** Authentication in Plesk XML API: create */
  create(body: SecretKeyCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "secret_key",
      command: "--create",
      schema: SecretKeyCreateRequestSchema,
      body,
      optionFlags: _secretKeyOptionFlags,
      flagKeys: _secretKeyFlagKeys,
    });
  }

  /** Authentication in Plesk XML API: list */
  list(body: SecretKeyListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "secret_key",
      command: "--list",
      schema: SecretKeyListRequestSchema,
      body,
      optionFlags: _secretKeyOptionFlags,
      flagKeys: _secretKeyFlagKeys,
    });
  }

  /** Authentication in Plesk XML API: delete */
  delete(body: SecretKeyDeleteRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "secret_key",
      command: "--delete",
      schema: SecretKeyDeleteRequestSchema,
      body,
      optionFlags: _secretKeyOptionFlags,
      flagKeys: _secretKeyFlagKeys,
    });
  }
}
