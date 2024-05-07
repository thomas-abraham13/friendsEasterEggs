const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();

    // Navigate to Rachel Green on Google
    await page.goto('https://www.google.com/search?q=rachel+green', { waitUntil: 'networkidle0' });

    // Click Accept on the Google Popup (Before you continue....)
    await page.click('#L2AGLb > div');

    // Click the hair icon to initiate the easter egg
    await page.click('#rcnt > div.XqFnDf > div > div > div.wPNfjb > div > div.hHq9Z > div > div > div.qlJdOe > div > div > div:nth-child(1) > canvas');

    console.log("Waiting for 5 seconds");
    await page.waitForTimeout(5000); // Equivalent to delay function
    console.log("Waiting for 5 seconds : SUCCESS\n");

    await browser.close();
})();
