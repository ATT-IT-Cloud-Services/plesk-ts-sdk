import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import type { StatusResponse } from "../models/common.js";
import {
  FileChmodRequestSchema,
  FileContentRequestSchema,
  FileCopyMoveRequestSchema,
  type File,
  type FileChmodRequest,
  type FileContentRequest,
  type FileContentResponse,
  type FileCopyMoveRequest,
} from "../models/file.js";

export class FilesResource {
  constructor(private readonly http: HttpClient) {}

  /** GET /domains/{id}/fs */
  getMeta(domainId: number, path?: string): Promise<File> {
    return this.http.request({
      method: "GET",
      path: `/domains/${domainId}/fs`,
      query: { path },
    });
  }

  /** DELETE /domains/{id}/fs */
  delete(domainId: number, path: string): Promise<StatusResponse> {
    return this.http.request({
      method: "DELETE",
      path: `/domains/${domainId}/fs`,
      query: { path },
    });
  }

  /** GET /domains/{id}/fs/list */
  list(domainId: number, path?: string): Promise<File[]> {
    return this.http.request({
      method: "GET",
      path: `/domains/${domainId}/fs/list`,
      query: { path },
    });
  }

  /**
   * GET /domains/{id}/fs/content
   * With encoding → JSON FileContentResponse; without → raw ArrayBuffer.
   */
  getContent(
    domainId: number,
    path: string,
    encoding: "plain" | "base64",
  ): Promise<FileContentResponse>;
  getContent(domainId: number, path: string): Promise<ArrayBuffer>;
  getContent(
    domainId: number,
    path: string,
    encoding?: "plain" | "base64",
  ): Promise<FileContentResponse | ArrayBuffer> {
    if (encoding) {
      return this.http.request({
        method: "GET",
        path: `/domains/${domainId}/fs/content`,
        query: { path, encoding },
      });
    }
    return this.http.request({
      method: "GET",
      path: `/domains/${domainId}/fs/content`,
      query: { path },
      binary: true,
    });
  }

  /** PUT /domains/{id}/fs/content */
  putContent(
    domainId: number,
    path: string,
    body: FileContentRequest,
  ): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/domains/${domainId}/fs/content`,
      query: { path },
      body: parseOrThrow(FileContentRequestSchema, body),
    });
  }

  /** PATCH /domains/{id}/fs/content */
  appendContent(
    domainId: number,
    path: string,
    body: FileContentRequest,
  ): Promise<StatusResponse> {
    return this.http.request({
      method: "PATCH",
      path: `/domains/${domainId}/fs/content`,
      query: { path },
      body: parseOrThrow(FileContentRequestSchema, body),
    });
  }

  /** POST /domains/{id}/fs/mkdir */
  mkdir(domainId: number, path: string): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: `/domains/${domainId}/fs/mkdir`,
      query: { path },
    });
  }

  /** POST /domains/{id}/fs/copy */
  copy(domainId: number, body: FileCopyMoveRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: `/domains/${domainId}/fs/copy`,
      body: parseOrThrow(FileCopyMoveRequestSchema, body),
    });
  }

  /** POST /domains/{id}/fs/move */
  move(domainId: number, body: FileCopyMoveRequest): Promise<StatusResponse> {
    return this.http.request({
      method: "POST",
      path: `/domains/${domainId}/fs/move`,
      body: parseOrThrow(FileCopyMoveRequestSchema, body),
    });
  }

  /** PUT /domains/{id}/fs/chmod */
  chmod(
    domainId: number,
    path: string,
    body: FileChmodRequest,
  ): Promise<StatusResponse> {
    return this.http.request({
      method: "PUT",
      path: `/domains/${domainId}/fs/chmod`,
      query: { path },
      body: parseOrThrow(FileChmodRequestSchema, body),
    });
  }
}
