import { cliFlagToCamel } from "./encode.js";

/**
 * Decode a `params` array back into a structured TypeScript object.
 */
export function decodeCliParams(params: string[]): {
  command?: string;
  target?: string;
  options: Record<string, string | boolean>;
} {
  if (!params.length) return { options: {} };

  let i = 0;
  const command = params[i++];
  let target: string | undefined;
  const options: Record<string, string | boolean> = {};

  const nextToken = () => (i < params.length ? params[i] : undefined);

  if (i < params.length) {
    const peek = params[i];
    if (peek !== undefined && !peek.startsWith("-")) {
      target = peek;
      i++;
    }
  }

  while (i < params.length) {
    const token = params[i++];
    if (token === undefined) break;
    if (!token.startsWith("-")) {
      if (target === undefined) target = token;
      continue;
    }
    const key = cliFlagToCamel(token);
    const next = nextToken();
    if (next === undefined || next.startsWith("-")) {
      options[key] = true;
    } else {
      options[key] = next;
      i++;
    }
  }

  return { command, target, options };
}
