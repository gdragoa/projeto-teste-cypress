describe('Register Empty Fields', () => {
    it('should have the "Finalizar" button disabled when user leaves fields empty', () => {

        const baseUrl = Cypress.env('base_url')

        cy.visit(baseUrl);

        cy.addToCart();

        cy.auth();

        cy.registerEmptyFields();

    })


})