/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _pleskbackupOptionFlags,
  _pleskbackupFlagKeys,
  PleskbackupServerRequestSchema,
  PleskbackupResellersNameRequestSchema,
  PleskbackupResellersIdRequestSchema,
  PleskbackupClientsNameRequestSchema,
  PleskbackupClientsIdRequestSchema,
  PleskbackupDomainsNameRequestSchema,
  PleskbackupDomainsIdRequestSchema,
  type PleskbackupServerRequest,
  type PleskbackupResellersNameRequest,
  type PleskbackupResellersIdRequest,
  type PleskbackupClientsNameRequest,
  type PleskbackupClientsIdRequest,
  type PleskbackupDomainsNameRequest,
  type PleskbackupDomainsIdRequest,
} from "../../models/cli-commands/pleskbackup.js";

/** Backing Up Content and Configuration */
export class PleskbackupResource {
  constructor(private readonly http: HttpClient) {}

  /** Backing Up Content and Configuration: server */
  server(body: PleskbackupServerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--server",
      schema: PleskbackupServerRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }

  /** Backing Up Content and Configuration: resellersName */
  resellersName(body: PleskbackupResellersNameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--resellers-name",
      schema: PleskbackupResellersNameRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }

  /** Backing Up Content and Configuration: resellersId */
  resellersId(body: PleskbackupResellersIdRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--resellers-id",
      schema: PleskbackupResellersIdRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }

  /** Backing Up Content and Configuration: clientsName */
  clientsName(body: PleskbackupClientsNameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--clients-name",
      schema: PleskbackupClientsNameRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }

  /** Backing Up Content and Configuration: clientsId */
  clientsId(body: PleskbackupClientsIdRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--clients-id",
      schema: PleskbackupClientsIdRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }

  /** Backing Up Content and Configuration: domainsName */
  domainsName(body: PleskbackupDomainsNameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--domains-name",
      schema: PleskbackupDomainsNameRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }

  /** Backing Up Content and Configuration: domainsId */
  domainsId(body: PleskbackupDomainsIdRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "pleskbackup",
      command: "--domains-id",
      schema: PleskbackupDomainsIdRequestSchema,
      body,
      optionFlags: _pleskbackupOptionFlags,
      flagKeys: _pleskbackupFlagKeys,
    });
  }
}
