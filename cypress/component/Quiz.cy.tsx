import { Quiz } from "../.././client/src/components/Quiz";
import React from 'react';
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  beforeEach(() => {
    mount(<Quiz />);
  });

  it("should display the start button", () => {
    cy.contains("Start Quiz").should("be.visible");
  });

  it("should start quiz when button is clicked", () => {
    cy.contains("Start Quiz").click();
    cy.get(".spinner-border").should("be.visible");
  });

  it("should display a question after loading", () => {
    cy.contains("Start Quiz").click();
    cy.wait(2000); // Simulate API call delay
    cy.get("h2").should("not.be.empty");
  });

  it("should cycle through questions and show score", () => {
    cy.contains("Start Quiz").click();
    cy.wait(2000);

    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").first().click();
    }

    cy.contains("Your score:").should("be.visible");
  });
});
