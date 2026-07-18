import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { StatusResponse } from "../models/common.js";
import {
  FtpUserRequestSchema,
  FtpUserUpdateRequestSchema,
  type FtpUser,
  type FtpUserRequest,
  type FtpUserUpdateRequest,
} from "../models/ftp.js";

export class FtpUsersResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /ftpusers */
  list(query?: { name?: string; domain?: string }): Promise<FtpUser[]> {
    return this.http.request({
      method: "GET",
      path: "/ftpusers",
      query: { name: query?.name, domain: query?.domain },
    });
  }

  /** POST /ftpusers */
  create(body: FtpUserRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: "/ftpusers",
      body: parseOrThrow(FtpUserRequestSchema, body),
    });
  }

  /** PUT /ftpusers/{name} */
  update(name: string, body: FtpUserUpdateRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/ftpusers/${encodeURIComponent(name)}`,
      body: parseOrThrow(FtpUserUpdateRequestSchema, body),
    });
  }

  /** DELETE /ftpusers/{name} */
  delete(name: string): Promise<StatusResponse> {
    return this.http.request({
      method: "DELETE",
      path: `/ftpusers/${encodeURIComponent(name)}`,
    });
  }
}
