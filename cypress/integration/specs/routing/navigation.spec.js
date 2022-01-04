// import { handleUserLogin } from '../../../utils';
import { html, routes } from '../../../fixtures';

context('Routing', () => {
  // beforeEach(handleUserLogin);
  describe('Navigation Routing', () => {
    it('should visit each link in the header navigation', () => {
      cy.visit(routes.Settings);
      cy.get(html.navLinks).each((link) => {
        cy.checkRouterLinkState(link);
      });
    });
  });
});
