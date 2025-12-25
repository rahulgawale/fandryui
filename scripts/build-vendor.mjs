import { build } from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outdir = path.resolve(
  __dirname,
  '../packages/vendor/web-awesome/dist'
);

// Resolve allowed Shoelace subpaths directly
const slInput = require.resolve(
  '@shoelace-style/shoelace/dist/components/input/input.js'
);

const slTextarea = require.resolve(
  '@shoelace-style/shoelace/dist/components/textarea/textarea.js'
);

const slIcon = require.resolve(
  '@shoelace-style/shoelace/dist/components/icon/icon.js'
);

await build({
  entryPoints: [slInput, slTextarea, slIcon],
  bundle: true,
  format: 'esm',
  target: 'es2020',
  outdir,
  sourcemap: true,
  minify: false
});

console.log('✅ Web Awesome vendor build complete');
