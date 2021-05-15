describe("Element interaction commands", () => {
  it("click", () => {
    cy.visit("/Commands/Element/click");
    cy.waitForHighlight();
    cy.get("#save-button").click();
    cy.get("#material-select").click();
    cy.get("body").click();
  });

  it("type", () => {
    cy.visit("/Commands/Element/type");
    cy.waitForHighlight();
    cy.get("#first-name").clear().type("Arthur Dent");
    cy.get("#first-name").type(
      "{backspace}{backspace}{backspace}{backspace}{backspace}"
    );
    cy.get("#last-name").clear().type("Dent");
    cy.get("body").type("{ctrl}y");
  });

  it("check", () => {
    cy.visit("/Commands/Element/check");
    cy.waitForHighlight();
    cy.get("#clean-car").check();
    cy.get("#gold").check();
    cy.get("#good-service").click();
    cy.get("#green").click();
  });

  it("uncheck", () => {
    cy.visit("/Commands/Element/uncheck");
    cy.waitForHighlight();
    cy.get("#silent-driver").uncheck();
    cy.get("#great-food").click();
  });

  it("select", () => {
    cy.visit("/Commands/Element/select");
    cy.waitForHighlight();
    cy.get("#native-select").select("Tesla");
    cy.get("#material-select").click();
    cy.get("mat-option").contains("Pizza").click();
  });
});
