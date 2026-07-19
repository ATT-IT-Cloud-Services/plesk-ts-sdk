/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _gitOptionFlags,
  _gitFlagKeys,
  GitListRequestSchema,
  GitCreateRequestSchema,
  GitInfoRequestSchema,
  GitUpdateRequestSchema,
  GitRemoveRequestSchema,
  GitDeployRequestSchema,
  GitFetchRequestSchema,
  GitGetLastCommitRequestSchema,
  type GitListRequest,
  type GitCreateRequest,
  type GitInfoRequest,
  type GitUpdateRequest,
  type GitRemoveRequest,
  type GitDeployRequest,
  type GitFetchRequest,
  type GitGetLastCommitRequest,
} from "../../models/cli-commands/git.js";

/** Git Repositories */
export class GitResource {
  constructor(private readonly http: HttpClient) {}

  /** Git Repositories: list */
  list(body: GitListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--list",
      schema: GitListRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: create */
  create(body: GitCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--create",
      schema: GitCreateRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: info */
  info(body: GitInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--info",
      schema: GitInfoRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: update */
  update(body: GitUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--update",
      schema: GitUpdateRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: remove */
  remove(body: GitRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--remove",
      schema: GitRemoveRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: deploy */
  deploy(body: GitDeployRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--deploy",
      schema: GitDeployRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: fetch */
  fetch(body: GitFetchRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--fetch",
      schema: GitFetchRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }

  /** Git Repositories: getLastCommit */
  getLastCommit(body: GitGetLastCommitRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "git",
      command: "--get-last-commit",
      schema: GitGetLastCommitRequestSchema,
      body,
      optionFlags: _gitOptionFlags,
      flagKeys: _gitFlagKeys,
    });
  }
}
