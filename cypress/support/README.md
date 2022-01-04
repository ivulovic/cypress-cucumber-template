# supports folder

Also known as `commands` folder in their docs, Stack Overflow, etc...

<br/>

We will use this folder to add all commands we need.

<br/>

For example, if we need something like `cy.customAction()` then we will create a file `customAction.js` and write inside something like:

```
Cypress.Commands.add('customAction', () => cy.log('hey'));
```

Then inside our tests we can use it like it's natively implemented into the Cypress framework.