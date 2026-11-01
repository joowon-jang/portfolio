import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const assets = ['js/data.js', 'js/app.js', 'js/project-detail.js', 'js/scroll-motion.js', 'css/style.css', 'css/project-detail.css'];
const pages = ['index.html', ...[
  'claude-wave.html', 'opencode-wave.html', 'focus.html', 'font-line.html',
  'font-noto.html', 'font-gothic.html', 'font-neo.html', 'font-free.html', 'font-maru.html'
].map(name => `mockups/${name}`)];
const assetReference = /((?:src|href)="(?:\.\.\/)?(js\/(?:data|app|project-detail|scroll-motion)\.js|css\/(?:style|project-detail)\.css))(?:\?[^"\s]*)?"/g;

async function main() {
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== '--check')) {
    throw new Error('Usage: node scripts/sync-home.mjs [--check]');
  }
  const check = args[0] === '--check';
  const sources = new Map(await Promise.all(assets.map(async file => [file, await readFile(new URL(file, root), 'utf8')])));
  const hash = createHash('sha256');
  for (const [file, source] of sources) hash.update(file).update('\0').update(source).update('\0');
  const version = hash.digest('hex').slice(0, 12);

  // Evaluate only the authored data and pure renderer, not the browser lifecycle.
  const context = vm.createContext({
    URL,
    window: {},
    document: { currentScript: { src: 'https://portfolio.invalid/js/app.js' }, querySelector: () => null }
  });
  for (const file of ['js/data.js', 'js/app.js']) vm.runInContext(sources.get(file), context, { filename: file });
  const markup = context.window.Portfolio.homeMarkup('ko');
  const updates = [];

  for (const file of pages) {
    const url = new URL(file, root);
    const original = await readFile(url, 'utf8');
    const openings = [...original.matchAll(/<div\b[^>]*\bdata-portfolio-root(?=[\s=>])[^>]*>/g)];
    const closing = /<\/div>(\s*<\/body>\s*<\/html>\s*)$/i.exec(original);
    if (openings.length !== 1 || !closing || closing.index <= openings[0].index + openings[0][0].length) {
      throw new Error(`${file}: expected one portfolio root ending immediately before </body>`);
    }
    const opening = openings[0];
    if (!/\bdata-rendered-lang="ko"/.test(opening[0])) {
      throw new Error(`${file}: static portfolio root must declare data-rendered-lang="ko"`);
    }
    const prefix = file === 'index.html' ? '' : '../';
    const relativeMarkup = markup
      .replace(/\bhref="https:\/\/portfolio\.invalid\/index\.html#(sec-[^"]*)"/g, 'href="#$1"')
      .replace(/\b(href|src)="https:\/\/portfolio\.invalid\//g, `$1="${prefix}`);
    let result = original.slice(0, opening.index + opening[0].length) + '\n' + relativeMarkup + '\n' + original.slice(closing.index);

    // Japanese is selected at runtime; the Korean static page needs no blocking JP sheet.
    result = result.replace(/^<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Noto\+Sans\+JP:[^"]*">\r?\n/gm, '');
    const references = new Set();
    result = result.replace(assetReference, (_, reference, asset) => {
      if (references.has(asset)) throw new Error(`${file}: duplicate common asset ${asset}`);
      references.add(asset);
      return `${reference}?v=${version}"`;
    });
    const missing = assets.filter(asset => !references.has(asset));
    if (missing.length) throw new Error(`${file}: missing common assets: ${missing.join(', ')}`);
    if (result !== original) updates.push({ file, url, result });
  }

  // Validate every target before changing any file.
  if (check) {
    for (const { file } of updates) console.error(`Stale: ${file}`);
    if (updates.length) process.exitCode = 1;
    else console.log('All 10 static homes and common asset versions are current.');
    return;
  }
  for (const { file, url, result } of updates) {
    await writeFile(url, result);
    console.log(`Updated: ${file}`);
  }
  console.log(`Static homes synchronized; common assets v=${version}.`);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 2;
});
