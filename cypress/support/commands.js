
Cypress.Commands.add('addToCart', () => {
    cy.get('button path[d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]').click();
    cy.get('.MuiInputBase-input').should('have.value', '1');
    cy.contains('button', 'continuar').click();

})


Cypress.Commands.add('emptyCart', () => {
    cy.get('.MuiInputBase-input').should('have.value', '0');
    cy.contains('button', 'continuar').should('be.disabled');

})

Cypress.Commands.add('auth', () => {
    cy.contains('a', 'Continuar Sem Conta').click();

})

Cypress.Commands.add('register', (
    fullName = Cypress.env('user_full_name'),
    documentType = Cypress.env('user_document_type'),
    documentNumber = Cypress.env('user_document_number'),
    email = Cypress.env('user_email'),
) => {
    cy.contains('div', 'Nome completo').type(fullName);
    cy.get('.MuiSelect-root').select(documentType)
    cy.contains('div', 'Número').type(documentNumber);
    cy.contains('div', 'E-mail').type(email);

    cy.contains('button', 'finalizar').click()

})

Cypress.Commands.add('registerEmptyFields', () => {
    cy.contains('div', 'Nome completo').within(() => {
        cy.get('input').should('be.empty');
    });

    cy.get('.MuiInputBase-root select').should('have.value', '');

    cy.contains('div', 'Número').within(() => {
        cy.get('input').should('be.empty');
    });

    cy.contains('div', 'E-mail').within(() => {
        cy.get('input').should('be.empty');
    });

    cy.contains('button', 'finalizar').should('be.disabled')

})

Cypress.Commands.add('registerVoucher', () => {
    cy.contains('p', 'Código da inscrição')
        .next()
        .invoke('text')
        .then((textoDoElemento) => {
            cy.contains('button', 'Salvar comprovante').click();
            cy.wait(400)
            cy.readFile(`cypress/downloads/comprovante-inscricao_${textoDoElemento}.pdf`).should('exist');
        });
});


