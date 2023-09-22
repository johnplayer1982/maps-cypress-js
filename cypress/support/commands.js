// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Forces a click when an element is overlapped by another element
// e.g when we have an invisible accessible label over a radio button/checkbox
Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
    cy.wrap(subject).click({force: true})
});

// Accept cookies
Cypress.Commands.add('acceptCookies', () => { 
    cy.get('div.t-cookie-consent-modal').within(() => {
        cy.get('button[type="submit"]').eq(2).click()
    })
});

// Breakpoints
// cy.setBreakPoint('mobile')
// cy.setBreakPoint('tablet')
// cy.setBreakPoint('desktop')
Cypress.Commands.add('setBreakPoint', (viewport) => {
    if (viewport == 'desktop') {
        cy.viewport(1534, 900)
    } else if (viewport == 'tablet') {
        cy.viewport(1180, 820)
    } else if (viewport == 'mobile') {
        cy.viewport(639, 1080)
    }
});

// SDLT, LTT & LBTT shared functions
Cypress.Commands.add('sdc_fillInStampDutyCalculator', (buyerType, price) => { 
    cy.get("#buyerType").select(buyerType);
    cy.get("#price").type(price);
    cy.get('button.tool-nav-submit').click();
});

// Strip script tags - experimental
Cypress.Commands.add('disableJS', () => { 
    cy.get('script').invoke('remove');
});

// Select an option by its name attribute
Cypress.Commands.add('selectOptionByValue', (name) => { 
    cy.get(`input[value=${name}]`).click({force: true})
});

// Confirm element is hidden to a screen reader
Cypress.Commands.add('hiddenToScreenReader', (element) => { 
    cy.get(element).should('have.attr', 'aria-hidden', 'true')
});

// Verify URL is as expected
Cypress.Commands.add('verifyURL', (expected_url) => { 
    cy.location().should(loc => {
        expect(loc.pathname).to.equal(expected_url)
    })
});

// Visit link href
Cypress.Commands.add('visitLink', (element) => { 
    cy.get(element).should('have.attr', 'href').then((href) => {
        cy.visit(href)
    })
});

// Element should contain text
Cypress.Commands.add('elementContainsText', (element, text) => { 
    cy.get(element).should('contain.text', text)
});

// Check if an element has an attribute
Cypress.Commands.add('elementHasAttribute', (selector, attribute) => { 
    cy.get(selector).should('have.attr', attribute)
});
Cypress.Commands.add('elementHasAttributeValue', (selector, attribute, value) => { 
    cy.get(selector).should('have.attr', attribute, value)
});

// Check element existence/non-existence/visibility
Cypress.Commands.add('elementShouldExist', (selector) => { 
    cy.get(selector).should('exist')
});
Cypress.Commands.add('elementShouldNotExist', (selector) => { 
    cy.get(selector).should('not.exist')
});
Cypress.Commands.add('elementShouldBeVisible', (selector) => { 
    cy.get(selector).should('be.visible')
});
Cypress.Commands.add('elementShouldNotBeVisible', (selector) => { 
    cy.get(selector).should('not.be.visible')
});

// Check value of element
Cypress.Commands.add('elementValue', (selector, expected_value) => { 
    cy.get(selector).invoke('val').should('equal', expected_value)
});
