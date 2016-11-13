require('babel-register')({})

// http://seleniumhq.github.io/selenium/docs/api/javascript/index.html
// https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs

const webdriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
// const firefox = require('selenium-webdriver/firefox')
const path = require('chromedriver').path
const { By, until } = webdriver

const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service)

const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build()

driver.navigate().to(`http://localhost:3001/`)
  .then(() => driver.findElement(By.css('.sync-button')))
  .then(element => element.getAttribute('class'))
  .then(value => console.log(value))

driver.quit()

// driver.get('http://www.google.com/ncr')
// driver.findElement(By.name('q')).sendKeys('webdriver')
// driver.findElement(By.name('btnG')).click()
// driver.wait(until.titleIs('webdriver - Google Search'), 1000)
