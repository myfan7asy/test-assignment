const { FeedsPage } = require("../../pages/feeds-page");
const { Helper } = require("../../support/helper");
const { TestData } = require("../../support/test-data");

describe('Tests related to [All Feeds, My Feeds, Bookmarked]', () => {
    const helper = new Helper
    const feedsPage = new FeedsPage
    const testData = new TestData

    beforeEach(() => {
        const registeredAccount = helper.registerAccount()
        helper.loginToApp(registeredAccount)
    })

    it('Create a [New Feed] from [All Feeds] page', () => {
        const feedList = testData.feeds
        const uniqFeedURL = helper.selectUniqFeed(feedList)

        feedsPage.clickAllFeedsButton()
        feedsPage.clickNewFeedButton()
        feedsPage.populateFeedUrlInput(uniqFeedURL)
        feedsPage.clickSubmitCTA()
        feedsPage.assertFeedUrlValue(uniqFeedURL)
    })

    it('Create a [Duplicated Feed] from [My Feeds] page', () => {
        const feedList = testData.feeds
        const uniqFeedURL = helper.selectUniqFeed(feedList)

        feedsPage.clickAllFeedsButton()
        feedsPage.clickNewFeedButton()
        feedsPage.populateFeedUrlInput(uniqFeedURL)
        feedsPage.clickSubmitCTA()
        feedsPage.clickNewFeedButton()
        feedsPage.populateFeedUrlInput(uniqFeedURL)
        feedsPage.clickSubmitCTA()
        feedsPage.assertDuplicatedFeedValidationIsTriggered()
    })

    it('Open any [Existing Feed] from [All Feeds] page and Bookmark it', () => {
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.clickHeartIcon()
        feedsPage.assertHearIconIsStyled()
    })

    it('Proceed to [All Feeds] page and perform Logout', () => {
        feedsPage.clickAllFeedsButton()
        feedsPage.clickLogoutCTA()
        feedsPage.assertLoginButtonVisibility()
    })

    it('Open any of [Existing Feeds] and verify pagination', () => {
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.clickNextPageIcon()
        feedsPage.assertUrlHasSecondPageParameter()
    })

    it('Comment an article of any [Existing Feed]', () => {
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.openAnArticle()
        feedsPage.populateCommentInputWithItalicText()
        feedsPage.clickSubmitCTA()
        feedsPage.assertSuccessfulCommentMessage()
        feedsPage.assertPostedCommentPresence()
    })
})