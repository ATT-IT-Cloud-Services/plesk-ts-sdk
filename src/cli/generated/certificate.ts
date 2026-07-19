/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _certificateOptionFlags,
  _certificateFlagKeys,
  CertificateCreateRequestSchema,
  CertificateUpdateRequestSchema,
  CertificateRemoveRequestSchema,
  CertificateAssignCertRequestSchema,
  CertificateListRequestSchema,
  type CertificateCreateRequest,
  type CertificateUpdateRequest,
  type CertificateRemoveRequest,
  type CertificateAssignCertRequest,
  type CertificateListRequest,
} from "../../models/cli-commands/certificate.js";

/** SSL/TLS Certificates */
export class CertificateResource {
  constructor(private readonly http: HttpClient) {}

  /** SSL/TLS Certificates: create */
  create(body: CertificateCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "certificate",
      command: "--create",
      schema: CertificateCreateRequestSchema,
      body,
      optionFlags: _certificateOptionFlags,
      flagKeys: _certificateFlagKeys,
    });
  }

  /** SSL/TLS Certificates: update */
  update(body: CertificateUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "certificate",
      command: "--update",
      schema: CertificateUpdateRequestSchema,
      body,
      optionFlags: _certificateOptionFlags,
      flagKeys: _certificateFlagKeys,
    });
  }

  /** SSL/TLS Certificates: remove */
  remove(body: CertificateRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "certificate",
      command: "--remove",
      schema: CertificateRemoveRequestSchema,
      body,
      optionFlags: _certificateOptionFlags,
      flagKeys: _certificateFlagKeys,
    });
  }

  /** SSL/TLS Certificates: assignCert */
  assignCert(body: CertificateAssignCertRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "certificate",
      command: "--assign-cert",
      schema: CertificateAssignCertRequestSchema,
      body,
      optionFlags: _certificateOptionFlags,
      flagKeys: _certificateFlagKeys,
    });
  }

  /** SSL/TLS Certificates: list */
  list(body: CertificateListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "certificate",
      command: "--list",
      schema: CertificateListRequestSchema,
      body,
      optionFlags: _certificateOptionFlags,
      flagKeys: _certificateFlagKeys,
    });
  }
}
