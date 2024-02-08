import { Browser, launch, Page } from 'puppeteer';

describe('trion website', () => {
    let browser: Browser;
    let page: Page;

    beforeAll(async () => {
        browser = await launch({ 
            headless: 'new',
            defaultViewport: {
                width: 1024,
                height: 768
            },
        });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('title', async () => {
        await page.goto('https://www.trion.de/');
        const pageTitle = await page.title();
        expect(pageTitle).toMatch(/trion/);
    });

    const delay = async () => new Promise((res) => setTimeout(res, 750));

    it('visit pages', async () => {
        const recorder = await page.screencast({path: 'screencast.webm'});

        await page.goto('https://www.trion.de'); await delay();

        await page.click('a ::-p-text(Entwicklung)'); await delay();

        const headerEntwicklung = await page.waitForSelector('header'); await delay();
        const headerEntwicklungText = await headerEntwicklung?.evaluate((el) => el.textContent);
        expect(headerEntwicklungText).toContain('Softwareentwicklung');

        await page.click('a ::-p-text(Beratung)'); await delay();

        const headerBeratung = await page.waitForSelector('header'); await delay();
        const headerBeratungText = await headerBeratung?.evaluate((el) => el.textContent);
        expect(headerBeratungText).toContain('Beratung');

        await page.click('a ::-p-text(Schulung)'); await delay();

        const headerSchulung = await page.waitForSelector('header'); await delay();
        const headerSchulungText = await headerSchulung?.evaluate((el) => el.textContent);
        expect(headerSchulungText).toContain('Schulungen');

        await page.click('a ::-p-text(Angular)'); await delay();

        const headerAngular = await page.waitForSelector('header'); await delay();
        const headerAngularText = await headerAngular?.evaluate((el) => el.textContent);
        expect(headerAngularText).toContain('Angular Schulung');

        await page.click('a ::-p-text(Schulung buchen)'); await delay();

        await page.screenshot({ path: 'screenshot.png' });

        await recorder.stop();
    }, 15_000);


});
