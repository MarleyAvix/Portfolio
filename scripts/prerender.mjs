/**
 * Post-build : génère une page HTML par route avec ses propres métadonnées SEO
 * (title, description, canonical, Open Graph) et un contenu texte lisible sans JavaScript,
 * puis régénère sitemap.xml et llms.txt depuis les données du site.
 *
 * Utilisation : "npm run build" (voir package.json). Aucune dépendance en plus d'esbuild.
 */
import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const tmp = path.join(root, 'node_modules', '.cache', 'seo.bundle.mjs');

// 1. Charge src/lib/seo.ts (les images importées par les données sont ignorées)
await build({
  entryPoints: [path.join(root, 'src/lib/seo.ts')],
  outfile: tmp,
  bundle: true,
  format: 'esm',
  platform: 'node',
  logLevel: 'silent',
  loader: { '.png': 'empty', '.jpg': 'empty', '.webp': 'empty', '.svg': 'empty' },
});
const { allPages, SITE_URL, SITE_NAME } = await import(pathToFileURL(tmp).href);
await rm(tmp, { force: true });

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const setMeta = (html, key, value) => {
  const re = new RegExp(`<meta\\s+(?:property|name)="${key}"[\\s\\S]*?/>`);
  if (!re.test(html)) throw new Error(`Balise meta introuvable dans index.html : ${key}`);
  const attr = key.startsWith('og:') ? 'property' : 'name';
  return html.replace(re, `<meta ${attr}="${key}" content="${esc(value)}" />`);
};

const render = (page) => {
  const url = SITE_URL + page.path;
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = setMeta(html, 'description', page.description);
  html = html.replace(/<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${url}" />`);
  html = setMeta(html, 'og:title', page.title);
  html = setMeta(html, 'og:description', page.description);
  html = setMeta(html, 'og:url', url);
  html = setMeta(html, 'twitter:title', page.title);
  html = setMeta(html, 'twitter:description', page.description);

  // Contenu lisible sans JavaScript (remplacé par React au chargement)
  let body = `<main><h1>${esc(page.heading)}</h1>`;
  if (page.intro) body += `<p>${esc(page.intro)}</p>`;
  for (const s of page.sections ?? []) body += `<h2>${esc(s.title)}</h2><p>${esc(s.text)}</p>`;
  if (page.path === '/') {
    body += '<nav><ul>';
    for (const p of allPages.filter((x) => x.path !== '/')) body += `<li><a href="${p.path}">${esc(p.heading)}</a></li>`;
    body += '</ul></nav>';
  }
  body += '</main>';
  return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
};

// 2. Une page HTML par route
for (const page of allPages) {
  const html = render(page);
  if (page.path === '/') {
    await writeFile(path.join(dist, 'index.html'), html);
  } else {
    const dir = path.join(dist, page.path);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'index.html'), html);
  }
}

// 3. sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  allPages
    .map((p) => `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`)
    .join('\n') +
  '\n</urlset>\n';
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

// 4. llms.txt
const link = (p) => `- [${p.heading}](${SITE_URL}${p.path})`;
const group = (prefix) => allPages.filter((p) => p.path.startsWith(prefix) && p.path !== prefix).map(link).join('\n');
const llms = `# ${SITE_NAME} — Portfolio

> ${allPages[0].description}

## Pages principales
${allPages.filter((p) => /^\/[a-z0-9-]*\/?$/.test(p.path) && p.path !== '/mentions-legales/').map(link).join('\n')}

## Projets
${group('/projects/')}

## Parcours
${group('/formation/')}

## Veille technologique
${group('/tech/')}

## Liens
- [LinkedIn](https://www.linkedin.com/in/marleyavix/)
- [GitHub](https://github.com/marleyavix)
`;
await writeFile(path.join(dist, 'llms.txt'), llms);

console.log(`Prérendu SEO : ${allPages.length} pages, sitemap.xml et llms.txt générés.`);
