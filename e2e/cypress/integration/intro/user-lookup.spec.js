describe("User lookup", () => {
  it("can lookup full name of user", () => {
    cy.visit("/user-lookup");

    cy.get("#username").type("neal");
    cy.get("button").contains("Lookup").click();

    cy.get("div.display-name")
      .should("have.text", "Full name: Neal Armstrong")
      .and("have.css", "font-weight", "700");
  });
});
