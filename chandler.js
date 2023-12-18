// Script Name: Chandler Easter Egg

const puppeteer = require('puppeteer');

//JavaScript delay function example
function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time)
	});
}

(async () => {
	const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
	const page = await browser.newPage();
	let element, formElement, tabs;

	//Navigate to Chandler Bing on Google
	await page.goto(`https://www.google.com/search?q=chandler+bing`, { waitUntil: 'networkidle0' });

	element = await page.$x(`//div[@id='rcnt']/div[2]/div/div/div[3]/div/div/div/div/div/div/div/canvas`);
	await element[0].click();

	console.log("Waiting for 5 seconds");
	await delay(5000);
	console.log("Waiting for 5 seconds : SUCCESS");

	await browser.close();

})();