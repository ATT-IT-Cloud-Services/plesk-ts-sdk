import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import {
  SecretKeyRequestSchema,
  SessionRequestSchema,
  type SecretKeyRequest,
  type SecretKeyResponse,
  type SessionRequest,
  type SessionResponse,
} from "../models/auth.js";
import type { StatusResponse } from "../models/common.js";

export class AuthResource {
  constructor(private readonly http: HttpClient) {}

  /** POST /auth/keys */
  createKey(body: SecretKeyRequest = {}): Promise<SecretKeyResponse> {
    return this.http.request({
      method: "POST",
      path: "/auth/keys",
      body: parseOrThrow(SecretKeyRequestSchema, body),
    });
  }

  /** DELETE /auth/keys/{key} */
  deleteKey(key: string): Promise<StatusResponse> {
    return this.http.request({
      method: "DELETE",
      path: `/auth/keys/${encodeURIComponent(key)}`,
    });
  }

  /** POST /server/session */
  createSession(body: SessionRequest): Promise<SessionResponse> {
    return this.http.request({
      method: "POST",
      path: "/server/session",
      body: parseOrThrow(SessionRequestSchema, body),
    });
  }
}
