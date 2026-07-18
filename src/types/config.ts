import { z } from "zod";

const AuthApiKeySchema = z.object({
  apiKey: z.string().min(1),
  basicAuth: z.undefined().optional(),
  username: z.undefined().optional(),
  password: z.undefined().optional(),
});

const AuthBasicTokenSchema = z.object({
  basicAuth: z.string().min(1),
  apiKey: z.undefined().optional(),
  username: z.undefined().optional(),
  password: z.undefined().optional(),
});

const AuthUserPassSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  apiKey: z.undefined().optional(),
  basicAuth: z.undefined().optional(),
});

const AuthSchema = z.union([AuthApiKeySchema, AuthBasicTokenSchema, AuthUserPassSchema]);

export const PleskClientOptionsSchema = z
  .object({
    host: z.string().min(1),
    apiKey: z.string().min(1).optional(),
    basicAuth: z.string().min(1).optional(),
    username: z.string().min(1).optional(),
    password: z.string().min(1).optional(),
    impersonateLogin: z.string().min(1).optional(),
    ips: z.array(z.string()).optional(),
    ownerLogin: z.string().min(1).optional(),
  })
  .superRefine((value, ctx) => {
    const hasApiKey = Boolean(value.apiKey);
    const hasBasic = Boolean(value.basicAuth);
    const hasUserPass = Boolean(value.username && value.password);
    const modes = [hasApiKey, hasBasic, hasUserPass].filter(Boolean).length;
    if (modes !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Provide exactly one auth mode: apiKey, basicAuth, or username+password",
        path: ["apiKey"],
      });
    }
    if (value.username && !value.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "password is required when username is set",
        path: ["password"],
      });
    }
    if (value.password && !value.username) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "username is required when password is set",
        path: ["username"],
      });
    }
  });

export type PleskClientOptions = z.infer<typeof PleskClientOptionsSchema>;

export type ResolvedAuth =
  | { type: "apiKey"; apiKey: string }
  | { type: "basic"; basicAuth: string };

export function resolveAuth(options: PleskClientOptions): ResolvedAuth {
  if (options.apiKey) return { type: "apiKey", apiKey: options.apiKey };
  if (options.basicAuth) return { type: "basic", basicAuth: options.basicAuth };
  const token = Buffer.from(`${options.username}:${options.password}`, "utf8").toString(
    "base64",
  );
  return { type: "basic", basicAuth: token };
}

// silence unused (kept for documentation of auth union shape)
void AuthSchema;
