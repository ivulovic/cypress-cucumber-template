Cypress.Commands.add('checkRouterLinkState', (link) => {
  cy.wrap(link).click();
  const linkHref = link.attr('href');
  cy.get(`a[href="${linkHref}"]`).should('have.class', 'active');
  cy.url().should('include', linkHref);
});
