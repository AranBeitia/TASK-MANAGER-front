describe('SwitchButton', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('initially sets the switch to inactive', () => {
    cy.get('input[type="checkbox"]').should('not.be.checked')
  })

  it('toggles the switch when clicked', () => {
    cy.get('input[type="checkbox"]').click({ force: true })
    cy.get('input[type="checkbox"]').should('be.checked')
    cy.get('input[type="checkbox"]').click({ force: true })
    cy.get('input[type="checkbox"]').should('not.be.checked')
  })
})
