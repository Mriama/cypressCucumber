const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When('I click on "start learning"',function () {
  cy.get(this.data.learningButton).click()
})

Then('I should have access to the courses', function() {
  cy.redirection(this.data.PageCours)
  // cy.get(this.data.coursZero).should('exist')
  // cy.get(this.data.coursUn).should('exist')
  // cy.get(this.data.coursDeux).should('exist')
  // cy.get(this.data.coursTrois).should('exist')
  // cy.get(this.data.coursTrois).should('exist')

  // Boucle pour vérifier la présence des éléments
  for (let i = 0; i < 4; i++) {
    cy.get(this.data[`cours_${i}`]).should('exist');
}
})


