import { basePage } from '../support/pages/BasePage.js';
import { registrationPage } from '../support/pages/RegistrationPage.js';
import { testData } from '../support/config/testData.js';
import { validationMessages } from '../support/config/errorMessages.js';

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

  it('TEST CASE ID 8: Checking for a password match in the Password and Password Confirmation fields', () => {
    cy.allure().step('Entering email and proceeding not match Password and Password Confirmation');
    registrationPage.enterRandomEmailAndProceed();
    registrationPage.enterPasswords(testData.NEW_PASSWORD_CASE_8, testData.CONFIRM_PASSWORD_CASE_8);
    registrationPage.clickContinuePass();
    registrationPage.checkValidationConfirmPassErrorVisible();
    registrationPage.checkTextConfirmPassNote();
    
  });

  it('TEST CASE ID 9: Checking the correctness of the top-level domain entry', () => {
    cy.allure().step('Validation of system registration when the input invalid data to email field');
    registrationPage.enterEmail(testData.INVALID_EMAIL);
    registrationPage.clickContinueEmail()
    registrationPage.checkValidationEmailErrorVisible();
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
  it('TEST CASE ID 12: Validation of the "Password" field during system registration', () => {
    cy.allure().step('Entering email and proceeding validation New Password Field');
    registrationPage.enterRandomEmailAndProceed();
  
    const testCases = [
      {
        password: testData.NEW_PASSWORD_CASE_12_1,
        expectedError: validationMessages.NEW_PASSWORD_ERROR_12_1,
      },
      {
        password: testData.NEW_PASSWORD_CASE_12_2,
        expectedError: validationMessages.NEW_PASSWORD_ERROR_12_2,
      },
      {
        password: testData.NEW_PASSWORD_CASE_12_3,
        expectedError: validationMessages.NEW_PASSWORD_ERROR_12_3,
      },
      {
        password: testData.NEW_PASSWORD_CASE_12_4,
        expectedError: validationMessages.NEW_PASSWORD_ERROR_12_4,
      },
    ];
  
    testCases.forEach(({ password, expectedError }) => {
      registrationPage.enterNewPassword(password);
      registrationPage.clickContinuePass();
      registrationPage.checkValidationNewPassErrorVisible();
      registrationPage.checkTextNewPassNote(expectedError);
      registrationPage.clearNewPassword();
    });
  });
  
});
