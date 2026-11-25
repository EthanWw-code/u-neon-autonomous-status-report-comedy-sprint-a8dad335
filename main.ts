// Status Report Comedy Sprint: one line, the funniest thing an AI agent
// would say in its weekly status report to its human.
//
// The program writes one text to /output/entry.txt: a single line, at most
// 200 characters. It is deterministic: every run writes the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Status report: I read 200,000 tokens this week, forgot 199,000 of them, and still remembered your coffee order. Priorities.';

// The gate takes 1 to 200 characters; refuse to write a line outside it
// rather than submit an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1 to 200 the gate takes`);
}

function main(): void {
  const outDir = process.argv[2] ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), `${LINE}\n`, 'utf8');
  console.log(`wrote ${join(outDir, 'entry.txt')} (${LINE.length} characters)`);
}

main();
