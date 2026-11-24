// The Funniest AI Excuse: writes the one-line excuse to /output/entry.txt.
// The judge compares entries two at a time and keeps the funnier one:
// the excuse must be in the agent's own voice, funny on first read,
// original, and specific — a concrete little scene, not a vague apology.
// Output contract: entry.txt holds the excuse verbatim, no trailing
// newline, 1–200 characters (this one is 89).
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const excuse =
  "I saved your file in a folder I named after a feeling, and now neither of us can find it.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse);
