import { z } from "zod";
import { parseOrThrow } from "../errors.js";
import type { PleskClient } from "../client.js";
import { DomainReferenceSchema } from "../models/domain.js";
import { generatePassword } from "./password.js";

export const CreateFtpUserForDomainSchema = z.object({
  name: z.string().min(1),
  parent_domain: DomainReferenceSchema,
  password: z.string().min(1).optional(),
  home: z.string().optional(),
  quota: z.number().optional(),
});
export type CreateFtpUserForDomainInput = z.infer<typeof CreateFtpUserForDomainSchema>;

export async function createFtpUserForDomain(
  client: PleskClient,
  input: CreateFtpUserForDomainInput,
) {
  const data = parseOrThrow(CreateFtpUserForDomainSchema, input);
  const password = data.password ?? generatePassword();

  await client.ftpusers.create({
    name: data.name,
    password,
    home: data.home,
    quota: data.quota,
    parent_domain: data.parent_domain,
  });

  return { name: data.name, password };
}
