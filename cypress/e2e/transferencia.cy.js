describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.loginCredenciaisValidas();
    })

    it('Deve permitir realizar uma transferência com dados válidos', () => {
        cy.realizarTransferencia('Agatha', 'Cássio', '11.00')
        cy.verificarMsgToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir valor acima de 5 mil sem o token', () => {
        cy.realizarTransferencia('Agatha', 'Cássio', '6000')
        cy.verificarMsgToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
});