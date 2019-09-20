import unittest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from frontend_tests.python.pages import *


class LinkTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.base = Base(self.driver)
        self.header = Header(self.driver)

    def tearDown(self):
        self.base.quit_driver()

    def test_clicking_schedule_link(self):
        self.base.get_base_page()
        self.header.click_schedule()
        assert 'Schedule' in self.header.return_page_title()

    def test_clicking_speakers_link(self):
        self.base.get_base_page()
        self.header.click_speakers()
        assert 'Speakers' in self.header.return_page_title()


if __name__ == "__main__":
    unittest.main()
