import { PleskApiError } from "./errors.js";
import { isErrorResponse } from "./models/common.js";
import type { ResolvedAuth } from "./types/config.js";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface HttpRequestOptions {
  method: HttpMethod;
  path: string;
  query?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
  /** When true, return ArrayBuffer instead of JSON (octet-stream downloads). */
  binary?: boolean;
}

export function buildBaseUrl(host: string): string {
  const trimmed = host.trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(trimmed)) {
    const u = new URL(trimmed);
    const base = `${u.protocol}//${u.host}`;
    return base.endsWith("/api/v2") ? base : `${base}/api/v2`;
  }
  return `https://${trimmed}/api/v2`;
}

function buildQuery(query?: HttpRequestOptions["query"]): string {
  if (!query) return "";
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) continue;
    params.set(key, String(value));
  }
  const s = params.toString();
  return s ? `?${s}` : "";
}

export class HttpClient {
  private baseUrl: string;
  private auth: ResolvedAuth;
  private impersonateLogin?: string;

  constructor(options: {
    baseUrl: string;
    auth: ResolvedAuth;
    impersonateLogin?: string;
  }) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.auth = options.auth;
    this.impersonateLogin = options.impersonateLogin;
  }

  setAuth(auth: ResolvedAuth): void {
    this.auth = auth;
  }

  setBaseUrl(baseUrl: string): void {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  setImpersonateLogin(login: string | undefined): void {
    this.impersonateLogin = login;
  }

  private headers(jsonBody: boolean): Record<string, string> {
    const headers: Record<string, string> = {
      Accept: "application/json",
    };
    if (jsonBody) headers["Content-Type"] = "application/json";
    if (this.auth.type === "apiKey") {
      headers["X-API-Key"] = this.auth.apiKey;
    } else {
      headers.Authorization = `Basic ${this.auth.basicAuth}`;
    }
    if (this.impersonateLogin) {
      headers["X-Impersonate-Login"] = this.impersonateLogin;
    }
    return headers;
  }

  async request<T = unknown>(options: HttpRequestOptions): Promise<T> {
    const url = `${this.baseUrl}${options.path.startsWith("/") ? "" : "/"}${options.path}${buildQuery(options.query)}`;
    const hasBody = options.body !== undefined;
    const res = await fetch(url, {
      method: options.method,
      headers: this.headers(hasBody),
      body: hasBody ? JSON.stringify(options.body) : undefined,
    });

    if (options.binary && res.ok) {
      return (await res.arrayBuffer()) as T;
    }

    const text = await res.text();
    let parsed: unknown = undefined;
    if (text) {
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = text;
      }
    }

    if (!res.ok) {
      if (isErrorResponse(parsed)) {
        throw new PleskApiError(parsed.message, {
          code: parsed.code,
          status: res.status,
          body: parsed,
        });
      }
      throw new PleskApiError(
        typeof parsed === "string" && parsed
          ? parsed
          : `HTTP ${res.status} ${res.statusText}`,
        { code: res.status, status: res.status, body: parsed },
      );
    }

    return parsed as T;
  }
}
