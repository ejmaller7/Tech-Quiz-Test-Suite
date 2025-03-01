describe("Tech Quiz End-to-End Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should load the quiz page", () => {
      cy.contains("Start Quiz").should("be.visible");
    });
  
    it("should start the quiz and complete it", () => {
      cy.contains("Start Quiz").click();
      cy.wait(2000); // Simulating API delay
  
      for (let i = 0; i < 10; i++) {
        cy.get(".btn-primary").first().click();
      }
  
      cy.contains("Your score:").should("be.visible");
    });
  
    it("should allow restarting the quiz", () => {
      cy.contains("Start Quiz").click();
  
      for (let i = 0; i < 10; i++) {
        cy.get(".btn-primary").first().click();
      }
  
      cy.contains("Take New Quiz").click();
      cy.contains("Start Quiz").should("be.visible");
    });
  });
  