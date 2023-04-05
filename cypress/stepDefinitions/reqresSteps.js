/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
let baseUrl;
let apiUrl;
let request;


Given("I want use reqres API",() => {
    baseUrl = "https://reqres.in"
})

When("I want do a POST",() => {
    apiUrl = baseUrl + "/api/users"
    request = cy.request({
        method: "POST",
        url: apiUrl,
        body: {
            "name": "morpheus",
            "job": "leader"
        }
    })
})

When("I want do a PUT",() => {
    apiUrl = baseUrl + "/api/users/2"
    request = cy.request({
        method: "PUT",
        url: apiUrl,
        body: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })
})

When("I want do a DELETE",() => {
    apiUrl = baseUrl + "/api/users/2"
    request = cy.request({
        method: "DELETE",
        url: apiUrl
    })
})


Then("I should receive Status code <{int}>", (code) => {
    request.then((response) => {
        expect(response.status).to.eq(code)
    })
})
