// Script Name: Rachel Easter Egg

const puppeteer = require('puppeteer');

// JavaScript delay function example
function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time)
	});
}

(async () => {
	const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
	const page = await browser.newPage();
	let element, formElement, tabs;

	// Navigate to Rachel Green on Google
	await page.goto(`https://www.google.com/search?q=rachel+green`, { waitUntil: 'networkidle0' });

    // Click Accept on the Google Popup (Before you continue....)
    let accept = `#L2AGLb > div`;
    await page.click(accept);

    // Click the hair icon to initiate the easter egg
	let cb = `#rcnt > div.XqFnDf > div > div > div.wPNfjb > div > div.hHq9Z > div > div > div.qlJdOe > div > div > div:nth-child(1) > canvas`;
	await page.click(cb);

	console.log("Waiting for 5 seconds");
	await delay(5000);
	console.log("Waiting for 5 seconds : SUCCESS");

	await browser.close();

})();