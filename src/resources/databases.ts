import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { StatusResponse } from "../models/common.js";
import {
  DatabaseRequestSchema,
  DatabaseUserRequestSchema,
  DatabaseUserUpdateRequestSchema,
  type Database,
  type DatabaseRequest,
  type DatabaseServer,
  type DatabaseUser,
  type DatabaseUserRequest,
  type DatabaseUserUpdateRequest,
} from "../models/database.js";

export class DatabasesResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /databases */
  list(query?: { domain?: string }): Promise<Database[]> {
    return this.http.request({
      method: "GET",
      path: "/databases",
      query: { domain: query?.domain },
    });
  }

  /** POST /databases */
  create(body: DatabaseRequest): Promise<Database> {
    return this.http.request({
      method: "POST",
      path: "/databases",
      body: parseOrThrow(DatabaseRequestSchema, body),
    });
  }

  /** DELETE /databases/{id} */
  delete(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "DELETE", path: `/databases/${id}` });
  }

  /** GET /dbusers */
  listUsers(query?: { dbId?: number }): Promise<DatabaseUser[]> {
    return this.http.request({
      method: "GET",
      path: "/dbusers",
      query: { dbId: query?.dbId },
    });
  }

  /** POST /dbusers */
  createUser(body: DatabaseUserRequest): Promise<DatabaseUser> {
    return this.http.request({
      method: "POST",
      path: "/dbusers",
      body: parseOrThrow(DatabaseUserRequestSchema, body),
    });
  }

  /** PUT /dbusers/{id} */
  updateUser(id: number, body: DatabaseUserUpdateRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/dbusers/${id}`,
      body: parseOrThrow(DatabaseUserUpdateRequestSchema, body),
    });
  }

  /** DELETE /dbusers/{id} */
  deleteUser(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "DELETE", path: `/dbusers/${id}` });
  }

  /** GET /dbservers */
  listServers(query?: { id?: number }): Promise<DatabaseServer[]> {
    return this.http.request({
      method: "GET",
      path: "/dbservers",
      query: { id: query?.id },
    });
  }
}
