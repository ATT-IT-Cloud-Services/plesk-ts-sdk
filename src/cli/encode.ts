import type { CliEncodeInput, EncodeCliParamsOptions } from "./types.js";

/** Convert camelCase / snake to CLI flag: servicePlan → -service-plan */
export function camelToCliFlag(key: string): string {
  if (key.startsWith("-")) return key;
  const kebab = key
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
  return `-${kebab}`;
}

/** Convert CLI flag to camelCase key: -service-plan → servicePlan */
export function cliFlagToCamel(flag: string): string {
  const raw = flag.replace(/^--?/, "").replace(/:/g, "-");
  const parts = raw.split(/[-_]/).filter(Boolean);
  if (parts.length === 0) return flag;
  return (
    parts[0] +
    parts
      .slice(1)
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("")
  );
}

/**
 * Encode a validated request object into Plesk CLI `params` array.
 * Order: [command, target?, ...optionFlags]
 */
export function encodeCliParams(options: EncodeCliParamsOptions): string[] {
  const { command, input = {}, optionFlags = {}, flagKeys = [] } = options;
  const params: string[] = [command];

  if (input.target !== undefined && input.target !== "") {
    params.push(String(input.target));
  }

  const flagKeySet = new Set(flagKeys);
  for (const [key, value] of Object.entries(input)) {
    if (key === "target") continue;
    if (value === undefined) continue;

    const flag = optionFlags[key] ?? camelToCliFlag(key);

    if (typeof value === "boolean") {
      if (flagKeySet.has(key) || flagKeySet.has(flag)) {
        if (value) params.push(flag);
      } else {
        params.push(flag, value ? "true" : "false");
      }
      continue;
    }

    params.push(flag, String(value));
  }

  return params;
}

/** Encode option bag without a command token */
export function encodeOptionsOnly(
  options: Record<string, string | boolean | number | undefined>,
): string[] {
  return encodeCliParams({
    command: "--noop",
    input: options as CliEncodeInput,
  }).slice(1);
}
