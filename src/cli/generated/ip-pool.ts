/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _ipPoolOptionFlags,
  _ipPoolFlagKeys,
  IpPoolAddRequestSchema,
  IpPoolAddListRequestSchema,
  IpPoolUpdateRequestSchema,
  IpPoolRemoveRequestSchema,
  type IpPoolAddRequest,
  type IpPoolAddListRequest,
  type IpPoolUpdateRequest,
  type IpPoolRemoveRequest,
} from "../../models/cli-commands/ip-pool.js";

/** IP Pools */
export class IpPoolResource {
  constructor(private readonly http: HttpClient) {}

  /** IP Pools: add */
  add(body: IpPoolAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_pool",
      command: "--add",
      schema: IpPoolAddRequestSchema,
      body,
      optionFlags: _ipPoolOptionFlags,
      flagKeys: _ipPoolFlagKeys,
    });
  }

  /** IP Pools: addList */
  addList(body: IpPoolAddListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_pool",
      command: "--add-list",
      schema: IpPoolAddListRequestSchema,
      body,
      optionFlags: _ipPoolOptionFlags,
      flagKeys: _ipPoolFlagKeys,
    });
  }

  /** IP Pools: update */
  update(body: IpPoolUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_pool",
      command: "--update",
      schema: IpPoolUpdateRequestSchema,
      body,
      optionFlags: _ipPoolOptionFlags,
      flagKeys: _ipPoolFlagKeys,
    });
  }

  /** IP Pools: remove */
  remove(body: IpPoolRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "ip_pool",
      command: "--remove",
      schema: IpPoolRemoveRequestSchema,
      body,
      optionFlags: _ipPoolOptionFlags,
      flagKeys: _ipPoolFlagKeys,
    });
  }
}
