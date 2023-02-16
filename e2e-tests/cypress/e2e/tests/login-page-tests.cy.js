const { HomePage } = require("../../pages/home-page")
const { LoginPage } = require("../../pages/login-page")
const { FeedsPage } = require("../../pages/feeds-page")
const { Helper } = require("../../support/helper")

describe('Several Login Page tests', () => {
    const existingUserName = "test"
    const password = "sayhello123"
    
    const homePage = new HomePage
    const loginPage = new LoginPage
    
    it('Login with [valid credentials]', () => {        
        const feedsPage = new FeedsPage
        
        homePage.openHomePage()
        homePage.clickLoginButton()
        loginPage.completeUserNameInput(existingUserName)
        loginPage.completePasswordInput(password)
        loginPage.clickLoginCTA()
        feedsPage.assertLogoutCTAVisibility()
    })

    it('Login with [empty credentials]', () => {
        homePage.openHomePage()
        homePage.clickLoginButton()
        loginPage.clickLoginCTA()
        loginPage.assertUserNameValidationIsTriggered()
        loginPage.assertPasswordValidationIsTriggered()
    })

    it('Login with [invalid credentials]', () => {
        const helper = new Helper
        let invalidPassword = helper.generateUniqId("pwd")

        homePage.openHomePage()
        homePage.clickLoginButton()
        loginPage.completeUserNameInput(existingUserName)
        loginPage.completePasswordInput(invalidPassword)
        loginPage.clickLoginCTA()
        loginPage.assertWrongPasswordErrorMessageIsShown()
    })
  })