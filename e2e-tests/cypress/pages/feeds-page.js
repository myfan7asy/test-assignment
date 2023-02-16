require('cypress-xpath');

const { Base } = require("./base-page");
const { Helper } = require("../support/helper");

const helper = new Helper
const randomComment = helper.generateUniqId("test")

class FeedsPage extends Base {
    logoutCTASelector = "//a[text()='Logout']"
    successfulSignUpMessageSelector = "//div[text()='Great success! Enjoy :)']"
    allFeedsButtonSelector = "//a[text()='All Feeds']"
    newFeedButtonSelector = "//a[text()='New Feed']"
    feedURLInputSelector = "//input[@id='id_feed_url']"
    submitCTASelector = "//input[@id='submit-id-submit']"
    feedURLValueSelector = "//dt[text()='Feed URL']/following-sibling::dd[1]"
    myFeedsButtonSelector = "//a[text()='My Feeds']"
    duplicatedFeedValidationSelector = "//span[@id='error_1_id_feed_url']"
    anyFeedSelector = "//tr[1]/td[1]/a[1]"
    heartIconSelector = "//p//span[contains(@class, 'glyphicon')]"
    logoutCTASelector = "//a[text()='Logout']"
    loginButtonSelector = "//a[text()='Login']"
    nextPageIconSelector = "//a[text()='>>']"
    nextPageURLTail = "?page=2"
    anyArticleSelector = "//tr[1]/td[1]/a[1]"
    commentInputSelector = "//div[@class='CodeMirror-lines']"
    successfulCommentPostMessageSelector = "//div[text()='Comment added successfully']"
    postedCommentSelector = `//em[text()='${randomComment}']`

    assertLogoutCTAVisibility() {
        this.assertElementVisibility(this.logoutCTASelector)
    }

    assertSuccessSignUpMessage() {
        this.assertElementVisibility(this.successfulSignUpMessageSelector)
    }

    clickAllFeedsButton() {
        this.findAnElement(this.allFeedsButtonSelector)
            .click()
    }

    clickNewFeedButton() {
        this.findAnElement(this.newFeedButtonSelector)
            .click()
    }

    populateFeedUrlInput(feedUrl) {
        this.findAnElement(this.feedURLInputSelector)
            .clear()
            .type(feedUrl)
    }

    clickSubmitCTA() {
        this.findAnElement(this.submitCTASelector)
            .click()
    }

    assertFeedUrlValue(valueToCompareWith) {
        this.findAnElement(this.feedURLValueSelector).then($value => {
            const textValue = $value.text()
            cy.log(textValue)
            expect(textValue).to.equal(valueToCompareWith)
        })
    }

    clickMyFeedsButton() {
        this.findAnElement(this.myFeedsButtonSelector)
            .click()
    }

    assertDuplicatedFeedValidationIsTriggered() {
        this.assertElementVisibility(this.duplicatedFeedValidationSelector)
    }
    openAnyFeed() {
        this.findAnElement(this.anyFeedSelector)
            .click()
    }

    clickHeartIcon() {
        this.findAnElement(this.heartIconSelector)
            .click()
    }

    assertHearIconIsStyled() {
        this.findAnElement(this.heartIconSelector).should('have.class', 'glyphicon glyphicon-heart')
    }

    clickLogoutCTA() {
        this.findAnElement(this.logoutCTASelector)
            .click()
    }

    assertLoginButtonVisibility() {
        this.assertElementVisibility(this.loginButtonSelector)
    }

    clickNextPageIcon() {
        this.findAnElement(this.nextPageIconSelector)
            .click()
    }

    assertUrlHasSecondPageParameter() {
        cy.url().should('include', this.nextPageURLTail)
    }

    openAnArticle() {
        this.findAnElement(this.anyArticleSelector)
            .click()
    }

    populateCommentInputWithItalicText() {
        this.findAnElement(this.commentInputSelector)
            .type(`*${randomComment}*`)
    }

    assertSuccessfulCommentMessage() {
        this.assertElementVisibility(this.successfulCommentPostMessageSelector)
    }

    assertPostedCommentPresence() {
        this.assertElementVisibility(this.postedCommentSelector)
    }
}

module.exports = { FeedsPage };