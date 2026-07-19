/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _trafficOptionFlags,
  _trafficFlagKeys,
  TrafficAddRequestSchema,
  TrafficAddUserRequestSchema,
  TrafficSubRequestSchema,
  TrafficSubUserRequestSchema,
  TrafficAddBatchRequestSchema,
  TrafficAddBatchUserRequestSchema,
  TrafficDelRequestSchema,
  TrafficDelUserRequestSchema,
  type TrafficAddRequest,
  type TrafficAddUserRequest,
  type TrafficSubRequest,
  type TrafficSubUserRequest,
  type TrafficAddBatchRequest,
  type TrafficAddBatchUserRequest,
  type TrafficDelRequest,
  type TrafficDelUserRequest,
} from "../../models/cli-commands/traffic.js";

/** Traffic on Domain */
export class TrafficResource {
  constructor(private readonly http: HttpClient) {}

  /** Traffic on Domain: add */
  add(body: TrafficAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--add",
      schema: TrafficAddRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: addUser */
  addUser(body: TrafficAddUserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--add-user",
      schema: TrafficAddUserRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: sub */
  sub(body: TrafficSubRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--sub",
      schema: TrafficSubRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: subUser */
  subUser(body: TrafficSubUserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--sub-user",
      schema: TrafficSubUserRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: addBatch */
  addBatch(body: TrafficAddBatchRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--add-batch",
      schema: TrafficAddBatchRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: addBatchUser */
  addBatchUser(body: TrafficAddBatchUserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--add-batch-user",
      schema: TrafficAddBatchUserRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: del */
  del(body: TrafficDelRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--del",
      schema: TrafficDelRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }

  /** Traffic on Domain: delUser */
  delUser(body: TrafficDelUserRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "traffic",
      command: "--del-user",
      schema: TrafficDelUserRequestSchema,
      body,
      optionFlags: _trafficOptionFlags,
      flagKeys: _trafficFlagKeys,
    });
  }
}
