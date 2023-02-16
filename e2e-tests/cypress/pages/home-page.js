const { Base } = require("./base-page");

class HomePage extends Base {
    homePageUrl = "http://localhost:8000/"
    homePageTitle = "Crispy Succotash"
    
    loginButtonSelector = "//a[text()='Login']"
    signUpButtonSelector = "//a[text()='Sign Up']"

    openHomePage() {
        this.openUrl(this.homePageUrl)
    }

    assertHomePageTitle() {
        this.assertPageTitle(this.homePageTitle)
    }

    assertHomePageUrl() {
        this.assertPageUrl(this.homePageUrl)
    }

    clickLoginButton() {
        this.findAnElement(this.loginButtonSelector)
            .click()
    }

    clickSignUpButton() {
        this.findAnElement(this.signUpButtonSelector)
            .click()
    }

}

module.exports = { HomePage };