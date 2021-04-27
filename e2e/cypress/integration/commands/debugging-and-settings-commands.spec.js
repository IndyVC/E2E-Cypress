describe("Debugging and settings commands", () => {
  beforeEach(() => {
    cy.request("DELETE", "http://localhost:4300/api");
  });

  it("log", () => {
    cy.visit("/Commands/Debug/log");
    cy.waitForHighlight();
    cy.log("before wait", new Date().toLocaleTimeString());
    cy.wait(2000);
    cy.log("after wait", new Date().toLocaleTimeString());
  });

  it("pause", () => {
    cy.visit("/Commands/Debug/pause");
    cy.waitForHighlight();
    cy.pause();
    cy.log("before click");
    cy.get("#save-button").click();
  });

  it("config", () => {
    cy.visit("/Commands/Debug/config");
    cy.waitForHighlight();
    cy.log("baseUrl is", Cypress.config("baseUrl"));
    Cypress.config("waitForAnimations", false);
    cy.get("#save-button").click();
  });

  it("env", () => {
    cy.visit("/Commands/Debug/env");
    cy.waitForHighlight();
    cy.log("baseUrl is", Cypress.env("baseUrl"));
    Cypress.env("viewportWidth", 500);
    cy.get("#first-name").type(Cypress.env("USERNAME"));
  });

  it("debug", () => {
    cy.visit("/Commands/Debug/debug");
    cy.waitForHighlight();
    cy.get("#first-name").debug().type(Cypress.env("USERNAME"));
  });
});
