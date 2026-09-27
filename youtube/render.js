// Uso: node render.js <html> <png> <w> <h>
const { chromium } = require('playwright');
(async () => {
  const [html, png, w, h] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  await p.goto('file://' + require('path').resolve(html));
  await p.waitForTimeout(800);
  await p.evaluate(() => document.fonts && document.fonts.ready);
  await p.screenshot({ path: png, fullPage: false });
  await b.close();
})();
