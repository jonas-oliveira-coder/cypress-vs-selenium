import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

start = time.time()

from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--disable-gpu")
options.add_argument("--remote-debugging-port=9222")

driver = webdriver.Chrome(options=options)

driver.get("https://example.cypress.io")

driver.find_element(By.XPATH, "//*[contains(text(), 'Kitchen Sink')]")

end = time.time()
driver.quit()

print(f"Execution time: {round((end - start) * 1000)} ms")
