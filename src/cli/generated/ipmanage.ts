/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _ipmanageOptionFlags,
  _ipmanageFlagKeys,
  IpmanageCreateRequestSchema,
  IpmanageUpdateRequestSchema,
  IpmanageRemoveRequestSchema,
  IpmanageRereadRequestSchema,
  IpmanageIpListRequestSchema,
  IpmanageSslListRequestSchema,
  IpmanageInterListRequestSchema,
  IpmanageXmlInfoRequestSchema,
  IpmanageResetSslCertificateRequestSchema,
  IpmanageAutoRemapIpAddressesRequestSchema,
  type IpmanageCreateRequest,
  type IpmanageUpdateRequest,
  type IpmanageRemoveRequest,
  type IpmanageRereadRequest,
  type IpmanageIpListRequest,
  type IpmanageSslListRequest,
  type IpmanageInterListRequest,
  type IpmanageXmlInfoRequest,
  type IpmanageResetSslCertificateRequest,
  type IpmanageAutoRemapIpAddressesRequest,
} from "../../models/cli-commands/ipmanage.js";

/** IP Addresses */
export class IpmanageResource {
  constructor(private readonly http: HttpClient) {}

  /** IP Addresses: create */
  create(body: IpmanageCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--create",
      schema: IpmanageCreateRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: update */
  update(body: IpmanageUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--update",
      schema: IpmanageUpdateRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: remove */
  remove(body: IpmanageRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--remove",
      schema: IpmanageRemoveRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: reread */
  reread(body: IpmanageRereadRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--reread",
      schema: IpmanageRereadRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: ipList */
  ipList(body: IpmanageIpListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--ip_list",
      schema: IpmanageIpListRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: sslList */
  sslList(body: IpmanageSslListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--ssl_list",
      schema: IpmanageSslListRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: interList */
  interList(body: IpmanageInterListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--inter_list",
      schema: IpmanageInterListRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: xmlInfo */
  xmlInfo(body: IpmanageXmlInfoRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--xml-info",
      schema: IpmanageXmlInfoRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: resetSslCertificate */
  resetSslCertificate(body: IpmanageResetSslCertificateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--reset_ssl_certificate",
      schema: IpmanageResetSslCertificateRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }

  /** IP Addresses: autoRemapIpAddresses */
  autoRemapIpAddresses(body: IpmanageAutoRemapIpAddressesRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ipmanage",
      command: "--auto-remap-ip-addresses",
      schema: IpmanageAutoRemapIpAddressesRequestSchema,
      body,
      optionFlags: _ipmanageOptionFlags,
      flagKeys: _ipmanageFlagKeys,
    });
  }
}
