/// <reference types="Cypress" />

describe('My First API est', function () {

    it('API GET Request', function () {
        cy.request('https://postman-echo.com/get?test=123')
          .should(function (response) {
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                expect(response.body).to.have.property('url')
                expect(response.body.args).to.have.property('test', '123')
            })
        })
  })
