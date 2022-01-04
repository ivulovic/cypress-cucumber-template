import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { html, routes } from '../../../../fixtures';

Given('he visits the home page', () => {
  cy.visit(routes.Login);
});

When('user is unauthenticated', () => {
  cy.clearCookies();
});

Then('he should see the empty username field', function () {
  cy.get(html.usernameInput).should('not.have.value');
});

And('empty password field', function () {
  cy.get(html.passwordInput).should('not.have.value');
});
