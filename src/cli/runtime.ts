import type { z } from "zod";
import type { HttpClient } from "../http.js";
import { parseOrThrow } from "../errors.js";
import {
  CliCallRequestSchema,
  type CliCallResponse,
} from "../models/cli.js";
import type { ActionResponse } from "../models/common.js";
import { encodeCliParams } from "./encode.js";

export interface InvokeManagedCommandArgs<T extends z.ZodTypeAny> {
  utilityId: string;
  command: string;
  schema: T;
  body: z.input<T>;
  optionFlags?: Record<string, string>;
  flagKeys?: string[];
}

/**
 * Validate a normal SDK request body, execute via the managed API gate,
 * return ActionResponse (hides transport details).
 */
export async function invokeManagedCommand<T extends z.ZodTypeAny>(
  http: HttpClient,
  args: InvokeManagedCommandArgs<T>,
): Promise<ActionResponse> {
  const parsed = parseOrThrow(args.schema, args.body) as Record<string, unknown>;

  const name = parsed.name as string | undefined;
  const input: Record<string, string | boolean | number | undefined> = {
    target: name,
  };
  for (const [key, value] of Object.entries(parsed)) {
    if (key === "name") continue;
    if (value === undefined) continue;
    input[key] = value as string | boolean | number;
  }

  const params = encodeCliParams({
    command: args.command,
    input,
    optionFlags: args.optionFlags,
    flagKeys: args.flagKeys,
  });

  const body = parseOrThrow(CliCallRequestSchema, {
    params,
    fail_on_error: true,
  });

  const raw = (await http.request({
    method: "POST",
    path: `/cli/${encodeURIComponent(args.utilityId)}/call`,
    body,
  })) as CliCallResponse;

  const message = (raw.stdout ?? "").trim();
  return {
    status: "ok",
    ...(message ? { message } : {}),
  };
}

/** @deprecated use invokeManagedCommand */
export const invokeCliCommand = invokeManagedCommand;
