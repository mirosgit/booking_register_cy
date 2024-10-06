import { registrationPageLocators } from '../locators/registrationPageLocators.js';

class RegistrationPage {
  
    clickRegister() {
      registrationPageLocators.elements.registrationButton().click();
    }
  
    enterEmail(email) {
      registrationPageLocators.elements.emailField().type(email);
    }
  
    clickContinueEmail() {
      registrationPageLocators.elements.continueEmailButton().click();
    }

    clickContinuePass() {
      registrationPageLocators.elements.continuePassButton().click();
    }
    
    enterRandomEmailAndProceed() {
      const randomEmail = `test${Date.now()}@example.com`;
      registrationPage.enterEmail(randomEmail);
      registrationPage.clickContinueEmail();
      cy.waitUntil(() => registrationPageLocators.elements.newPassField().should('be.visible'));
      return randomEmail;
    }

    checkValidationNewPassErrorVisible() {
      registrationPageLocators.elements.errorNewPassNote().should('be.visible');
    }
    checkValidationEmailErrorVisible() {
      registrationPageLocators.elements.errorEmailNote().should('be.visible');
    }
    verifyCurrentUrl(expectedUrl) {
        cy.url().then((currentUrl) => {
        const parsedUrl = new URL(currentUrl);
        const urlWithoutParams = `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`;
        expect(urlWithoutParams).to.equal(expectedUrl);
        });
    }
  }
  
  export const registrationPage = new RegistrationPage();