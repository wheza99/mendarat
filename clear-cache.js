const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Clearing Next.js cache...');

// Remove .next directory
const nextDir = path.join(__dirname, '.next');
if (fs.existsSync(nextDir)) {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log('✅ Removed .next directory');
}

// Remove node_modules/.cache if it exists
const cacheDir = path.join(__dirname, 'node_modules', '.cache');
if (fs.existsSync(cacheDir)) {
  fs.rmSync(cacheDir, { recursive: true, force: true });
  console.log('✅ Removed node_modules/.cache directory');
}

console.log('🚀 Starting development server...');
console.log('📝 If you still see ChunkLoadError, try:');
console.log('   1. Hard refresh the browser (Ctrl+F5)');
console.log('   2. Clear browser cache');
console.log('   3. Try a different browser');

// Start the development server
try {
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to start development server:', error.message);
} 