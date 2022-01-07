const puppeteer = require("puppeteer");

(async () => {
  // our code
  console.log("open browser");
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser",
  });
  const page = await browser.newPage();
  await page.goto("google.com");

  var title = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);

    return h1.innerHTML;
  });

  console.log(title);

  console.log("close browser");
  browser.close();
})();
