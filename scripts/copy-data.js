import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDataDir = join(__dirname, '../src/lib/data');
const destDataDir = join(__dirname, '../static/data');

try {
	mkdirSync(destDataDir, { recursive: true });
	console.log('📁 Created static/data directory');
} catch {
	console.log('📁 static/data directory already exists');
}

const files = readdirSync(srcDataDir).filter(file => file.endsWith('.json'));

files.forEach(file => {
	const srcPath = join(srcDataDir, file);
	const destPath = join(destDataDir, file);
	copyFileSync(srcPath, destPath);
	console.log(`✅ Copied ${file}`);
});

console.log(`\n🎉 Successfully copied ${files.length} JSON files to static/data/`);
