/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _domaliasOptionFlags,
  _domaliasFlagKeys,
  DomaliasCreateRequestSchema,
  DomaliasUpdateRequestSchema,
  DomaliasDeleteRequestSchema,
  DomaliasDeleteAllRequestSchema,
  DomaliasInfoRequestSchema,
  DomaliasOnRequestSchema,
  DomaliasOffRequestSchema,
  DomaliasRenameRequestSchema,
  type DomaliasCreateRequest,
  type DomaliasUpdateRequest,
  type DomaliasDeleteRequest,
  type DomaliasDeleteAllRequest,
  type DomaliasInfoRequest,
  type DomaliasOnRequest,
  type DomaliasOffRequest,
  type DomaliasRenameRequest,
} from "../../models/cli-commands/domalias.js";

/** Domain Aliases */
export class DomaliasResource {
  constructor(private readonly http: HttpClient) {}

  /** Domain Aliases: create */
  create(body: DomaliasCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--create",
      schema: DomaliasCreateRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: update */
  update(body: DomaliasUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--update",
      schema: DomaliasUpdateRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: delete */
  delete(body: DomaliasDeleteRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--delete",
      schema: DomaliasDeleteRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: deleteAll */
  deleteAll(body: DomaliasDeleteAllRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--delete-all",
      schema: DomaliasDeleteAllRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: info */
  info(body: DomaliasInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--info",
      schema: DomaliasInfoRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: on */
  on(body: DomaliasOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--on",
      schema: DomaliasOnRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: off */
  off(body: DomaliasOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--off",
      schema: DomaliasOffRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }

  /** Domain Aliases: rename */
  rename(body: DomaliasRenameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "domalias",
      command: "--rename",
      schema: DomaliasRenameRequestSchema,
      body,
      optionFlags: _domaliasOptionFlags,
      flagKeys: _domaliasFlagKeys,
    });
  }
}
