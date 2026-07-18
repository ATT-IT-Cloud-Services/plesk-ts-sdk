import type { ZodTypeAny } from "zod";
import { ZodError } from "zod";

export class PleskApiError extends Error {
  readonly code: number;
  readonly status: number;
  readonly body: unknown;

  constructor(message: string, options: { code: number; status: number; body?: unknown }) {
    super(message);
    this.name = "PleskApiError";
    this.code = options.code;
    this.status = options.status;
    this.body = options.body;
  }
}

export class ValidationError extends Error {
  readonly issues: ZodError["issues"];

  constructor(error: ZodError) {
    super(error.message);
    this.name = "ValidationError";
    this.issues = error.issues;
  }
}

export function parseOrThrow<T extends ZodTypeAny>(
  schema: T,
  data: unknown,
): T["_output"] {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new ValidationError(result.error);
  }
  return result.data;
}
