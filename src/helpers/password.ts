import generator from "generate-password";

export function generatePassword(length = 32): string {
  return generator.generate({
    length,
    numbers: true,
    symbols: false,
    lowercase: true,
    uppercase: true,
  });
}

export function generateLogin(length = 16): string {
  return generator.generate({
    length,
    numbers: false,
    symbols: false,
    lowercase: true,
    uppercase: false,
  });
}

export function generateExternalId(length = 32): string {
  return generator.generate({
    length,
    numbers: true,
    symbols: false,
    lowercase: true,
    uppercase: false,
  });
}

export function loginFromName(name: string): string {
  return name.toLocaleLowerCase().split(" ").join("").trim();
}
