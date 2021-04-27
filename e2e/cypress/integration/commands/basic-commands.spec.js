describe("Basic commands", () => {
  it("visit", () => {
    cy.visit(Cypress.config("baseUrl") + "/Commands/Basic/visit");
    cy.visit("/");
    cy.visit("/Commands/Basic/visit");
    cy.waitForHighlight();
  });

  it("get", () => {
    cy.visit("/Commands/Basic/get");
    cy.waitForHighlight();
    cy.get("button");
    cy.get("button.save-button");
    cy.get("#save-button");
    cy.get("#snail-button");
  });

  it("should", () => {
    cy.visit("/Commands/Basic/should");
    cy.waitForHighlight();
    cy.get("#save-button").should("have.text", "Save");
    cy.get("#first-name").should("have.value", "Zaphod");
  });

  it("contains", () => {
    cy.visit("/Commands/Basic/contains");
    cy.waitForHighlight();
    cy.contains("Basic commands");
    cy.get("button").contains("Save");
  });

  it("as", () => {
    cy.visit("/Commands/Basic/as");
    cy.waitForHighlight();
    cy.get("app-basic-commands button.save-button").as("saveButton");
    cy.get("@saveButton");
  });
});
