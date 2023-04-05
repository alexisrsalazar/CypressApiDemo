Feature: 1 POST, 1 PUT and 1 DELETE

    Scenario: Validate a POST request code
    Given I want use reqres API
    When I want do a POST
    Then I should receive Status code <201>

    Scenario: Validate a PUT
    Given I want use reqres API
    When I want do a PUT
    Then I should receive Status code <200>

    Scenario: Validate a DELETE
    Given I want use reqres API
    When I want do a DELETE
    Then I should receive Status code <204>