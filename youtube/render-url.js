// Uso: node render-url.js <html> <query> <png> <w> <h>
const { chromium } = require('playwright');
(async () => {
  const [html, q, png, w, h] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  await p.goto('file://' + require('path').resolve(html) + '?' + q);
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.screenshot({ path: png });
  await b.close();
})();
