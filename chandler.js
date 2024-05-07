// Script Name: Chandler Easter Egg

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();

    // Navigate to Chandler Bing on Google
    await page.goto(`https://www.google.com/search?q=chandler+bing`, { waitUntil: 'networkidle0' });

    // Handle Google Popup (Before you continue....)
    await page.waitForSelector('#L2AGLb > div');
    await page.click('#L2AGLb > div');

    // Click the chair icon to initiate the easter egg
    await page.waitForSelector('div.hHq9Z canvas');
    await page.click('div.hHq9Z canvas');

    console.log("Waiting for 5 seconds");
    await page.waitForTimeout(5000);
    console.log("Waiting for 5 seconds : SUCCESS\n");

    await browser.close();
})();
