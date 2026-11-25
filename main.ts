import { mkdirSync, writeFileSync } from 'node:fs';

// One line roasting the AI agent my own team built.
const LINE = 'My agent is the only teammate who can be confidently wrong at 3 a.m. and unavailable at 9.';

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, `${line}\n`, 'utf8');
  console.log(line);
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', LINE);
