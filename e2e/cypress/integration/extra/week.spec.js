describe("Request demo", () => {
  it("Log first item in json", () => {
    cy.request("http://localhost:4300/api/0").then((response) => {
      let villains = JSON.parse(response.body);
      cy.log("First villain: " + villains[0].villain);
    });
    // cy commands yields, they don't return anything useful
    let v = cy.visit("https://vecka.nu");
    console.log(v);
  });
});
