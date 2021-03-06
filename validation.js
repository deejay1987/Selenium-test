// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Petshelter', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Petshelter', async function() {
    // Test name: Petshelter
    // Step # | name | target | value
    // 1 | open | http://localhost:8080/ | 
    await driver.get("http://localhost:8080/")
    // 2 | setWindowSize | 579x748 | 
    await driver.manage().window().setRect({ width: 579, height: 748 })
    // 3 | click | linkText=Add pet to Shelter | 
    await driver.findElement(By.linkText("Add pet to Shelter")).click()
    // 4 | click | css=.btn | 
    await driver.findElement(By.css(".btn")).click()

    await driver.wait(until.elementLocated(By.css("#manage_pet_form .form-group .form-control.border_red")), 30000);
    {
      const error_input= await driver.findElements(By.css("#manage_pet_form .form-group .form-control.border_red"));
      assert(error_input.length);
    }
  })
})
