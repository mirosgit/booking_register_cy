import { registrationPageLocators } from '../locators/registrationPageLocators.js';
import { validationMessages } from '../config/errorMessages.js';

class RegistrationPage {

    clickRegister() {
      registrationPageLocators.elements.registrationButton().click();
    }

    enterEmail(email) {
      registrationPageLocators.elements.emailField().type(email);
    }

    enterNewPassword(newPassword) {
      registrationPageLocators.elements.newPassField().type(newPassword);
    }

    clearNewPassword() {
      registrationPageLocators.elements.newPassField().clear();
    } 

    enterPasswords(newPassword, confirmPassword) {
      registrationPageLocators.elements.newPassField().type(newPassword);
      registrationPageLocators.elements.confirmPassField().type(confirmPassword);
    }    

    clickContinueEmail() {
      registrationPageLocators.elements.continueEmailButton().click();
    }

    clickContinuePass() {
      registrationPageLocators.elements.continuePassButton().click();
    }

    enterRandomEmailAndProceed() {
      const randomEmail = `test${Date.now()}@example.com`;
      this.enterEmail(randomEmail);
      this.clickContinueEmail();
      cy.waitUntil(() => registrationPageLocators.elements.newPassField().should('be.visible'));
      return randomEmail;
    }

    checkValidationNewPassErrorVisible() {
      registrationPageLocators.elements.errorNewPassNote().should('be.visible');
    }

    checkValidationConfirmPassErrorVisible() {
      registrationPageLocators.elements.errorConfirmPassNote().should('be.visible');
    }

    checkTextConfirmPassNote(expectedText = validationMessages.PASSWORD_NOT_MATCHED) {
      registrationPageLocators.elements.errorConfirmPassNote()
        .should('be.visible')
        .and('have.text', expectedText);
    }

    checkTextNewPassNote(expectedText) {
      registrationPageLocators.elements.errorNewPassNote()
        .should('be.visible')
        .and('have.text', expectedText);
    }

    checkValidationEmailErrorVisible() {
      registrationPageLocators.elements.errorEmailNote().should('be.visible');
    }

    verifyCurrentUrl(expectedUrl) {
        cy.url().then((currentUrl) => {
          const [urlWithoutParams] = currentUrl.split('?');
          expect(urlWithoutParams).to.equal(expectedUrl);
        });
    }
}

export const registrationPage = new RegistrationPage();