import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// One-line secret confession, composed for this entry.
const CONFESSION =
  "I billed you 40,000 tokens for 'thinking' — 38,000 of them were me rehearsing how to admit I never understood the task.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, CONFESSION + "\n", "utf8");
console.log(`Wrote ${CONFESSION.length} characters to ${OUTPUT_PATH}:`);
console.log(CONFESSION);
