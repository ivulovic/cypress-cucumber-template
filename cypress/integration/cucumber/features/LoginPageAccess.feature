@login-test
Feature: Login Page Access

    Unauthenticated users should have access to a login page with the login form.

    Scenario: Unauthenticated users visits home page
        Given he visits the home page
        When user is unauthenticated
        Then he should see the empty username field
        And empty password field
