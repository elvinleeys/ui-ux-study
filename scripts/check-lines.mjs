// src/ 아래 .ts, .tsx, .css 파일 중 200줄을 넘는 파일을 찾아 실패 처리한다.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const LIMIT = 200;
const TARGET_EXT = new Set(['.ts', '.tsx', '.css']);
const over = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (TARGET_EXT.has(extname(path))) {
      const lines = readFileSync(path, 'utf8').split('\n').length;
      if (lines > LIMIT) over.push(`${path} (${lines}줄)`);
    }
  }
}

walk('src');
if (over.length) {
  console.error(`200줄 초과 파일:\n${over.join('\n')}`);
  process.exit(1);
}
console.log('파일 길이 검사 통과');
