class page {

    clickExampleButton() {
        cy.xpath('//span[contains(.,\'example\')]').click();
    }
}

module.exports = new page();
