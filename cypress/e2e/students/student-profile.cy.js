/// <reference types="cypress" />

describe('Student Profile', () => {
    it('Update Personal Information', () => {
        cy.viewport(1440, 900)
        cy.visit(
            "https://app.cialfo.sg/app/auth/signin?redirect_to=%252F&token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&host_subdomain=companion-test"
          );
        cy.get('[formcontrolname="email"]').type("hamid+cypress+1122a@cialfo.com.sg");
        cy.get('[formcontrolname="password"]').type("manadinho");
        cy.get("app-button-primary").contains("Sign In").click();
        cy.waitUntil(() => cy.get("[title='Profile']").should('be.visible'))
        cy.get("[title='Profile']").should('be.visible').click();
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
})
