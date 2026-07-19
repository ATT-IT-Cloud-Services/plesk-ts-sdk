/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _anonftpOptionFlags,
  _anonftpFlagKeys,
  AnonftpUpdateRequestSchema,
  AnonftpInfoRequestSchema,
  type AnonftpUpdateRequest,
  type AnonftpInfoRequest,
} from "../../models/cli-commands/anonftp.js";

/** Anonymous FTP Access */
export class AnonftpResource {
  constructor(private readonly http: HttpClient) {}

  /** Anonymous FTP Access: update */
  update(body: AnonftpUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "anonftp",
      command: "--update",
      schema: AnonftpUpdateRequestSchema,
      body,
      optionFlags: _anonftpOptionFlags,
      flagKeys: _anonftpFlagKeys,
    });
  }

  /** Anonymous FTP Access: info */
  info(body: AnonftpInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "anonftp",
      command: "--info",
      schema: AnonftpInfoRequestSchema,
      body,
      optionFlags: _anonftpOptionFlags,
      flagKeys: _anonftpFlagKeys,
    });
  }
}
