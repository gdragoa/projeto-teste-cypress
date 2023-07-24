describe('Empty Cart', () => {
    it('should have the "Continuar" button disabled when the cart is empty', () => {
        
        const baseUrl = Cypress.env('base_url')

        cy.visit(baseUrl);

        cy.emptyCart();

    })


})