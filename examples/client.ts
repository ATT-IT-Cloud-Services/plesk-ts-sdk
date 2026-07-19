/**
 * Shared client for examples.
 * Set PLESK_HOST + PLESK_API_KEY (or PLESK_USER / PLESK_PASSWORD).
 */
import { PleskClient } from "../dist/index.js";

export function createExampleClient(): PleskClient {
  const host = process.env.PLESK_HOST;
  if (!host) {
    throw new Error("Set PLESK_HOST (e.g. panel.example.com:8443)");
  }

  const apiKey = process.env.PLESK_API_KEY;
  if (apiKey) {
    return new PleskClient({ host, apiKey });
  }

  const username = process.env.PLESK_USER ?? "admin";
  const password = process.env.PLESK_PASSWORD;
  if (!password) {
    throw new Error("Set PLESK_API_KEY or PLESK_USER + PLESK_PASSWORD");
  }

  return new PleskClient({ host, username, password });
}
