/**
 * Test that no em dashes (U+2014) appear in the codebase.
 * 
 * Per style requirements, all UI copy and docs should use regular hyphens,
 * not em dashes, to maintain plain language accessible to ESL speakers.
 */

import * as fs from 'fs';
import * as path from 'path';

const EM_DASH = '\u2014';
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css'];
const IGNORE_DIRS = ['node_modules', '.next', '.git', 'coverage', '__tests__'];

function getAllFiles(dir: string, files: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.includes(entry.name)) {
        getAllFiles(fullPath, files);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

interface Violation {
  file: string;
  line: number;
  content: string;
}

function findEmDashes(rootDir: string): Violation[] {
  const files = getAllFiles(rootDir);
  const violations: Violation[] = [];
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      if (line.includes(EM_DASH)) {
        violations.push({
          file: path.relative(rootDir, file),
          line: index + 1,
          content: line.trim()
        });
      }
    });
  }
  
  return violations;
}

describe('Em dash check', () => {
  test('no em dashes (U+2014) in source files', () => {
    const rootDir = path.resolve(__dirname, '..');
    const violations = findEmDashes(rootDir);
    
if (violations.length > 0) {
      const message = violations.map(v => 
        `  ${v.file}:${v.line}: "${v.content}"`
      ).join('\n');
      
      throw new Error(`Found ${violations.length} em dash(es):\n${message}\n\nUse regular hyphens (-) instead.`);
    }
    
    expect(violations).toHaveLength(0);
  });
});
