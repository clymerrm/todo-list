const { after, before, describe } = require('mocha');
const {expect} = require('chai');
const Header = require("../pageobjects/header.po");

describe('HeaderTest', function () {
    this.timeout(4000);

    it('should go to schedule page when clicking on link', async () => {
        page = new Header();
        await page.goToPage();
        await page.titleContains('Targeting');
        await page.clickScheduleLink();
        await page.titleContains('Schedule');
        const title = await page.returnTitle();
        console.log(title);
        await expect(title).to.include('Schedule');
        await page.quitDriver();
    });

    it('should go to speakers page when clicking on link', async () => {
        page = new Header();
        await page.goToPage();
        await page.titleContains('Targeting');
        await page.clickSpeakersLink();
        await page.titleContains('Speaker');
        const title = await page.returnTitle();
        console.log(title);
        await expect(title).to.include('Speaker');
        await page.quitDriver();
    });

    afterEach(async () => {
        page = new Header();
        page.quitDriver();
    });

});
