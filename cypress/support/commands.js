// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import 'cypress-wait-until';

Cypress.Commands.add('login', (email, password) => {
    cy.session('auth', () => {
      
      // Fill out the login form and submit it
    cy.visit(
      "https://app.cialfo.sg/app/auth/signin?redirect_to=%252F&token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&host_subdomain=companion-test"
    );
    cy.get('[formcontrolname="email"]').type(email);
    cy.get('[formcontrolname="password"]').type(password);
    cy.get("app-button-primary").contains("Sign In").click();
    // Wait for the login to complete
    cy.wait(1000);
    })
  });

  Cypress.Commands.add('call', (description, callback) => {
    it(description, callback);
  });

Cypress.Commands.add('viewProfile', () => {
  cy.visit('https://companion-test.cialfo.sg/app/23114/home-new')
  cy.get("[title='Profile']").should('be.visible').click();
})
