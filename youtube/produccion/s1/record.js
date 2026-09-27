const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport:{width:1080,height:1920}, recordVideo:{dir:__dirname+'/out', size:{width:1080,height:1920}} });
  const p = await ctx.newPage();
  await p.goto('file://'+__dirname+'/animatic.html');
  await p.waitForTimeout(54000);
  await ctx.close(); await b.close();
})();
