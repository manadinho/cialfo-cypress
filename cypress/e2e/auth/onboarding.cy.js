/// <reference types="cypress" />

const baseUrl = Cypress.env("URL")
const randomDigits = () => Math.floor(1000 + Math.random() * 9000)

describe('Sign up and onboarding', () => {

    beforeEach(() => {
        cy.viewport(1440, 900)
    })
    it('open gloabal sign in page', () => {
        cy.visit(baseUrl);
        cy.contains('Login with Phone Number');
    })

    it('Search for a tenant', () => {
        cy.get('.ant-select-selection-search-input').type('test');
        cy.contains('exaple test dev').click();
        cy.contains('Student Signup').should('exist')
    })

    it('Open Sign up form', () => {
        cy.contains('Student Signup').should('exist').click();
        cy.contains('Create Account').should("exist");
    })

    it('Fill the student sign up form with email address', () => {
        cy.get('[formcontrolname="firstName"]').type('Hamid');
        cy.get('[formcontrolname="lastName"]').type('Second Name');
        cy.get('label[nzvalue="M"]').click();
        cy.get('[formcontrolname="email"]').type(`hamid+cypress+${randomDigits()}a@exaple.com.sg`);
        cy.get('[formcontrolname="password"]').type('Pa$$W0rd@360');
        cy.get('[formcontrolname="confirmPassword"]').type('Pa$$W0rd@360');
        cy.contains('Create my account').parent().click();
        // cy.contains('You have been successfully registered').should('exist');
        cy.contains('Accept and Continue').click();
        cy.contains('Your account has been setup successfully').should('exist');
    })

    // it('Accept/ Reject the "Terms and Conditions"', () => {
    //     cy.contains('Accept and Continue').click();
    //     cy.contains('Your account has been setup successfully').should('exist');
    // })

    it('Start the Onboarding questionnaire', () => {
        cy.contains("Let's get started").click();
        cy.contains('Academic Profile').should('exist');
    })

    it('Complete the onboarding questionnaire', () => {
        cy.get('#question_20').find('.ant-select-selection-search').click();
        cy.get('[title="2007"]').click();
        cy.get('#question_21').find('.ant-select-selection-search').click();
        cy.get('[title="Cambridge IGCSE O Levels (A* to F)"]').click();
        cy.get('#question_22').find('.ant-select-selection-search-input').type('pakistan');
        cy.get('[title="Pakistan"]').click();
        cy.get('#question_22').find('.ant-select-selection-search').click();
        cy.contains('Next').click();
        cy.get('#question_6').get('.ant-select-selection-search-input').type('pakistan');
        cy.get('[title="Pakistan"]').click();
        cy.get('#question_6').find('.ant-select-selection-search').click();
        cy.get('#question_4').contains('I am not sure').click()
        cy.get('.ant-radio-group>label').eq(2).click()
        cy.contains('Next').click();
        cy.contains('Dashboard').should('exist')
    })

    it('Logout the user', () => {
        cy.get('.profile-pic-size').click();
        cy.contains('Log Out').click();
        cy.contains('Sign In').should('exist')
    })

    it('Fill the student sign up form with Phone number', () => {
        cy.visit(baseUrl);
        cy.get('.ant-select-selection-search-input').type('test');
        cy.contains('exaple test dev').click();
        cy.contains('Student Signup').should('be.visible').click();
        cy.get('[formcontrolname="firstName"]').type('Hamid');
        cy.get('[formcontrolname="lastName"]').type('Second Name');
        cy.get('label[nzvalue="M"]').click();
        cy.get('.dropdown-toggle').should('be.visible').click();
        cy.get('input[placeholder="Search Country"]').type('Pakistan').trigger('keypress');
        cy.get('#iti-0__item-pk').scrollIntoView();
        cy.get('#iti-0__item-pk').should('be.visible').click();
        cy.get('#phone').type('03004013331')
        cy.get('[formcontrolname="password"]').type('Pa$$W0rd@360');
        cy.get('[formcontrolname="confirmPassword"]').type('Pa$$W0rd@360');
        cy.contains('Create my account').parent().click();
        cy.contains(' Skip the verification process temporarily ').should('exist').click();
        cy.contains('Terms and Conditions').should('be.visible').click();
    })
})
