describe("HTTP request commands", () => {
  beforeEach(() => {
    cy.request("DELETE", "http://localhost:4300/api");
  });

  it("request", () => {
    cy.visit("/Commands/Http/request");
    cy.waitForHighlight();
    cy.request("http://localhost:4300/api/0");
    cy.request("DELETE", "http://localhost:4300/api");
  });

  it("then", () => {
    cy.visit("/Commands/Http/then");
    cy.waitForHighlight();
    cy.request("POST", "http://localhost:4300/api/0", {
      movie: "Under the kilt",
      villain: "Dr. MacDoo",
      actor: "Jonny Jakobssen",
      year: 2001,
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      cy.get("#res-body").type(res.body);
    });
  });

  it("fixture", () => {
    cy.visit("/Commands/Http/fixture");
    cy.waitForHighlight();
    cy.fixture("new-villain.json").then((data) => {
      cy.request("POST", "http://localhost:4300/api/0", data);
    });
    cy.fixture("new-villain.json").as('new-villain');
    cy.get('@new-villain').then((data) => {
      cy.request("POST", "http://localhost:4300/api/0", data)
    });
  });

  it("intercept", () => {
    cy.visit("/Commands/Http/intercept");
    cy.waitForHighlight();
    cy.intercept("http://localhost:4300/api/*", []);
    cy.get("#load-villains").click();
    cy.get("#villains-count").should("have.value", "0");
  });

  it("wait", () => {
    cy.visit("/Commands/Http/wait");
    cy.waitForHighlight();
    cy.intercept("http://localhost:4300/api/*").as("get-villains");
    cy.get("#load-villains").click();
    cy.wait("@get-villains");
    cy.get("#villains-count").should("have.value", "34");
  });
});
