import { z } from "zod";
import { parseOrThrow } from "../errors.js";
import type { PleskClient } from "../client.js";
import {
  generateExternalId,
  generateLogin,
  generatePassword,
  loginFromName,
} from "./password.js";

export const CustomerHelperInputSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});
export type CustomerHelperInput = z.infer<typeof CustomerHelperInputSchema>;

export async function createCustomerWithDomain(
  client: PleskClient,
  domain: string,
  customer: CustomerHelperInput,
  plan: string,
) {
  const input = parseOrThrow(CustomerHelperInputSchema, customer);
  const username = loginFromName(input.name);
  const external_id = generateExternalId();
  const password = generatePassword();
  const ownerLogin = client.ownerLogin;

  const createdCustomer = await client.clients.create({
    name: input.name,
    company: "",
    login: username,
    status: 0,
    email: input.email,
    locale: "en-US",
    owner_login: ownerLogin,
    external_id,
    description: "",
    password,
    type: "customer",
  });

  const createdDomain = await client.domains.create({
    name: domain,
    description: "",
    hosting_type: "virtual",
    hosting_settings: {
      ftp_login: username,
      ftp_password: password,
    },
    owner_client: {
      id: createdCustomer.id,
      login: username,
      guid: createdCustomer.guid,
      external_id: "",
    },
    ip_addresses: client.ips,
    ipv4: client.ips,
    plan: { name: plan },
  });

  return {
    createdCustomer,
    createdDomain,
    user: { password, username },
  };
}

export async function createDomainForExistingCustomer(
  client: PleskClient,
  domain: string,
  customer: CustomerHelperInput,
  plan: string,
) {
  const input = parseOrThrow(CustomerHelperInputSchema, customer);
  const clients = await client.clients.list();
  const pleskClient = clients.find((x) => x.email === input.email);
  if (!pleskClient) {
    throw new Error(`No Plesk client found for email ${input.email}`);
  }

  const password = generatePassword();
  const ftplogin = generateLogin();

  const nDomain = await client.domains.create({
    name: domain,
    description: "",
    hosting_type: "virtual",
    hosting_settings: {
      ftp_login: ftplogin,
      ftp_password: password,
    },
    owner_client: {
      id: pleskClient.id,
      login: pleskClient.login,
      guid: pleskClient.guid,
      external_id: "",
    },
    ip_addresses: client.ips,
    ipv4: client.ips,
    plan: { name: plan },
  });

  return { nDomain, ftp: { login: ftplogin, password } };
}
