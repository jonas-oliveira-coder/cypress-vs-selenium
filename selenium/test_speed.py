import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

start = time.time()

driver = webdriver.Chrome()
driver.get("https://example.cypress.io")

driver.find_element(By.XPATH, "//*[contains(text(), 'Kitchen Sink')]")

end = time.time()
driver.quit()

print(f"Execution time: {round((end - start) * 1000)} ms")
