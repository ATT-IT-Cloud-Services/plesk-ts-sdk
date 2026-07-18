import { z } from "zod";
import { parseOrThrow } from "../errors.js";
import type { PleskClient } from "../client.js";
import { DomainReferenceSchema } from "../models/domain.js";
import { generatePassword } from "./password.js";

export const CreateDatabaseWithUserSchema = z.object({
  name: z.string().min(1),
  parent_domain: DomainReferenceSchema,
  type: z.enum(["mssql", "mysql", "postgresql"]).optional(),
  server_id: z.number().optional(),
  login: z.string().min(1).optional(),
  password: z.string().min(1).optional(),
});
export type CreateDatabaseWithUserInput = z.infer<typeof CreateDatabaseWithUserSchema>;

export async function createDatabaseWithUser(
  client: PleskClient,
  input: CreateDatabaseWithUserInput,
) {
  const data = parseOrThrow(CreateDatabaseWithUserSchema, input);
  const password = data.password ?? generatePassword();
  const login = data.login ?? `${data.name}_user`.slice(0, 16);

  const database = await client.databases.create({
    name: data.name,
    type: data.type,
    parent_domain: data.parent_domain,
    server_id: data.server_id,
  });

  if (database.id === undefined) {
    throw new Error("Database created but no id returned");
  }

  const user = await client.databases.createUser({
    login,
    password,
    database_id: database.id,
  });

  return { database, user, credentials: { login, password } };
}
