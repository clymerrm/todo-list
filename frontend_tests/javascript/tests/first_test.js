const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

let driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

driver.get('http://localhost:3000/');

driver.getTitle().then(function(title) {
    expect(title).to.contain('Targeting Quality')
});
