Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.adicionaOpcaoSelectContas('conta-origem', contaOrigem);
        cy.adicionaOpcaoSelectContas('conta-destino', contaDestino);
        cy.get('#valor').click().type(valor)
        cy.contains('button', 'Transferir').click()
});