const { $, _ } = Cypress

describe('default behavior', () => {
  beforeEach(() => {
    cy.visit('/defaults')
  })

  it('swaps to left or right', () => {
    // Start state with only article 1
    cy.get('article').should('have.length', 1)
    cy.get('article').should('have.text', '1')

    // Go left
    cy.get('button:first-child').click()

    // There should be two articles while animating
    cy.get('article').should('have.length', 2)
    cy.clock().tick(500);

    // There should be only article 0
    cy.get('article').should('have.length', 1)
    cy.get('article').should('have.text', '0')

    // Go right
    cy.get('button:last-child').click()

    // There should be two articles while animating
    cy.get('article').should('have.length', 2)
    cy.clock().tick(500);

    // There should be only article 1 again
    cy.get('article').should('have.length', 1)
    cy.get('article').should('have.text', '1')
  })
})
