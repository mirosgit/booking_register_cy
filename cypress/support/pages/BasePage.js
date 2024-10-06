class BasePage {
  
    visit() {
      cy.visit('https://www.booking.com/');
    }
}
export const basePage = new BasePage();