#!/usr/bin/env node
/**
 * Check for em dashes (U+2014) in the call-copilot codebase.
 * Fails if any are found. This ensures all UI copy and docs use
 * plain hyphens instead of em dashes, per style requirements.
 */

const fs = require('fs');
const path = require('path');

const EM_DASH = '\u2014';
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.css'];
const IGNORE_DIRS = ['node_modules', '.next', '.git', 'coverage', 'docs'];

function getAllFiles(dir, files = []) {
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

function checkForEmDash(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const violations = [];
  
  lines.forEach((line, index) => {
    const positions = [];
    let pos = line.indexOf(EM_DASH);
    while (pos !== -1) {
      positions.push(pos + 1);
      pos = line.indexOf(EM_DASH, pos + 1);
    }
    
    if (positions.length > 0) {
      violations.push({
        line: index + 1,
        columns: positions,
        content: line.trim()
      });
    }
  });
  
  return violations;
}

function main() {
  const rootDir = path.resolve(__dirname, '..');
  const files = getAllFiles(rootDir);
  let hasViolations = false;
  
  console.log(`Checking ${files.length} files for em dashes (U+2014)...\n`);
  
  for (const file of files) {
    const violations = checkForEmDash(file);
    
    if (violations.length > 0) {
      hasViolations = true;
      const relPath = path.relative(rootDir, file);
      console.log(`\x1b[31mEm dash found in: ${relPath}\x1b[0m`);
      
      for (const v of violations) {
        console.log(`  Line ${v.line}, column(s) ${v.columns.join(', ')}: "${v.content}"`);
      }
      console.log('');
    }
  }
  
  if (hasViolations) {
    console.log('\x1b[31mFailed: Em dashes (U+2014) found. Use regular hyphens (-) instead.\x1b[0m');
    process.exit(1);
  } else {
    console.log('\x1b[32mPassed: No em dashes found.\x1b[0m');
    process.exit(0);
  }
}

main();
