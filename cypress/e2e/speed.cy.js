describe('Speed Test - Cypress', () => {
  it('Loads page and checks text', () => {
    const start = performance.now();
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink');
    cy.then(() => {
      const end = performance.now();
      cy.log(`Execution time: ${Math.round(end - start)} ms`);
    });
  });
});
