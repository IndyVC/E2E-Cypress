describe('Add villain', () => {
  beforeEach(() => {
    cy.request("DELETE", "http://localhost:4300/api");
  });

  it('Cannot add invalid villain', () => {
    cy.visit('/Villains');
    cy.get('#add-villain').click();
    cy.get('#dialog-add-villain').should('be.disabled');
  });






  /**
   * This test will fail since there is a bug in the app when clicking outside the dialog.
   * - Change it to click on the cancel button instead
   * (- Alert the developers to disable clicking outside the dialog)
   */
  it('Clicking outside the add dialog does not add villain', () => {
    cy.visit('/Villains');
    cy.get('#add-villain').click();
    cy.get('#villain-name').type('Dr. Evil');
    cy.get('#villain-movie').type('Austin Powers: International man of mystery');
    cy.get('#villain-actor').type('Mike Myers');
    cy.get('#villain-year').type(1997);

    cy.get('body').click('topLeft');

    cy.get('button').contains('Reload from API').click();
    cy.get('#filter').type('Austin');
    cy.get('app-villain-list table tr').should('have.length', 1);
  });






  /**
   * This test will fail since the API does not accept any movies containing 'Austin Powers'.
   * Change 'Powers' to anything else to make it pass
   */
  it('Can add one valid villain', () => {
    cy.visit('/Villains');
    cy.get('#add-villain').click();
    cy.get('#villain-name').type('Dr. Evil');

    cy.get('#villain-movie').type('Austin Powers: International man of mystery');

    cy.get('#villain-actor').type('Mike Myers');
    cy.get('#villain-year').type(1997);
    cy.get('#dialog-add-villain').click();
    cy.get('#filter').type('Austin');
    cy.get('app-villain-list table tr').should('have.length', 2);
    cy.get('app-villain-list table tr').eq(1).contains('Mike Myers');
  });
});
