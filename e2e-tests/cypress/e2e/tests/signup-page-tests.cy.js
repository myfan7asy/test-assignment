const { HomePage } = require("../../pages/home-page");
const { SignUpPage } = require("../../pages/signup-page");
const { FeedsPage } = require("../../pages/feeds-page");
const { Helper } = require("../../support/helper");

describe('A few SignUp Page tests', () => {
    const homePage = new HomePage
    const signUpPage = new SignUpPage
    const helper = new Helper

    const validUn = helper.generateUniqId("un")
    const validPwd = helper.generateUniqId("pwd")

    it('SignUp with [valid credentials]', () => {
        const feedsPage = new FeedsPage

        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.completeUserNameInput(validUn)
        signUpPage.completePasswordInput(validPwd)
        signUpPage.completePassword2Input(validPwd)
        signUpPage.clickSubmitCTA()
        feedsPage.assertSuccessSignUpMessage()
    })

    it('SignUp with [empty credentials]', () => {
        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.clickSubmitCTA()
        signUpPage.assertUserNameValidationIsTriggered()
        signUpPage.assertPasswordValidationIsTriggered()
        signUpPage.assertPasswordConfirmationValidationIsTriggered()
    })

    it('SignUp with [not matching passwords]', () => {
        const validUn = helper.generateUniqId("un")
        const validPwd = helper.generateUniqId("pwd")
        const validPwd2 = helper.generateUniqId("pwd")

        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.completeUserNameInput(validUn)
        signUpPage.completePasswordInput(validPwd)
        signUpPage.completePassword2Input(validPwd2)
        signUpPage.clickSubmitCTA()
        signUpPage.assertPasswordDidnotMatchValidationIsTriggered()
    })

    it('SignUp with [already taken username]', () => {
        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.completeUserNameInput(validUn)
        signUpPage.completePasswordInput(validPwd)
        signUpPage.completePassword2Input(validPwd)
        signUpPage.clickSubmitCTA()
        signUpPage.assertUserNameDuplicateValidationIsTriggered()
    })
})