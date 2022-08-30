


// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//     cy.contains('type')
//   })
// })

describe('My First Test', () => {
  it('Visits my own app', () => {
    cy.visit('http://127.0.0.1:5501/tutorials/cypress-simple/index.html')
    cy.contains('ASC').click();// зростання тест працює
    //cy.contains('des').click();// спадання тест не працює
    cy.get('.item').then(($item) => {
      const text = Cypress._.map($item, (i) => i.innerText)
      cy.log(text.slice(0, 5).join(', '))
      const sorted = Cypress._.sortBy(text)
      expect(sorted).to.deep.equal(text)
    })
  })
})