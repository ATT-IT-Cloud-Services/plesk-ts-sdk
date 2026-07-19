/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _skeletonOptionFlags,
  _skeletonFlagKeys,
  SkeletonInstallRequestSchema,
  SkeletonResetRequestSchema,
  type SkeletonInstallRequest,
  type SkeletonResetRequest,
} from "../../models/cli-commands/skeleton.js";

/** Virtual Host Templates */
export class SkeletonResource {
  constructor(private readonly http: HttpClient) {}

  /** Virtual Host Templates: install */
  install(body: SkeletonInstallRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "skeleton",
      command: "--install",
      schema: SkeletonInstallRequestSchema,
      body,
      optionFlags: _skeletonOptionFlags,
      flagKeys: _skeletonFlagKeys,
    });
  }

  /** Virtual Host Templates: reset */
  reset(body: SkeletonResetRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "skeleton",
      command: "--reset",
      schema: SkeletonResetRequestSchema,
      body,
      optionFlags: _skeletonOptionFlags,
      flagKeys: _skeletonFlagKeys,
    });
  }
}
