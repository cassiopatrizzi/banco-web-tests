describe('Login', () => {
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    // Arrange
    cy.visit('http://localhost:4000')

    // Act
    cy.get('#username').click().type('odila.vasquez')
    cy.get('#senha').click().type('079563')
    cy.get('#login-section > .btn').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
});
