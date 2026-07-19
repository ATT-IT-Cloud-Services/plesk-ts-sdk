/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _domainRestrictionOptionFlags,
  _domainRestrictionFlagKeys,
  DomainRestrictionAddRequestSchema,
  DomainRestrictionAddListRequestSchema,
  DomainRestrictionRemoveListRequestSchema,
  DomainRestrictionRemoveRequestSchema,
  DomainRestrictionRenameRequestSchema,
  DomainRestrictionEnableRequestSchema,
  DomainRestrictionDisableRequestSchema,
  DomainRestrictionListRequestSchema,
  type DomainRestrictionAddRequest,
  type DomainRestrictionAddListRequest,
  type DomainRestrictionRemoveListRequest,
  type DomainRestrictionRemoveRequest,
  type DomainRestrictionRenameRequest,
  type DomainRestrictionEnableRequest,
  type DomainRestrictionDisableRequest,
  type DomainRestrictionListRequest,
} from "../../models/cli-commands/domain-restriction.js";

/** Prohibited Domain Names */
export class DomainRestrictionResource {
  constructor(private readonly http: HttpClient) {}

  /** Prohibited Domain Names: add */
  add(body: DomainRestrictionAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--add",
      schema: DomainRestrictionAddRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: addList */
  addList(body: DomainRestrictionAddListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--add-list",
      schema: DomainRestrictionAddListRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: removeList */
  removeList(body: DomainRestrictionRemoveListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--remove-list",
      schema: DomainRestrictionRemoveListRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: remove */
  remove(body: DomainRestrictionRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--remove",
      schema: DomainRestrictionRemoveRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: rename */
  rename(body: DomainRestrictionRenameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--rename",
      schema: DomainRestrictionRenameRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: enable */
  enable(body: DomainRestrictionEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--enable",
      schema: DomainRestrictionEnableRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: disable */
  disable(body: DomainRestrictionDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--disable",
      schema: DomainRestrictionDisableRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }

  /** Prohibited Domain Names: list */
  list(body: DomainRestrictionListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domain_restriction",
      command: "--list",
      schema: DomainRestrictionListRequestSchema,
      body,
      optionFlags: _domainRestrictionOptionFlags,
      flagKeys: _domainRestrictionFlagKeys,
    });
  }
}
