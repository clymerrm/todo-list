from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get('http://localhost:3000/')
assert "Targeting Quality" in driver.title
