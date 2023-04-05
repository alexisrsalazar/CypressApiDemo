/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const apiKey = require("../fixtures/apiKey.json")
let apiUrl;
let baseUrl;
let request;

Given("I want to GET the Astronomy Picture of the Day", () => {
    baseUrl = "https://api.nasa.gov/planetary/apod"
})

When("I call the API with {string} parameter", (date) => {
    apiUrl = baseUrl + "?date=" + date + '&api_key=' + apiKey.api_Key
    request = cy.request({
        method: 'GET',
        url: apiUrl
    })
})

Then("I should receive 200 response code and response body {string}", (title) => {
    request.then((res)=> {
        expect(res.status).to.eq(200)
        expect(res.body.title).to.eq(title)
    })
})