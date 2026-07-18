import { z } from "zod";

export interface FileContentResponse {
  encoding: "plain" | "base64";
  content: string;
}

export const FileChmodRequestSchema = z.object({
  "mode": z.string(),
});
export type FileChmodRequest = z.infer<typeof FileChmodRequestSchema>;

export const FileCopyMoveRequestSchema = z.object({
  "source": z.string(),
  "destination": z.string(),
  "overwrite": z.boolean().optional(),
});
export type FileCopyMoveRequest = z.infer<typeof FileCopyMoveRequestSchema>;

export const FileContentRequestSchema = z.object({
  "encoding": z.enum(["plain", "base64"]),
  "content": z.string(),
});
export type FileContentRequest = z.infer<typeof FileContentRequestSchema>;

export interface File {
  name: string;
  path: string;
  fullpath: string;
  type: "file" | "directory";
  size: number;
  mtime: number;
  mode: string;
}

