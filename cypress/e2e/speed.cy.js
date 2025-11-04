describe('Speed Test - Cypress', () => {
  it('Loads page and checks text', () => {
    const start = performance.now();

    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink');

    cy.then(() => {
      const end = performance.now();
      const ms = Math.round(end - start);
      cy.log(`Execution time: ${ms} ms`);

      cy.writeFile('../results/data.json', 
        `${JSON.stringify({ tool: "cypress", ms })}\n`,
        { flag: 'a+' }
      );
    });
  });
});
