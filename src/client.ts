import { parseOrThrow } from "./errors.js";
import { buildBaseUrl, HttpClient } from "./http.js";
import {
  PleskClientOptionsSchema,
  resolveAuth,
  type PleskClientOptions,
  type ResolvedAuth,
} from "./types/config.js";
import { AuthResource } from "./resources/auth.js";
import { CliResource } from "./resources/cli.js";
import { ServerResource } from "./resources/server.js";
import { ExtensionsResource } from "./resources/extensions.js";
import { ClientsResource } from "./resources/clients.js";
import { DomainsResource } from "./resources/domains.js";
import { FilesResource } from "./resources/files.js";
import { FtpUsersResource } from "./resources/ftpusers.js";
import { DatabasesResource } from "./resources/databases.js";
import { DnsResource } from "./resources/dns.js";
import { Helpers } from "./helpers/index.js";
import {
  attachManagedResources,
  type ManagedClientNamespaces,
} from "./cli/generated/client-mixin.js";

export interface PleskClient extends ManagedClientNamespaces {}

export class PleskClient {
  private readonly http: HttpClient;
  private _ips: string[];
  private _ownerLogin: string;
  private _host: string;
  private _auth: ResolvedAuth;
  private _impersonateLogin?: string;

  readonly auth: AuthResource;
  /** Low-level gate; prefer namespaces like `subscription`, `mail`, … */
  readonly cli: CliResource;
  readonly server: ServerResource;
  readonly extensions: ExtensionsResource;
  readonly clients: ClientsResource;
  readonly domains: DomainsResource;
  readonly files: FilesResource;
  readonly ftpusers: FtpUsersResource;
  readonly databases: DatabasesResource;
  readonly dns: DnsResource;
  readonly helpers: Helpers;

  constructor(options: PleskClientOptions) {
    const opts = parseOrThrow(PleskClientOptionsSchema, options);
    this._host = opts.host;
    this._auth = resolveAuth(opts);
    this._impersonateLogin = opts.impersonateLogin;
    this._ips = opts.ips ?? [];
    this._ownerLogin = opts.ownerLogin ?? "admin";

    this.http = new HttpClient({
      baseUrl: buildBaseUrl(this._host),
      auth: this._auth,
      impersonateLogin: this._impersonateLogin,
    });

    this.auth = new AuthResource(this.http);
    this.cli = new CliResource(this.http);
    this.server = new ServerResource(this.http);
    this.extensions = new ExtensionsResource(this.http);
    this.clients = new ClientsResource(this.http);
    this.domains = new DomainsResource(this.http);
    this.files = new FilesResource(this.http);
    this.ftpusers = new FtpUsersResource(this.http);
    this.databases = new DatabasesResource(this.http);
    this.dns = new DnsResource(this.http);
    this.helpers = new Helpers(this);

    attachManagedResources(this as unknown as ManagedClientNamespaces, this.http);
  }

  get ips(): string[] {
    return this._ips;
  }

  get ownerLogin(): string {
    return this._ownerLogin;
  }

  get host(): string {
    return this._host;
  }

  setIPs(ips: string[]): void {
    this._ips = ips;
  }

  setURL(host: string): void {
    this._host = host;
    this.http.setBaseUrl(buildBaseUrl(host));
  }

  setKey(apiKey: string): void {
    this._auth = { type: "apiKey", apiKey };
    this.http.setAuth(this._auth);
  }

  setBasicAuth(basicAuth: string): void {
    this._auth = { type: "basic", basicAuth };
    this.http.setAuth(this._auth);
  }

  setImpersonate(login: string | undefined): void {
    this._impersonateLogin = login;
    this.http.setImpersonateLogin(login);
  }

  setOwnerLogin(login: string): void {
    this._ownerLogin = login;
  }
}
