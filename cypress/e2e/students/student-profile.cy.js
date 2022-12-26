/// <reference types="cypress" />

describe('Student Profile', () => {

    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.login('hamid+cypress+1122a@example.com.sg', 'manadinho');

    })

    it('Open student profile', () => {
        cy.viewProfile();
        cy.url().should('contain', 'profile');
    })
    it('Update Personal Information', () => {
        cy.viewProfile();
        cy.contains('Personal Information').should('exist');
        cy.contains(' Update Personal Information ').should('exist').click();
        cy.get('input[type="file"]').attachFile('profile.png');
        cy.wait(1000)
        cy.contains('Confirm').should('be.visible').click();
        cy.get('[formcontrolname="first_name"]').type('Ali');
        cy.get('[formcontrolname="preferred_name"]').type('Ali Preferred');
        cy.get('[formcontrolname="middle_name"]').type('Middle');
        cy.get('[formcontrolname="last_name"]').type('Haider');
        cy.get('[formcontrolname="personal_email"]').clear().type('ali.haider@gmail.com');
        cy.get('input[type="tel"]').type('03004013334');
        cy.get('[formcontrolname="timezone_id"]').click();
        cy.contains("[+09:00] Asia / Tokyo").click();
        cy.get('[formcontrolname="dob"]').click();
        cy.contains('Today').click();
        cy.get('[nzvalue="F"').click();
        cy.get('[formcontrolname="country_id_of_birth"]').click();
        cy.get('.cdk-virtual-scroll-content-wrapper>.ant-select-item-option').eq(2).click();
        cy.get('[formcontrolname="ethnicity_ids"]').click();
        cy.get('.cdk-virtual-scroll-content-wrapper>.ant-select-item-option').eq(3).click();
        cy.get('[formcontrolname="ethnicity_ids"]').click();
        cy.contains(' Student is at least 16 years old ').parent().click();
        cy.get('[formcontrolname="total_score"]').type(3);
        cy.get('[formcontrolname="unweighted_gpa"]').type(3);
        cy.get('[formcontrolname="weighted_gpa"]').type(3);
        cy.get('[formcontrolname="school"]').type('ABC High School');
        cy.get('[formcontrolname="grade"]').click();
        cy.contains(' Grade 10 ').click();
        cy.contains('Save Information').click();
        cy.contains('successfully').should('exist')

    })

    it('Update Application Detail', () => {
        cy.viewProfile();
        cy.contains(' Update Application Details ').should('be.visible').click();
        cy.get('#applicationYear').click();
        cy.get('.ant-select-item-option-content').contains('2019').click();
        cy.get('#enrollmentYear').click();
        cy.get('.ant-select-item-option-content').contains('2019').click();
        cy.contains(' Add Academic Interest ').click();
        cy.get('li').contains(' Computer and Networking Engineering Technology ').click();
        cy.contains(' Add Group ').click();
        cy.get('li').contains(' Bash Group ').click();
        cy.get("[formcontrolname='isFinancialAidRequired']").find("input").check();
        cy.contains('Save Changes').click();
        cy.contains("Save Changes");
        cy.contains('successfully').should('exist');
    })
})
