const { HomePage } = require("../../pages/home-page");
const { LoginPage } = require("../../pages/login-page");
const { FeedsPage } = require("../../pages/feeds-page");
const { Helper } = require("../../support/helper");

describe('Several Login Page tests', () => {
    const homePage = new HomePage
    const loginPage = new LoginPage
    const helper = new Helper

    let registeredAccount = null

    it('Login with [valid credentials]', () => {
        const feedsPage = new FeedsPage

        registeredAccount = helper.registerAccount()

        homePage.openHomePage()
        homePage.clickLoginButton()
        loginPage.completeUserNameInput(registeredAccount[0])
        loginPage.completePasswordInput(registeredAccount[1])
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
        let invalidPassword = helper.generateUniqId("pwd")

        homePage.openHomePage()
        homePage.clickLoginButton()
        loginPage.completeUserNameInput(registeredAccount[0])
        loginPage.completePasswordInput(invalidPassword)
        loginPage.clickLoginCTA()
        loginPage.assertWrongPasswordErrorMessageIsShown()
    })
})