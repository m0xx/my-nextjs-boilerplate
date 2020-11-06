describe('Home page', () => {
  it('Should be create user form', () => {
    cy.visit('/')

    cy.get('[data-testid=create-user-header]').should('contain', 'Create user');
  })
})
