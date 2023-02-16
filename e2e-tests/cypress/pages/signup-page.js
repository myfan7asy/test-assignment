require('cypress-xpath');
/// <reference types="cypress-xpath" />

const { Base } = require("./base-page");

class SignUpPage extends Base {
    userNameInputSelector = "//input[@id='id_username']"
    passwordInputSelector = "//input[@id='id_password1']"
    password2InputSelector = "//input[@id='id_password2']"
    submitCTASelector = "//input[@id='submit-id-submit']"
    userNameValidationMessageSelector = "//span[@id='error_1_id_username']"
    passwordValidationMessageSelector = "//span[@id='error_1_id_password1']"
    passwordConfirmationValidationMessageSelector = "//p[@id='hint_id_password2']"
    passwordDidnotMatchValidationMessageSelector = "//span[@id='error_1_id_password2']"
    duplicateUserNameValidationMessageSelector = "//strong[text()='A user with that username already exists.']"

    completeUserNameInput(un) {
        this.findAnElement(this.userNameInputSelector)
            .clear()
            .type(un)
    }

    completePasswordInput(pwd) {
        this.findAnElement(this.passwordInputSelector)
            .clear()
            .type(pwd)
    }
    completePassword2Input(pwd) {
        this.findAnElement(this.password2InputSelector)
            .clear()
            .type(pwd)
    }

    clickSubmitCTA() {
        this.findAnElement(this.submitCTASelector)
            .click()
    }

    assertUserNameValidationIsTriggered() {
        this.assertElementVisibility(this.userNameValidationMessageSelector)
    }

    assertPasswordValidationIsTriggered() {
        this.assertElementVisibility(this.passwordValidationMessageSelector)
    }

    assertPasswordConfirmationValidationIsTriggered() {
        this.assertElementVisibility(this.passwordConfirmationValidationMessageSelector)
    }

    assertPasswordDidnotMatchValidationIsTriggered() {
        this.assertElementVisibility(this.passwordDidnotMatchValidationMessageSelector)
    }

    assertUserNameDuplicateValidationIsTriggered() {
        this.assertElementVisibility(this.duplicateUserNameValidationMessageSelector)
    }
}

module.exports = { SignUpPage };