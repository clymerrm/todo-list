const {webdriver, Builder, until, By} = require('selenium-webdriver');



const BasePage = function() {

    this.driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    this.baseUrl = 'http://localhost:3000';

    this.goToPage = async function() {
        await this.driver.get(this.baseUrl);
    };

    this.quitDriver = function() {
        this.driver.quit()
    };

    this.titleContains = function(titleContents) {
        return this.driver.wait(until.titleContains(titleContents))
    };

    this.returnTitle = async function() {
        return await this.driver.getTitle();
    }

    this.findByXpath = function(xpath) {
        this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
        return this.driver.findElement(By.xpath(xpath));
    };

    this.findByCss = function(css) {
        this.driver.wait(until.elementLocated(By.css(css)), 10000);
        return this.driver.findElement(By.css(css));
    };

    this.clickElement = function(element) {
        element.click();
    };

}

module.exports = BasePage;
