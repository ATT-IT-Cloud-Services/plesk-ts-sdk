/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _dnssecOptionFlags,
  _dnssecFlagKeys,
  DnssecListRequestSchema,
  DnssecInfoRequestSchema,
  DnssecSignRequestSchema,
  DnssecUnsignRequestSchema,
  type DnssecListRequest,
  type DnssecInfoRequest,
  type DnssecSignRequest,
  type DnssecUnsignRequest,
} from "../../models/cli-commands/dnssec.js";

/** DNSSEC */
export class DnssecResource {
  constructor(private readonly http: HttpClient) {}

  /** DNSSEC: list */
  list(body: DnssecListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dnssec",
      command: "list",
      schema: DnssecListRequestSchema,
      body,
      optionFlags: _dnssecOptionFlags,
      flagKeys: _dnssecFlagKeys,
    });
  }

  /** DNSSEC: info */
  info(body: DnssecInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dnssec",
      command: "info",
      schema: DnssecInfoRequestSchema,
      body,
      optionFlags: _dnssecOptionFlags,
      flagKeys: _dnssecFlagKeys,
    });
  }

  /** DNSSEC: sign */
  sign(body: DnssecSignRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dnssec",
      command: "sign",
      schema: DnssecSignRequestSchema,
      body,
      optionFlags: _dnssecOptionFlags,
      flagKeys: _dnssecFlagKeys,
    });
  }

  /** DNSSEC: unsign */
  unsign(body: DnssecUnsignRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dnssec",
      command: "unsign",
      schema: DnssecUnsignRequestSchema,
      body,
      optionFlags: _dnssecOptionFlags,
      flagKeys: _dnssecFlagKeys,
    });
  }
}
