class Base {
    logoSelector = "//a[@class='navbar-brand']"

    openUrl(url) {
        cy.visit(url)
    }

    findAnElement(xpath) {
        return cy.xpath(xpath)
    }

    assertPageTitle(titleName) {
        cy.title().should('eq', titleName)
    }

    assertPageUrl(url){
        cy.url().should('eq', url)
    }

    assertElementVisibility(xpath) {
        cy.xpath(xpath).should('be.visible')
    }

    clickLogo() {
        cy.xpath(this.logoSelector).click()
    }
}

module.exports = { Base };