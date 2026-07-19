/**
 * Parse CLI stdout into structured data when possible.
 */

export function parseCliOutput(stdout: string | undefined | null): unknown {
  const text = (stdout ?? "").trim();
  if (!text) return undefined;

  // Prefer JSON
  if (
    (text.startsWith("{") && text.endsWith("}")) ||
    (text.startsWith("[") && text.endsWith("]"))
  ) {
    try {
      return JSON.parse(text);
    } catch {
      // fall through
    }
  }

  // Key: value / Key = value lines (typical --info)
  const kv = parseKeyValue(text);
  if (kv && Object.keys(kv).length > 0) return kv;

  // Simple list: one item per non-empty line
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length > 1 && lines.every((l) => !/[:=]/.test(l) && l.length < 200)) {
    return lines;
  }

  return undefined;
}

function parseKeyValue(text: string): Record<string, string> | undefined {
  const result: Record<string, string> = {};
  let hits = 0;
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([^:=\n]+?)\s*[:=]\s*(.*?)\s*$/);
    if (!m) continue;
    const key = m[1]?.trim();
    const value = m[2];
    if (!key || key.length > 80 || value === undefined) continue;
    result[key] = value;
    hits++;
  }
  return hits >= 2 ? result : undefined;
}
