import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { StatusResponse } from "../models/common.js";
import {
  DnsRecordRequestSchema,
  type DnsRecord,
  type DnsRecordRequest,
} from "../models/dns.js";

export class DnsResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /dns/records */
  listRecords(domain: string): Promise<DnsRecord[]> {
    return this.http.request({
      method: "GET",
      path: "/dns/records",
      query: { domain },
    });
  }

  /** POST /dns/records */
  createRecord(domain: string, body: DnsRecordRequest): Promise<DnsRecord> {
    return this.http.request({
      method: "POST",
      path: "/dns/records",
      query: { domain },
      body: parseOrThrow(DnsRecordRequestSchema, body),
    });
  }

  /** GET /dns/records/{id} */
  getRecord(id: number): Promise<DnsRecord> {
    return this.http.request({ method: "GET", path: `/dns/records/${id}` });
  }

  /** PUT /dns/records/{id} */
  updateRecord(id: number, body: DnsRecordRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/dns/records/${id}`,
      body: parseOrThrow(DnsRecordRequestSchema, body),
    });
  }

  /** DELETE /dns/records/{id} */
  deleteRecord(id: number): Promise<StatusResponse> {
    return this.http.request({ method: "DELETE", path: `/dns/records/${id}` });
  }
}
