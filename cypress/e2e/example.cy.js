describe('Visiting the MaPS Corporate site', () => {
    beforeEach(() => {
        baseUrl = Cypress.env('BASEURL')
        cy.setBreakPoint('mobile')
        cy.visit(`${baseUrl}/`)
        cy.get('a[data-button-type="accept-all"]').click()
    })
    it('Visits the MaPS site', () => {
        cy.elementHasAttribute('a.mobile-navigation-toggle', 'aria-expanded', 'false')
        cy.get('a.mobile-navigation-toggle').click()
        cy.elementHasAttribute('a.mobile-navigation-toggle', 'aria-expanded', 'true')
    })
})
