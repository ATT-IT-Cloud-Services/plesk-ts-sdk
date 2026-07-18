import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { StatusResponse } from "../models/common.js";
import {
  ServerInitSchema,
  ServerLicenseSchema,
  type ServerInit,
  type ServerIp,
  type ServerLicense,
  type ServerMeta,
} from "../models/server.js";

export class ServerResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /server */
  getMeta(): Promise<ServerMeta> {
    return this.http.request({ method: "GET", path: "/server" });
  }

  /** POST /server/init */
  init(body: ServerInit): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: "/server/init",
      body: parseOrThrow(ServerInitSchema, body),
    });
  }

  /** POST /server/license */
  installLicense(body: ServerLicense): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: "/server/license",
      body: parseOrThrow(ServerLicenseSchema, body),
    });
  }

  /** GET /server/ips */
  listIps(): Promise<ServerIp[]> {
    return this.http.request({ method: "GET", path: "/server/ips" });
  }
}
