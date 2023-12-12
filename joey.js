// Script Name: {Python (WebDriver)}

const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
const page = await browser.newPage();
let element, formElement, tabs;

await page.goto(`https://www.google.com/search?q=joey+tribbiani`, { waitUntil: 'networkidle0' });
element = await page.$x(`//div[@id='rcnt']/div[2]/div/div/div[3]/div/div/div/div/div/div/div/canvas`);
	await element[0].click();
await browser.close();
})();