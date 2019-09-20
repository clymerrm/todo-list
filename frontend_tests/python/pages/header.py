from selenium.webdriver.common.by import By
from frontend_tests.python.pages import Base


class Header(Base):

    home_link = (By.CSS_SELECTOR, "a[data-test-key=HomeLink]")
    schedule_link = (By.CSS_SELECTOR, "a[data-test-key=ScheduleLink]")
    speakers_link = (By.CSS_SELECTOR, "a[data-test-key=SpeakersLink]")
    header_text = (By.XPATH, "//*[@class='container']/header/h1")

    def click_home(self):
        self.driver.find_element(self.home_link).click()

    def click_schedule(self):
        self.driver.find_element(*self.schedule_link).click()

    def click_speakers(self):
        self.driver.find_element(*self.speakers_link).click()

    def return_page_header(self):
        return self.driver.find_element(*self.header_text).text
