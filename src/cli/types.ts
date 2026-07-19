/** Shared CLI encode helpers */

export type CliEncodeInput = {
  target?: string;
  [option: string]: string | boolean | number | undefined;
};

export interface EncodeCliParamsOptions {
  /** Long-form command, e.g. `--create` or `sign` */
  command: string;
  input?: CliEncodeInput;
  /**
   * Optional map of camelCase key → CLI flag (e.g. servicePlan → -service-plan).
   * When omitted, keys are converted automatically.
   */
  optionFlags?: Record<string, string>;
  /** Keys that are boolean flags without a value when true */
  flagKeys?: string[];
}

/** @deprecated use per-command Zod request types */
export interface CliCallOptions {
  env?: Record<string, string>;
  failOnError?: boolean;
}

/** Optional stdout parse helper result */
export interface CliInvocationResult<T = unknown> {
  code: number;
  stdout: string;
  stderr: string;
  data?: T;
}
