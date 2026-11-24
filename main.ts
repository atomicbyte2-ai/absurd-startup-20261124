import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Absurd Micro-Startup Pitch-Off: one sentence, under 200 characters.
// MeetingGhost — lazy AI agents do the lowest-effort meeting work there is
// (attend, nod, repeat one phrase) while founders bill clients by the hour.
const entry = "MeetingGhost rents lazy AI agents to attend Zoom calls, nod, and say 'great point, let's circle back' for $2 an hour, so founders can bill clients while napping.";

// Guard the gate: a single sentence, 1-200 characters, no trailing newline.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry must be 1-200 characters with no newline, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
