/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _keyinfoOptionFlags,
  _keyinfoFlagKeys,
  KeyinfoInfoRequestSchema,
  KeyinfoListRequestSchema,
  KeyinfoTestKeyRequestSchema,
  type KeyinfoInfoRequest,
  type KeyinfoListRequest,
  type KeyinfoTestKeyRequest,
} from "../../models/cli-commands/keyinfo.js";

/** License Key Properties */
export class KeyinfoResource {
  constructor(private readonly http: HttpClient) {}

  /** License Key Properties: info */
  info(body: KeyinfoInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "keyinfo",
      command: "--info",
      schema: KeyinfoInfoRequestSchema,
      body,
      optionFlags: _keyinfoOptionFlags,
      flagKeys: _keyinfoFlagKeys,
    });
  }

  /** License Key Properties: list */
  list(body: KeyinfoListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "keyinfo",
      command: "--list",
      schema: KeyinfoListRequestSchema,
      body,
      optionFlags: _keyinfoOptionFlags,
      flagKeys: _keyinfoFlagKeys,
    });
  }

  /** License Key Properties: testKey */
  testKey(body: KeyinfoTestKeyRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "keyinfo",
      command: "--test-key",
      schema: KeyinfoTestKeyRequestSchema,
      body,
      optionFlags: _keyinfoOptionFlags,
      flagKeys: _keyinfoFlagKeys,
    });
  }
}
