/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _protdirOptionFlags,
  _protdirFlagKeys,
  ProtdirCreateRequestSchema,
  ProtdirUpdateRequestSchema,
  ProtdirRemoveRequestSchema,
  type ProtdirCreateRequest,
  type ProtdirUpdateRequest,
  type ProtdirRemoveRequest,
} from "../../models/cli-commands/protdir.js";

/** Site Directories Protection */
export class ProtdirResource {
  constructor(private readonly http: HttpClient) {}

  /** Site Directories Protection: create */
  create(body: ProtdirCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "protdir",
      command: "--create",
      schema: ProtdirCreateRequestSchema,
      body,
      optionFlags: _protdirOptionFlags,
      flagKeys: _protdirFlagKeys,
    });
  }

  /** Site Directories Protection: update */
  update(body: ProtdirUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "protdir",
      command: "--update",
      schema: ProtdirUpdateRequestSchema,
      body,
      optionFlags: _protdirOptionFlags,
      flagKeys: _protdirFlagKeys,
    });
  }

  /** Site Directories Protection: remove */
  remove(body: ProtdirRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "protdir",
      command: "--remove",
      schema: ProtdirRemoveRequestSchema,
      body,
      optionFlags: _protdirOptionFlags,
      flagKeys: _protdirFlagKeys,
    });
  }
}
