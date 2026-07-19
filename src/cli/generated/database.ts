/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _databaseToolsOptionFlags,
  _databaseToolsFlagKeys,
  DatabaseToolsCreateRequestSchema,
  DatabaseToolsUpdateRequestSchema,
  DatabaseToolsRemoveRequestSchema,
  DatabaseToolsRegisterRequestSchema,
  DatabaseToolsAssignToSubscriptionRequestSchema,
  DatabaseToolsAssignToDomainRequestSchema,
  DatabaseToolsUnassignFromDomainRequestSchema,
  DatabaseToolsRemoveDbsRequestSchema,
  DatabaseToolsRemoveDbusRequestSchema,
  DatabaseToolsCreateDbuserRequestSchema,
  DatabaseToolsUpdateDbuserRequestSchema,
  DatabaseToolsRemoveDbuserRequestSchema,
  DatabaseToolsRegisterDbuserRequestSchema,
  type DatabaseToolsCreateRequest,
  type DatabaseToolsUpdateRequest,
  type DatabaseToolsRemoveRequest,
  type DatabaseToolsRegisterRequest,
  type DatabaseToolsAssignToSubscriptionRequest,
  type DatabaseToolsAssignToDomainRequest,
  type DatabaseToolsUnassignFromDomainRequest,
  type DatabaseToolsRemoveDbsRequest,
  type DatabaseToolsRemoveDbusRequest,
  type DatabaseToolsCreateDbuserRequest,
  type DatabaseToolsUpdateDbuserRequest,
  type DatabaseToolsRemoveDbuserRequest,
  type DatabaseToolsRegisterDbuserRequest,
} from "../../models/cli-commands/database.js";

/** Databases */
export class DatabaseToolsResource {
  constructor(private readonly http: HttpClient) {}

  /** Databases: create */
  create(body: DatabaseToolsCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--create",
      schema: DatabaseToolsCreateRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: update */
  update(body: DatabaseToolsUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--update",
      schema: DatabaseToolsUpdateRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: remove */
  remove(body: DatabaseToolsRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--remove",
      schema: DatabaseToolsRemoveRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: register */
  register(body: DatabaseToolsRegisterRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--register",
      schema: DatabaseToolsRegisterRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: assignToSubscription */
  assignToSubscription(body: DatabaseToolsAssignToSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--assign-to-subscription",
      schema: DatabaseToolsAssignToSubscriptionRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: assignToDomain */
  assignToDomain(body: DatabaseToolsAssignToDomainRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--assign-to-domain",
      schema: DatabaseToolsAssignToDomainRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: unassignFromDomain */
  unassignFromDomain(body: DatabaseToolsUnassignFromDomainRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--unassign-from-domain",
      schema: DatabaseToolsUnassignFromDomainRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: removeDbs */
  removeDbs(body: DatabaseToolsRemoveDbsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--remove-dbs",
      schema: DatabaseToolsRemoveDbsRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: removeDbus */
  removeDbus(body: DatabaseToolsRemoveDbusRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--remove-dbus",
      schema: DatabaseToolsRemoveDbusRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: createDbuser */
  createDbuser(body: DatabaseToolsCreateDbuserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--create-dbuser",
      schema: DatabaseToolsCreateDbuserRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: updateDbuser */
  updateDbuser(body: DatabaseToolsUpdateDbuserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--update-dbuser",
      schema: DatabaseToolsUpdateDbuserRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: removeDbuser */
  removeDbuser(body: DatabaseToolsRemoveDbuserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--remove-dbuser",
      schema: DatabaseToolsRemoveDbuserRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }

  /** Databases: registerDbuser */
  registerDbuser(body: DatabaseToolsRegisterDbuserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "database",
      command: "--register-dbuser",
      schema: DatabaseToolsRegisterDbuserRequestSchema,
      body,
      optionFlags: _databaseToolsOptionFlags,
      flagKeys: _databaseToolsFlagKeys,
    });
  }
}
