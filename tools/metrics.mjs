#!/usr/bin/env node
// Writes the weekly numbers shown on the landing.
//   npm run metrics -- <monday YYYY-MM-DD> <sunday YYYY-MM-DD> <completed> <projects> <studio>
// Source: Studio MCP get_throughput, the last closed week.

import { writeFileSync } from 'node:fs';

const [monday, sunday, completed, projects, self] = process.argv.slice(2);
const date = /^\d{4}-\d{2}-\d{2}$/;
const n = (v) => (/^\d+$/.test(v ?? '') ? Number(v) : NaN);

if (!date.test(monday ?? '') || !date.test(sunday ?? '') || [completed, projects, self].map(n).some(Number.isNaN)) {
  console.error('usage: npm run metrics -- <monday> <sunday> <completed> <projects> <studio>');
  process.exit(1);
}

const data = { monday, sunday, completed: n(completed), projects: n(projects), self: n(self) };
writeFileSync(new URL('../src/data/metrics.json', import.meta.url), JSON.stringify(data, null, 2) + '\n');
console.log(data);
