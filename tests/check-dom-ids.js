const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'exam3.html'), 'utf8');
const js = fs.readFileSync(path.join(__dirname, '..', 'exam3.js'), 'utf8');

// Find all $('someId') or document.getElementById('someId')
const regex = /\$\(\s*['"]([^'"]+)['"]\s*\)|getElementById\(\s*['"]([^'"]+)['"]\s*\)/g;
const ids = new Set();
let match;
while ((match = regex.exec(js)) !== null) {
  const id = match[1] || match[2];
  ids.add(id);
}

console.log(`Found ${ids.size} unique element IDs referenced in exam3.js:`);
let missing = [];
for (const id of ids) {
  const idRegex = new RegExp(`id=["']${id}["']`);
  if (!idRegex.test(html)) {
    // Check if created dynamically or really missing
    missing.push(id);
  }
}

if (missing.length > 0) {
  console.error('❌ Missing IDs in exam3.html:', missing);
  process.exit(1);
} else {
  console.log('✅ ALL IDs referenced by exam3.js exist in exam3.html!');
}
