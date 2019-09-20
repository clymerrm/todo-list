class Base():

    def __init__(self, driver):
        self.base_page = 'http://localhost:3002'
        self.driver = driver

    def get_base_page(self):
        self.driver.get(self.base_page)

    def return_page_title(self):
        return self.driver.title

    def quit_driver(self):
        self.driver.quit()
