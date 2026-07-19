/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _subdomainOptionFlags,
  _subdomainFlagKeys,
  SubdomainCreateRequestSchema,
  SubdomainUpdateRequestSchema,
  SubdomainRemoveRequestSchema,
  SubdomainInfoRequestSchema,
  SubdomainSuspendRequestSchema,
  SubdomainListRequestSchema,
  type SubdomainCreateRequest,
  type SubdomainUpdateRequest,
  type SubdomainRemoveRequest,
  type SubdomainInfoRequest,
  type SubdomainSuspendRequest,
  type SubdomainListRequest,
} from "../../models/cli-commands/subdomain.js";

/** Subdomains */
export class SubdomainResource {
  constructor(private readonly http: HttpClient) {}

  /** Subdomains: create */
  create(body: SubdomainCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subdomain",
      command: "--create",
      schema: SubdomainCreateRequestSchema,
      body,
      optionFlags: _subdomainOptionFlags,
      flagKeys: _subdomainFlagKeys,
    });
  }

  /** Subdomains: update */
  update(body: SubdomainUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subdomain",
      command: "--update",
      schema: SubdomainUpdateRequestSchema,
      body,
      optionFlags: _subdomainOptionFlags,
      flagKeys: _subdomainFlagKeys,
    });
  }

  /** Subdomains: remove */
  remove(body: SubdomainRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subdomain",
      command: "--remove",
      schema: SubdomainRemoveRequestSchema,
      body,
      optionFlags: _subdomainOptionFlags,
      flagKeys: _subdomainFlagKeys,
    });
  }

  /** Subdomains: info */
  info(body: SubdomainInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subdomain",
      command: "--info",
      schema: SubdomainInfoRequestSchema,
      body,
      optionFlags: _subdomainOptionFlags,
      flagKeys: _subdomainFlagKeys,
    });
  }

  /** Subdomains: suspend */
  suspend(body: SubdomainSuspendRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subdomain",
      command: "--suspend",
      schema: SubdomainSuspendRequestSchema,
      body,
      optionFlags: _subdomainOptionFlags,
      flagKeys: _subdomainFlagKeys,
    });
  }

  /** Subdomains: list */
  list(body: SubdomainListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subdomain",
      command: "--list",
      schema: SubdomainListRequestSchema,
      body,
      optionFlags: _subdomainOptionFlags,
      flagKeys: _subdomainFlagKeys,
    });
  }
}
