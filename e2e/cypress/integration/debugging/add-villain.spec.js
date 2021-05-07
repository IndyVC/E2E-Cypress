describe('Add villain', () => {
  it('Cannot add invalid villain', () => {
    cy.visit('/Villains');
    cy.get('#add-villain').click();
    cy.get('#dialog-add-villain').should('be.disabled');
  });

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

  it('Can add two valid villains', () => {
    cy.visit('/Villains');
    cy.get('#add-villain').click();
    cy.get('#villain-name').type('Green Goblin');
    cy.get('#villain-movie').type('Spider-Man');
    cy.get('#villain-actor').type('Willem Dafoe');
    cy.get('#villain-year').type(2002);
    cy.get('#dialog-add-villain').click();

    cy.get('#add-villain').click();
    cy.get('#villain-name').type('Dr. Evil');
    cy.get('#villain-movie').type('Austin Powers: International man of mystery');
    cy.get('#villain-actor').type('Mike Myers');
    cy.get('#villain-year').type(1997);
    cy.get('#dialog-add-villain').click();

    cy.get('#filter').type('Green Goblin');
    cy.get('app-villain-list table tr').should('have.length', 2);
    cy.get('app-villain-list table tr').eq(1).contains('Willem Dafoe');
  });
});
