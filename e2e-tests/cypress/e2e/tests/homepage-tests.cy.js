const { HomePage } = require("../../pages/home-page")
const { LoginPage } = require("../../pages/login-page")

const homePage = new HomePage

describe('Some Home Page tests', () => {
    it('Open Home Page', () => {
      homePage.openHomePage()
      homePage.assertHomePageTitle()
    })

    it('Verify redirect from Login Page to Home Page', () => {
      const loginPage = new LoginPage

      homePage.openHomePage()
      homePage.clickLoginButton()
      loginPage.assertSignInHeaderVisibility()
      loginPage.clickLogo()
      homePage.assertHomePageUrl()
    })
  })