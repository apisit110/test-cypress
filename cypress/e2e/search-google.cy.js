describe('search google', () => {
  it('cypress', () => {
    cy.visit('https://www.google.com/')
    cy.get('textarea[title="ค้นหา"]').type('cypress').type('{enter}')
  });
})