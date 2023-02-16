const { HomePage } = require("../../pages/home-page")
const { SignUpPage } = require("../../pages/signup-page")
const { FeedsPage } = require("../../pages/feeds-page")

describe('A few SignUp Page tests', () => {
    const homePage = new HomePage
    const signUpPage = new SignUpPage
    
    it('SignUp with [valid credentials]', () => {
        const feedsPage = new FeedsPage
        
        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.completeUserName()
        signUpPage.completePasswordWithValidValue()
        signUpPage.completePasswordWithMatchingValue()
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
        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.completeUserName()
        signUpPage.completePasswordWithValidValue()
        signUpPage.completePasswordWithNotMatchingValue()
        signUpPage.clickSubmitCTA()
        signUpPage.assertPasswordDidnotMatchValidationIsTriggered()
    })

    it('SignUp with [already taken username]', () => {
        homePage.openHomePage()
        homePage.clickSignUpButton()
        signUpPage.completeUserNameWithTakenValue()
        signUpPage.completePasswordWithValidValue()
        signUpPage.completePasswordWithMatchingValue()
        signUpPage.clickSubmitCTA()
        signUpPage.assertUserNameDuplicateValidationIsTriggered()
    })
  })