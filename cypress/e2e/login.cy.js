describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
  });

  it('Login com dados válidos deve permitir acesso ao sistema', () => {

    // Act
    cy.loginCredenciaisValidas();

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  });

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {

    // Act
    cy.loginCredenciaisInvalidas();

    // Assert
    cy.verificarMsgToast('Erro no login. Tente novamente.')
  });
});








