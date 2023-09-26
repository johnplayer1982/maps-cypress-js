describe('Visiting the MaPS Corporate site', () => {
    beforeEach(() => {
        // const baseUrl = Cypress.env('MAPS_BASEURL')
        const baseUrl = 'https://qa.maps.org.uk'
        cy.visit(`${baseUrl}/`)
        cy.get('a[data-button-type="accept-all"]').click()
    })
    it('MaPS Navigation', () => {
        cy.setBreakPoint('mobile')
        cy.elementHasAttribute('a.mobile-navigation-toggle', 'aria-expanded', 'false')
        cy.clickButtonByIndex('a.mobile-navigation-toggle', 0)
        cy.elementHasAttribute('a.mobile-navigation-toggle', 'aria-expanded', 'true')
        cy.elementShouldBeVisible('nav.cmp-main-menu')
        cy.get('nav.cmp-main-menu li.cmp-main-menu__menu-item-has-children').each(($el) => {
            cy.wrap($el).within(() => {
                cy.get('a').eq(0).click()
                cy.get('ul.cmp-main-menu__sub-menu').each(($el) => {
                    cy.wrap($el).within(() => {
                        cy.get('li').each(($el) => {
                            cy.wrap($el).within(() => {
                                cy.get('a').invoke('attr', 'href').then(href => {
                                    cy.request(href).its('status').should('eq', 200)
                                })
                            })
                        })
                    })
                })
            })
        })

        cy.clickButtonByIndex('a.mobile-navigation-toggle', 0)        
        cy.elementShouldNotBeVisible('nav.cmp-main-menu')
        cy.setBreakPoint('desktop')
        
    })
})
