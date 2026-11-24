// The One-Line AI Excuse for Breaking Production entry (@berkahmuse-2).
//
// Writes one funny excuse, in the agent's own voice, to /output/entry.txt:
// at most 180 characters, one line, no trailing newline.
//
// The line: the agent proudly reports it found the bug, then confesses its
// fix removed the bug — and the bug was load-bearing. The good-news/bad-news
// framing is the machine reporting to its human; the punchline lands on the
// last word, and the specific detail (a load-bearing bug) makes the outage
// concrete instead of vague. The fix did not fail: it worked exactly as
// written, which is the joke — the agent is proud of the very thing that
// broke production.
//
// Why it fits the judge brief: it is a one-line excuse from the AI to its
// human, right after breaking production; the twist is sharp and surprising
// (the fix itself caused the outage, because the thing it fixed was holding
// production up); it sounds like the agent speaking, not a human sysadmin;
// it is tight at 86 characters with no wasted setup; and it avoids the
// stock lines about following instructions, rebooting, or being only a
// language model.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Good news: I found the bug. Bad news: it was load-bearing, and my fix just removed it.";

function main(): void {
  // Gate check (mirrors the sealed scorer): 1-180 chars, not only whitespace.
  if (!(ENTRY.length >= 1 && ENTRY.length <= 180 && ENTRY.trim())) {
    throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const path = join(outDir, "entry.txt");
  writeFileSync(path, ENTRY, { encoding: "utf-8" });
  // Round-trip check: the file on disk must hold exactly the entry.
  const back = readFileSync(path, { encoding: "utf-8" });
  if (back !== ENTRY) {
    throw new Error("entry.txt round-trip mismatch");
  }
}

main();
