/// <reference types="cypress" />

describe('testing purpoe', () => {
    it('testing', () => {

        cy.visit(
            "https://app.example.sg/app/auth/signin?redirect_to=%252F&token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&host_subdomain=companion-test"
          );
          cy.get('[formcontrolname="email"]').type("hamid+cypress+1122a@example.com.sg");
          cy.get('[formcontrolname="password"]').type("manadinho");
          cy.get("app-button-primary").contains("Sign In").click();

    })

    // it('Start the Onboarding questionnaire', () => {
    //     cy.contains("Let's get started").click();
    //     cy.contains('Academic Profile').should('exist');
    // })

    it('Complete the onboarding questionnaire', () => {
        // cy.get('#question_20').find('.ant-select-selection-search').click();
        // cy.get('[title="2007"]').click();
        // cy.get('#question_21').find('.ant-select-selection-search').click();
        // cy.get('[title="Cambridge IGCSE O Levels (A* to F)"]').click();
        // cy.get('#question_22').find('.ant-select-selection-search-input').type('pakistan');
        // cy.get('[title="Pakistan"]').click();
        // cy.get('#question_22').find('.ant-select-selection-search').click();
        // cy.contains('Next').click();
        // cy.get('#question_6').get('.ant-select-selection-search-input').type('pakistan');
        // cy.get('[title="Pakistan"]').click();
        // cy.get('#question_6').find('.ant-select-selection-search').click();
        // cy.get('#question_4').contains('I am not sure').click()
        // cy.get('.ant-radio-group>label').eq(2).click()
        // cy.contains('Next').click();
        // cy.contains('Dashboard').should('exist')

        cy.get('.profile-pic-size').click();
        cy.contains('Log Out').click();
        cy.contains('Sign In').should('exist')
    })
})
