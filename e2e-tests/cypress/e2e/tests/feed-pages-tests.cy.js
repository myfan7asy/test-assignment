const { FeedsPage } = require("../../pages/feeds-page");
const { Helper } = require("../../support/helper");
const { TestData } = require("../../support/test-data");

describe('Tests related to [All Feeds, My Feeds, Bookmarked]', () => {
    const helper = new Helper
    const feedsPage = new FeedsPage
    const testData = new TestData
    
    it('Create a [New Feed] from [All Feeds] page', () => {
        const feedList = testData.feeds
        const uniqFeedURL = helper.selectUniqFeed(feedList)
    
        helper.loginToApp()
        feedsPage.clickAllFeedsButton()
        feedsPage.clickNewFeedButton()
        feedsPage.populateFeedUrlInput(uniqFeedURL)
        feedsPage.clickSubmitCTA()
        feedsPage.assertFeedUrlValue(uniqFeedURL)
      })

    it('Create a [Duplicated Feed] from [My Feeds] page', () => {
        helper.loginToApp()
        feedsPage.clickMyFeedsButton()
        feedsPage.clickNewFeedButton()
        feedsPage.populateFeedUrlInput("http://www.nu.nl/rss/Algemeen")
        feedsPage.clickSubmitCTA()
        feedsPage.assertDuplicatedFeedValidationIsTriggered()
    })

    it('Open any [Existing Feed] from [All Feeds] page and Bookmark it', () => {
        helper.loginToApp()
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.clickHeartIcon()
        feedsPage.assertHearIconIsStyled()
    })

    it.skip('Open any [Bookmarked Feed] and remove it from Bookmarks', () => {
        helper.loginToApp()
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.clickHeartIcon()
        feedsPage.clickHeartIcon()
        feedsPage.assertHearIconIsNotStyled()
        feedsPage.clickBookmarkedButton()
        feedsPage.assertFeedUrlIsAbsent()
    })

    it('Proceed to [All Feeds] page and perform Logout', () => {
        helper.loginToApp()
        feedsPage.clickAllFeedsButton()
        feedsPage.clickLogoutCTA()
        feedsPage.assertLoginButtonVisibility()
    })

    it('Open any of [Existing Feeds] and verify pagination', () => {
        helper.loginToApp()
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.clickNextPageIcon()
        feedsPage.assertUrlHasSecondPageParameter()
    })

    it('Comment an article of any [Existing Feed]', () => {
        helper.loginToApp()
        feedsPage.clickAllFeedsButton()
        feedsPage.openAnyFeed()
        feedsPage.openAnArticle()
        feedsPage.populateCommentInputWithItalicText()
        feedsPage.clickSubmitCTA()
        feedsPage.assertSuccessfulCommentMessage()
        feedsPage.assertPostedCommentPresence()
    })
  })