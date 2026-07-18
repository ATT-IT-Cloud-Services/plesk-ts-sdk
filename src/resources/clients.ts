import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { CreatedResponse, StatusResponse } from "../models/common.js";
import {
  ClientRequestSchema,
  ClientUpdateRequestSchema,
  type Client,
  type ClientRequest,
  type ClientStatistics,
  type ClientUpdateRequest,
} from "../models/client.js";
import type { DomainResponse } from "../models/domain.js";

export class ClientsResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /clients */
  list(): Promise<Client[]> {
    return this.http.request({ method: "GET", path: "/clients" });
  }

  /** POST /clients */
  create(body: ClientRequest): Promise<CreatedResponse> {
    return this.http.request({
      method: "POST",
      path: "/clients",
      body: parseOrThrow(ClientRequestSchema, body),
    });
  }

  /** GET /clients/{id} */
  get(id: number): Promise<Client> {
    return this.http.request({ method: "GET", path: `/clients/${id}` });
  }

  /** PUT /clients/{id} */
  update(id: number, body: ClientUpdateRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/clients/${id}`,
      body: parseOrThrow(ClientUpdateRequestSchema, body),
    });
  }

  /** DELETE /clients/{id} */
  delete(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "DELETE", path: `/clients/${id}` });
  }

  /** GET /clients/{id}/domains */
  listDomains(id: number): Promise<DomainResponse[]> {
    return this.http.request({ method: "GET", path: `/clients/${id}/domains` });
  }

  /** GET /clients/{id}/statistics */
  getStatistics(id: number): Promise<ClientStatistics> {
    return this.http.request({
      method: "GET",
      path: `/clients/${id}/statistics`,
    });
  }

  /** PUT /clients/{id}/activate */
  activate(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "PUT", path: `/clients/${id}/activate` });
  }

  /** PUT /clients/{id}/suspend */
  suspend(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "PUT", path: `/clients/${id}/suspend` });
  }
}
