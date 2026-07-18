import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { CreatedResponse, StatusResponse } from "../models/common.js";
import type { Client } from "../models/client.js";
import {
  DomainExecRequestSchema,
  DomainRequestSchema,
  DomainStatusSchema,
  DomainUpdateRequestSchema,
  type DomainDnsResolutionResponse,
  type DomainExecRequest,
  type DomainExecResponse,
  type DomainLogsResponse,
  type DomainRequest,
  type DomainResponse,
  type DomainStatus,
  type DomainUpdateRequest,
} from "../models/domain.js";

export class DomainsResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /domains */
  list(query?: { name?: string }): Promise<DomainResponse[]> {
    return this.http.request({
      method: "GET",
      path: "/domains",
      query: { name: query?.name },
    });
  }

  /** POST /domains */
  create(body: DomainRequest): Promise<CreatedResponse> {
    return this.http.request({
      method: "POST",
      path: "/domains",
      body: parseOrThrow(DomainRequestSchema, body),
    });
  }

  /** GET /domains/{id} */
  get(id: number): Promise<DomainResponse> {
    return this.http.request({ method: "GET", path: `/domains/${id}` });
  }

  /** PUT /domains/{id} */
  update(id: number, body: DomainUpdateRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/domains/${id}`,
      body: parseOrThrow(DomainUpdateRequestSchema, body),
    });
  }

  /** DELETE /domains/{id} */
  delete(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "DELETE", path: `/domains/${id}` });
  }

  /** GET /domains/{id}/client */
  getClient(id: number): Promise<Client> {
    return this.http.request({ method: "GET", path: `/domains/${id}/client` });
  }

  /** GET /domains/{id}/status */
  getStatus(id: number): Promise<DomainStatus> {
    return this.http.request({ method: "GET", path: `/domains/${id}/status` });
  }

  /** PUT /domains/{id}/status */
  setStatus(id: number, body: DomainStatus): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/domains/${id}/status`,
      body: parseOrThrow(DomainStatusSchema, body),
    });
  }

  /** POST /domains/{id}/exec */
  exec(id: number, body: DomainExecRequest): Promise<DomainExecResponse> {
    return this.http.request({
      method: "POST",
      path: `/domains/${id}/exec`,
      body: parseOrThrow(DomainExecRequestSchema, body),
    });
  }

  /** GET /domains/{id}/dns/resolution */
  getDnsResolution(id: number): Promise<DomainDnsResolutionResponse> {
    return this.http.request({
      method: "GET",
      path: `/domains/${id}/dns/resolution`,
    });
  }

  /** GET /domains/{id}/logs */
  getLogs(
    id: number,
    query?: {
      pattern?: string;
      start_time?: string;
      end_time?: string;
      sample_size?: number;
    },
  ): Promise<DomainLogsResponse> {
    return this.http.request({
      method: "GET",
      path: `/domains/${id}/logs`,
      query: {
        pattern: query?.pattern,
        start_time: query?.start_time,
        end_time: query?.end_time,
        sample_size: query?.sample_size,
      },
    });
  }
}
