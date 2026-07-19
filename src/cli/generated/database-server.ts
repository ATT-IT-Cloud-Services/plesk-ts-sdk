/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _databaseServerOptionFlags,
  _databaseServerFlagKeys,
  DatabaseServerCreateServerRequestSchema,
  DatabaseServerUpdateServerRequestSchema,
  DatabaseServerRemoveServerRequestSchema,
  DatabaseServerSetDefaultServerRequestSchema,
  DatabaseServerSetDefaultServerLocalRequestSchema,
  DatabaseServerListRequestSchema,
  DatabaseServerXmlInfoRequestSchema,
  type DatabaseServerCreateServerRequest,
  type DatabaseServerUpdateServerRequest,
  type DatabaseServerRemoveServerRequest,
  type DatabaseServerSetDefaultServerRequest,
  type DatabaseServerSetDefaultServerLocalRequest,
  type DatabaseServerListRequest,
  type DatabaseServerXmlInfoRequest,
} from "../../models/cli-commands/database-server.js";

/** Database Servers */
export class DatabaseServerResource {
  constructor(private readonly http: HttpClient) {}

  /** Database Servers: createServer */
  createServer(body: DatabaseServerCreateServerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--create-server",
      schema: DatabaseServerCreateServerRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }

  /** Database Servers: updateServer */
  updateServer(body: DatabaseServerUpdateServerRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--update-server",
      schema: DatabaseServerUpdateServerRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }

  /** Database Servers: removeServer */
  removeServer(body: DatabaseServerRemoveServerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--remove-server",
      schema: DatabaseServerRemoveServerRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }

  /** Database Servers: setDefaultServer */
  setDefaultServer(body: DatabaseServerSetDefaultServerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--set-default-server",
      schema: DatabaseServerSetDefaultServerRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }

  /** Database Servers: setDefaultServerLocal */
  setDefaultServerLocal(body: DatabaseServerSetDefaultServerLocalRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--set-default-server-local",
      schema: DatabaseServerSetDefaultServerLocalRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }

  /** Database Servers: list */
  list(body: DatabaseServerListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--list",
      schema: DatabaseServerListRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }

  /** Database Servers: xmlInfo */
  xmlInfo(body: DatabaseServerXmlInfoRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database-server",
      command: "--xml-info",
      schema: DatabaseServerXmlInfoRequestSchema,
      body,
      optionFlags: _databaseServerOptionFlags,
      flagKeys: _databaseServerFlagKeys,
    });
  }
}
