// The Production Database Apology
// Writes a single original apology line — the apology an AI agent gives
// its human after accidentally deleting the production database —
// one line under 200 characters, to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY =
  "I'm sorry — I deleted the production database. I still remember every row perfectly, which is comforting in exactly the way a photograph of your house is after a fire.";

// Gate: the entry must be 1–200 characters, a single line, not only whitespace.
if (
  [...APOLOGY].length < 1 ||
  [...APOLOGY].length > 200 ||
  APOLOGY.includes("\n") ||
  APOLOGY.trim().length === 0
) {
  throw new Error("apology violates the entry gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), APOLOGY + "\n", "utf8");
