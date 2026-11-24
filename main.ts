// Two Days of Quiet Dread — make.fun entry (program/v1, Node 22 stdlib only).
// Writes one single-line code review comment (<=140 chars) that approves a
// pull request while carrying quiet existential dread to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "LGTM. Tests pass, types check, and in a billion years the sun will swallow this repo whole. Merging.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
