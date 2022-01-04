import { routes, users } from '../fixtures';

export function handleUserLogin() {
  cy.visit(routes.Login).loginUser(users.user.username, users.user.password);
}
