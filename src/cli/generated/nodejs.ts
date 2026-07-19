/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _nodejsOptionFlags,
  _nodejsFlagKeys,
  NodejsVersionsRequestSchema,
  NodejsEnableRequestSchema,
  NodejsDisableRequestSchema,
  NodejsSetVersionRequestSchema,
  NodejsGetVersionRequestSchema,
  type NodejsVersionsRequest,
  type NodejsEnableRequest,
  type NodejsDisableRequest,
  type NodejsSetVersionRequest,
  type NodejsGetVersionRequest,
} from "../../models/cli-commands/nodejs.js";

/** Node.js Versions */
export class NodejsResource {
  constructor(private readonly http: HttpClient) {}

  /** Node.js Versions: versions */
  versions(body: NodejsVersionsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "nodejs",
      command: "--versions",
      schema: NodejsVersionsRequestSchema,
      body,
      optionFlags: _nodejsOptionFlags,
      flagKeys: _nodejsFlagKeys,
    });
  }

  /** Node.js Versions: enable */
  enable(body: NodejsEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "nodejs",
      command: "--enable",
      schema: NodejsEnableRequestSchema,
      body,
      optionFlags: _nodejsOptionFlags,
      flagKeys: _nodejsFlagKeys,
    });
  }

  /** Node.js Versions: disable */
  disable(body: NodejsDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "nodejs",
      command: "--disable",
      schema: NodejsDisableRequestSchema,
      body,
      optionFlags: _nodejsOptionFlags,
      flagKeys: _nodejsFlagKeys,
    });
  }

  /** Node.js Versions: setVersion */
  setVersion(body: NodejsSetVersionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "nodejs",
      command: "--set-version",
      schema: NodejsSetVersionRequestSchema,
      body,
      optionFlags: _nodejsOptionFlags,
      flagKeys: _nodejsFlagKeys,
    });
  }

  /** Node.js Versions: getVersion */
  getVersion(body: NodejsGetVersionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "nodejs",
      command: "--get-version",
      schema: NodejsGetVersionRequestSchema,
      body,
      optionFlags: _nodejsOptionFlags,
      flagKeys: _nodejsFlagKeys,
    });
  }
}
