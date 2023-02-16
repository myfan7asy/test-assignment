require('cypress-xpath');
/// <reference types="cypress-xpath" />

const { Base } = require("./base-page");

class SignUpPage extends Base {
    userNameInputSelector = "//input[@id='id_username']"
    passwordInputSelector = "//input[@id='id_password1']"
    passwordConfirmationInputSelector = "//input[@id='id_password2']"
    submitCTASelector = "//input[@id='submit-id-submit']"
    userNameValidationMessageSelector = "//span[@id='error_1_id_username']"
    passwordValidationMessageSelector = "//span[@id='error_1_id_password1']"
    passwordConfirmationValidationMessageSelector = "//p[@id='hint_id_password2']"
    passwordDidnotMatchValidationMessageSelector = "//span[@id='error_1_id_password2']"
    duplicateUserNameValidationMessageSelector = "//strong[text()='A user with that username already exists.']"

    completeUserName() {
        this.findAnElement(this.userNameInputSelector)
        .clear()
        .type('sayhello1230011')
    }

    completePasswordWithValidValue() {
        this.findAnElement(this.passwordInputSelector)
        .clear()
        .type('eee3216767eee')
    }

    completePasswordWithMatchingValue() {
        this.findAnElement(this.passwordConfirmationInputSelector)
        .clear()
        .type('eee3216767eee')
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

    completePasswordWithNotMatchingValue() {
        this.findAnElement(this.passwordConfirmationInputSelector)
        .clear()
        .type('eee3216767eee33')
    }

    assertPasswordDidnotMatchValidationIsTriggered() {
        this.assertElementVisibility(this.passwordDidnotMatchValidationMessageSelector)
    }

    completeUserNameWithTakenValue() {
        this.findAnElement(this.userNameInputSelector)
        .clear()
        .type('test')
    }

    assertUserNameDuplicateValidationIsTriggered() {
        this.assertElementVisibility(this.duplicateUserNameValidationMessageSelector)
    }
}

module.exports = { SignUpPage };