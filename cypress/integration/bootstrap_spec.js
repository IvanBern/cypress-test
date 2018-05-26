/// <reference types="Cypress" />

describe('My First Bootstrap Test', function () {

    it('Load Bootstrap', function () {
        cy.visit('http://localhost:8000')
        cy.pause()
    })
})
