from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from frontend_tests.python.pages import *

driver = webdriver.Chrome(ChromeDriverManager().install())
base = Base(driver)
header = Header(driver)

base.get_base_page()
header.click_schedule()
assert 'Schedule' in header.return_page_title()

base.get_base_page()
header.click_speakers()
assert 'Speaker' in header.return_page_title()

base.quit_driver()
