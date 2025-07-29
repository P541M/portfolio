// Debug script to check if Tailwind is working
console.log('=== Tailwind CSS Debug ===');

// Check if Tailwind config exists
const fs = require('fs');
const path = require('path');

const tailwindConfig = path.join(__dirname, 'tailwind.config.ts');
const postcssCOnfig = path.join(__dirname, 'postcss.config.mjs');
const globalCSS = path.join(__dirname, 'src/app/globals.css');

console.log('✓ Tailwind config exists:', fs.existsSync(tailwindConfig));
console.log('✓ PostCSS config exists:', fs.existsSync(postcssCOnfig));
console.log('✓ Global CSS exists:', fs.existsSync(globalCSS));

// Check if @tailwind directives are in CSS
if (fs.existsSync(globalCSS)) {
  const cssContent = fs.readFileSync(globalCSS, 'utf8');
  console.log('✓ Contains @tailwind base:', cssContent.includes('@tailwind base'));
  console.log('✓ Contains @tailwind components:', cssContent.includes('@tailwind components'));
  console.log('✓ Contains @tailwind utilities:', cssContent.includes('@tailwind utilities'));
}

console.log('\n=== Next Steps ===');
console.log('1. Run: npm run dev');
console.log('2. Open: http://localhost:3000');
console.log('3. If styles are missing, try hard refresh (Ctrl+F5)');
console.log('4. Check browser DevTools for CSS loading errors');