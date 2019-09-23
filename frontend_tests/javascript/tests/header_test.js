const Header = require("../pageobjects/header.po")

page = new Header();

page.goToPage();
page.titleContains('Targeting');
page.clickScheduleLink();
page.titleContains('Schedule');
page.quitDriver();
