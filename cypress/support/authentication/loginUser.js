import { html } from '../../fixtures';

Cypress.Commands.add('loginUser', (email, password) => {
  cy.get(html.usernameInput)
    .type(email)

    .get(html.passwordInput)
    .type(password)

    .get(html.loginButton)
    .click();
});
