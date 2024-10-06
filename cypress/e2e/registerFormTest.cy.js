import { basePage } from '../support/pages/BasePage.js';
import { registrationPage } from '../support/pages/RegistrationPage.js';

describe('Registration Tests', () => {
  beforeEach(() => {
    cy.allure().step('Navigating to the base page and opening registration form');
    basePage.visit();
    registrationPage.clickRegister();
  });

  it('TEST CASE ID 2: Should redirect to the registration form when "Sign Up" button is clicked', () => {
    cy.allure().step('Verifying the redirection to the registration form');
    registrationPage.verifyCurrentUrl('https://account.booking.com/sign-in');
  });

  it('TEST CASE ID 3: Checking the transition to the next stage of registration after entering the correct email', () => {
    cy.allure().step('Entering random email and proceeding');
    registrationPage.enterRandomEmailAndProceed();
    registrationPage.verifyCurrentUrl('https://account.booking.com/register/password');
  });

  it('TEST CASE ID 10: Validate registration when required password fields are empty', () => {
    cy.allure().step('Entering email and proceeding without entering a password');
    registrationPage.enterRandomEmailAndProceed();
    registrationPage.clickContinuePass();

    registrationPage.checkValidationNewPassErrorVisible();
  });

  it('TEST CASE ID 11: Validation of system registration when the required email field is empty', () => {
    cy.allure().step('Proceeding without entering email');
    registrationPage.clickContinueEmail();
    registrationPage.checkValidationEmailErrorVisible();
  });
});
