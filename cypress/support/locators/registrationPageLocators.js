class RegistrationPageLocators {
    elements = {
      registrationButton: () => cy.get('header > div > nav[class="Header_bar"] > div > a[data-testid="header-sign-up-button"]'),
      emailField: () => cy.get('input[name="username"]'),
      newPassField: () => cy.get('input[name="new_password"]'),
      continueEmailButton: () => cy.get('button[type="submit"]'),
      continuePassButton: () => cy.get('button[type="submit"]'),
      errorNewPassNote: () => cy.get('div[id="new_password-note"]'),
      errorEmailNote: () => cy.get('div[id="username-note"]'),
    };
}
    export const registrationPageLocators = new RegistrationPageLocators();