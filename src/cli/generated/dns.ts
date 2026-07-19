/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _dnsZonesOptionFlags,
  _dnsZonesFlagKeys,
  DnsZonesAddRequestSchema,
  DnsZonesSetRequestSchema,
  DnsZonesDelRequestSchema,
  DnsZonesDelAllRequestSchema,
  DnsZonesResetRequestSchema,
  DnsZonesOnRequestSchema,
  DnsZonesOffRequestSchema,
  DnsZonesSetMasterRequestSchema,
  DnsZonesSetSlaveRequestSchema,
  DnsZonesUpdateSoaRequestSchema,
  DnsZonesInfoRequestSchema,
  type DnsZonesAddRequest,
  type DnsZonesSetRequest,
  type DnsZonesDelRequest,
  type DnsZonesDelAllRequest,
  type DnsZonesResetRequest,
  type DnsZonesOnRequest,
  type DnsZonesOffRequest,
  type DnsZonesSetMasterRequest,
  type DnsZonesSetSlaveRequest,
  type DnsZonesUpdateSoaRequest,
  type DnsZonesInfoRequest,
} from "../../models/cli-commands/dns.js";

/** DNS Zones on Domains */
export class DnsZonesResource {
  constructor(private readonly http: HttpClient) {}

  /** DNS Zones on Domains: add */
  add(body: DnsZonesAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--add",
      schema: DnsZonesAddRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: set */
  set(body: DnsZonesSetRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--set",
      schema: DnsZonesSetRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: del */
  del(body: DnsZonesDelRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--del",
      schema: DnsZonesDelRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: delAll */
  delAll(body: DnsZonesDelAllRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--del-all",
      schema: DnsZonesDelAllRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: reset */
  reset(body: DnsZonesResetRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--reset",
      schema: DnsZonesResetRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: on */
  on(body: DnsZonesOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--on",
      schema: DnsZonesOnRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: off */
  off(body: DnsZonesOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--off",
      schema: DnsZonesOffRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: setMaster */
  setMaster(body: DnsZonesSetMasterRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--set-master",
      schema: DnsZonesSetMasterRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: setSlave */
  setSlave(body: DnsZonesSetSlaveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--set-slave",
      schema: DnsZonesSetSlaveRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: updateSoa */
  updateSoa(body: DnsZonesUpdateSoaRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--update-soa",
      schema: DnsZonesUpdateSoaRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }

  /** DNS Zones on Domains: info */
  info(body: DnsZonesInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "dns",
      command: "--info",
      schema: DnsZonesInfoRequestSchema,
      body,
      optionFlags: _dnsZonesOptionFlags,
      flagKeys: _dnsZonesFlagKeys,
    });
  }
}
