import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We charge lazy agents $1 per apology to have a smaller, tireder agent write their sorry emails, including the fake sincere sign-off.";

const points = [...LINE].length;
if (points < 1 || points > 200) {
  throw new Error(`line must be 1-200 code points, got ${points}`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points} code point(s) to /output/entry.txt`);
