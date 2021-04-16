describe("Async demo", () => {
  it("Lightning fast page load - Out of order", () => {
    cy.log("Before page visit", new Date().toISOString());
    cy.visit("https://www.wikipedia.org/").then(() =>
      cy.log("REAL page load", new Date().toISOString())
    );
    cy.log("After page visit", new Date().toISOString());
  });

  it("Using chaining - In order", () => {
    cy.log("Before page visit", new Date().toISOString());
    cy.visit("https://www.wikipedia.org/").then(() =>
      cy.log("REAL page load", new Date().toISOString())
    );
    cy.log("After page visit", new Date().toISOString());
  });

  it("Mixing Cypress and regular js - Out of order", () => {
    let t1 = new Date();
    cy.wait(500);
    let t2 = new Date();
    cy.log((t2 - t1) + " ms");
  });

  it("Using chaining - In order", () => {
    let t1 = new Date();
    cy.wait(500).then(() => {
      let t2 = new Date();
      cy.log((t2 - t1) + " ms");
    });
  });

  it("Using wrap - In order", () => {
    let t1 = new Date();
    cy.wait(500);
    cy.wrap({}).then(() => {
      let t2 = new Date();
      cy.log((t2 - t1) + " ms");
    });
  });
});
