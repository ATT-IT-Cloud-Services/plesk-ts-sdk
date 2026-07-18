import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { StatusResponse } from "../models/common.js";
import {
  ExtensionInstallRequestSchema,
  type Extension,
  type ExtensionInstallRequest,
} from "../models/extension.js";

export class ExtensionsResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /extensions */
  list(): Promise<Extension[]> {
    return this.http.request({ method: "GET", path: "/extensions" });
  }

  /** POST /extensions */
  install(body: ExtensionInstallRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: "/extensions",
      body: parseOrThrow(ExtensionInstallRequestSchema, body),
    });
  }

  /** GET /extensions/{id} */
  get(id: string): Promise<Extension> {
    return this.http.request({
      method: "GET",
      path: `/extensions/${encodeURIComponent(id)}`,
    });
  }

  /** DELETE /extensions/{id} */
  delete(id: string): Promise<StatusResponse> {
    return this.http.request({
      method: "DELETE",
      path: `/extensions/${encodeURIComponent(id)}`,
    });
  }

  /** PUT /extensions/{id}/enable */
  enable(id: string): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/extensions/${encodeURIComponent(id)}/enable`,
    });
  }

  /** PUT /extensions/{id}/disable */
  disable(id: string): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/extensions/${encodeURIComponent(id)}/disable`,
    });
  }
}
