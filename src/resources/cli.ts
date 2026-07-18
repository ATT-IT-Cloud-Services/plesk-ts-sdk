import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import {
  CliCallRequestSchema,
  type CliCallRequest,
  type CliCallResponse,
} from "../models/cli.js";

export class CliResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /cli/commands */
  listCommands(): Promise<string[]> {
    return this.http.request({ method: "GET", path: "/cli/commands" });
  }

  /** GET /cli/{id}/ref */
  getRef(id: string): Promise<unknown> {
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
      body: parseOrThrow(CliCallRequestSchema, body),
    });
  }
}
