import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import {
  CliCallRequestSchema,
  type CliCallRequest,
  type CliCallResponse,
  type CliRefResponse,
} from "../models/cli.js";

/**
 * Low-level gate access for advanced use.
 * Prefer top-level namespaces on PleskClient (e.g. `plesk.subscription.create`).
 */
export class CliResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /cli/commands */
  listCommands(): Promise<string[]> {
    return this.http.request({ method: "GET", path: "/cli/commands" });
  }

  /** GET /cli/{id}/ref */
  getRef(id: string): Promise<CliRefResponse> {
    return this.http.request({
      method: "GET",
      path: `/cli/${encodeURIComponent(id)}/ref`,
    });
  }

  /** POST /cli/{id}/call */
  call(id: string, body: CliCallRequest = {}): Promise<CliCallResponse> {
    return this.http.request({
      method: "POST",
      path: `/cli/${encodeURIComponent(id)}/call`,
      body: parseOrThrow(CliCallRequestSchema, {
        fail_on_error: true,
        ...body,
      }),
    });
  }
}
