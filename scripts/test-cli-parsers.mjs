/**
 * Unit tests for CLI encode/decode/parse (no live API).
 */
import {
  encodeCliParams,
  decodeCliParams,
  parseCliOutput,
  camelToCliFlag,
  cliFlagToCamel,
} from "../dist/index.js";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

// camel ↔ flag
assert(camelToCliFlag("servicePlan") === "-service-plan", "camelToCliFlag");
assert(cliFlagToCamel("-service-plan") === "servicePlan", "cliFlagToCamel");
assert(cliFlagToCamel("--xml-info") === "xmlInfo", "cliFlagToCamel long");

// encode
const params = encodeCliParams({
  command: "--create",
  input: {
    target: "example.com",
    owner: "admin",
    servicePlan: "Default Domain",
    ip: "192.168.1.100",
    force: true,
  },
  flagKeys: ["force"],
});
assert(params[0] === "--create", "cmd");
assert(params[1] === "example.com", "target");
assert(params.includes("-owner") && params.includes("admin"), "owner");
assert(params.includes("-service-plan") && params.includes("Default Domain"), "plan");
assert(params.includes("-force"), "flag without value");
assert(!params.includes("true") || params[params.indexOf("-force") + 1] !== "true", "flag has no true value");

// decode roundtrip-ish
const decoded = decodeCliParams([
  "--create",
  "example.com",
  "-owner",
  "admin",
  "-service-plan",
  "Default Domain",
  "-force",
]);
assert(decoded.command === "--create", "decode command");
assert(decoded.target === "example.com", "decode target");
assert(decoded.options.owner === "admin", "decode owner");
assert(decoded.options.servicePlan === "Default Domain", "decode plan");
assert(decoded.options.force === true, "decode flag");

// parse output JSON
assert(
  JSON.stringify(parseCliOutput('{"a":1}')) === JSON.stringify({ a: 1 }),
  "parse json",
);

// parse key-value
const kv = parseCliOutput("Name: example.com\nStatus: active\n");
assert(kv && kv.Name === "example.com" && kv.Status === "active", "parse kv");

// parse list
const list = parseCliOutput("a.com\nb.com\nc.com\n");
assert(Array.isArray(list) && list.length === 3, "parse list");

console.log("test-cli-parsers: ok");
