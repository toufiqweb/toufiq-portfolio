const fs = require('fs');

// Read with CRLF preserved
const content = fs.readFileSync('components/Journey.js', 'utf8');

// Find the block start - line 66 begins with "  const journeyItems"
const lines = content.split('\n');
let startLine = -1, endLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const journeyItems = [')) {
    startLine = i;
  }
  if (startLine !== -1 && endLine === -1 && i > startLine && lines[i].trim() === '];') {
    endLine = i;
    break;
  }
}

if (startLine === -1 || endLine === -1) {
  console.log('Could not find journeyItems block. startLine:', startLine, 'endLine:', endLine);
  process.exit(1);
}

console.log('Found block at lines', startLine + 1, 'to', endLine + 1);

// Remove lines startLine through endLine (inclusive) + the empty line after
const newLines = [
  ...lines.slice(0, startLine),
  ...lines.slice(endLine + 2), // +2 to also skip the blank line after the ];
];

fs.writeFileSync('components/Journey.js', newLines.join('\n'), 'utf8');
console.log('Done. Journey.js updated.');
