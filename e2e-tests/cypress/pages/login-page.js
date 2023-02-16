require('cypress-xpath');
/// <reference types="cypress-xpath" />

const { Base } = require("./base-page");

class LoginPage extends Base {
    loginPageHeaderSelector = "//h3[text()='Please Sign In']"
    userNameInputSelector = "//input[@id='id_username']"
    passwordInputSelector = "//input[@id='id_password']"
    loginCTASelector = "//input[@type='submit']"
    userNameValidationMessageSelector = "//p[@id='error_1_id_username']"
    passwordValidationMessageSelector = "//input[@id='id_password']"
    wrongPasswordValidationMessageSelector = "//li[text()='Please enter a correct username and password. Note that both fields may be case-sensitive.']"

    assertSignInHeaderVisibility() {
        this.assertElementVisibility(this.loginPageHeaderSelector)
    }

    completeUserNameInput(username) {
        this.findAnElement(this.userNameInputSelector)
            .clear()
            .type(username)
    }

    completePasswordInput(password) {
        this.findAnElement(this.passwordInputSelector)
            .clear()
            .type(password)
    }

    clickLoginCTA() {
        this.findAnElement(this.loginCTASelector)
            .click()
    }

    assertUserNameValidationIsTriggered() {
        this.assertElementVisibility(this.userNameValidationMessageSelector)
    }

    assertPasswordValidationIsTriggered() {
        this.assertElementVisibility(this.passwordValidationMessageSelector)
    }

    assertWrongPasswordErrorMessageIsShown() {
        this.assertElementVisibility(this.wrongPasswordValidationMessageSelector)
    }
}

module.exports = { LoginPage };