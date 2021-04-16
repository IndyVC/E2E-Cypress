describe("Basic commands", () => {
  it("visit", () => {
    cy.visit("http://localhost:4200");
    cy.visit("/");
    cy.visit("/visit");
  });

  it("get", () => {
    cy.visit("/get");
    cy.get("button");
    cy.get("button.save");
    cy.get("#save-button");
  });

  it("should", () => {
    cy.visit("/should");
    cy.get("#save-button").should("have.text", "Save");
    cy.get("#first-name").should("have.value", "Zaphod");
  });

  it("contains", () => {
    cy.visit("/contains");
    cy.contains("The header");
    cy.get("button").contains("Save");
  });

  it("as", () => {
    cy.visit("/as");
    cy.get("div span button").as("saveButton");
    cy.get("@saveButton");
  });
});
