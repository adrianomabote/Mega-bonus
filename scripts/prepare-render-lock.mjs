import { readFileSync, writeFileSync } from "node:fs";

const lockfilePath = new URL("../package-lock.json", import.meta.url);
const replitMirror = "http://package-firewall.replit.internal/npm/";
const publicRegistry = "https://registry.npmjs.org/";
const lockfile = JSON.parse(readFileSync(lockfilePath, "utf8"));
let converted = 0;

for (const entry of Object.values(lockfile.packages ?? {})) {
  if (typeof entry.resolved !== "string") continue;

  if (entry.resolved.startsWith(replitMirror)) {
    entry.resolved = `${publicRegistry}${entry.resolved.slice(replitMirror.length)}`;
    converted += 1;
  } else if (entry.resolved.includes("package-firewall.replit.internal")) {
    throw new Error(`Unexpected Replit package mirror URL: ${entry.resolved}`);
  }
}

if (converted > 0) {
  writeFileSync(lockfilePath, `${JSON.stringify(lockfile, null, 2)}\n`);
}

console.log(`Prepared package lock for Render (${converted} Replit mirror URLs converted).`);
