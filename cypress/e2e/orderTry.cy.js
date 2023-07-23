describe('order try', () => {
  it('passes', () => {

    const baseUrl = Cypress.env('base_url')

    const fullName = Cypress.env('user_full_name')
    const documentType = Cypress.env('user_document_type')
    const documentNumber = Cypress.env('user_document_number')
    const email = Cypress.env('user_email')


    cy.visit(baseUrl);

    cy.addToCart();

    cy.auth();

    cy.register(fullName, documentType, documentNumber, email);

    cy.registerVoucher();
  })


})