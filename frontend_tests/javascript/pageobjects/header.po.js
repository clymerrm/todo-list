let Page = require('./base.po');

const homeLinkCss = "a[data-test-key=HomeLink]";
const scheduleLinkCss = "a[data-test-key=ScheduleLink]";
const speakersLinkCss = "a[data-test-key=SpeakersLink]";
const headerText = "//*[@class='container']/header/h1";

Page.prototype.returnHeaderText = function() {
    header = this.findByXpath(headerText);
    return header.text
};

Page.prototype.clickScheduleLink = async function () {
    link = this.findByCss(scheduleLinkCss);
    await this.clickElement(link);
};

Page.prototype.clickSpeakersLink = async function () {
    link = this.findByCss(speakersLinkCss);
    await this.clickElement(link);
};

Page.prototype.clickHomeLink = function () {
    link = this.findByCss(homeLinkCss);
    this.clickElement(link);
};

module.exports = Page;
