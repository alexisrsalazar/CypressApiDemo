/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const apiKey = require("../fixtures/apiKey.json")
let apiUrl;
let baseUrl;
let request;

Given("I am in Nasa API", () => {
    baseUrl = "https://api.nasa.gov/"
})

When("I call the API with {string} parameter", (date) => {
    apiUrl = baseUrl + "planetary/apod" + "?date=" + date + '&api_key=' + apiKey.api_Key
    request = cy.request({
        method: 'GET',
        url: apiUrl
    })
})

When("I want to GET InSight: Mars Weather Service API", () => {
    apiUrl = baseUrl + "insight_weather/?api_key=" + apiKey.api_Key + "&feedtype=json&ver=1.0"
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

Then("I should receive 200 response code and sol hours required", () => {
    request.then((res)=> {
        expect(res.status).to.eq(200)
        expect(res.body.validity_checks.sol_hours_required).to.eq(18)
    })
})


