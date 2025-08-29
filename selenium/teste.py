import random
import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager


service = Service(ChromeDriverManager().install())


def waitForElementLoad(nav, by, selector, timeout=5):
    return WebDriverWait(nav, timeout).until(
        EC.element_to_be_clickable((by, selector))
    )

def initialiazation():
    options = Options()
    options.add_argument('--start-maximized')
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_experimental_option('useAutomationExtension', False)
    
    nav = webdriver.Chrome(service=service, options=options)
    nav.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
        "source": """
            Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined
            })
        """
    })
    
    nav.get("https://www.google.com")
    time.sleep(random.uniform(1, 3))

    return nav


def search_video(nav):
    try:
        element = waitForElementLoad(nav, By.NAME, "q")
        element.send_keys("parem de enviar cebola pra minha casa bluezão")
        element.send_keys(Keys.RETURN)

        WebDriverWait(nav, 5).until(
            EC.presence_of_element_located((By.ID, "search"))
        )
    except Exception as e:
        print(f"Error in search_video: {e}")        

def click_video(nav):
    try:
        youtube_link = WebDriverWait(nav, 5).until(
            EC.element_to_be_clickable((By.XPATH, '//a[contains(@href, "youtube.com/watch")]'))
        )
        youtube_link.click()
    except Exception as e:
        print(f"Error: {e}")

def execution_order():
    try:
        nav = initialiazation()
        search_video(nav)
        click_video(nav)
    except Exception as e:
        print(f"Error in execution_order: {e}")

if __name__ == "__main__":
    execution_order()