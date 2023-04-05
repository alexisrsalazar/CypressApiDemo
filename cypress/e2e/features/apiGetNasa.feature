Feature: API Call GET in NASA API

    Scenario: I want get the Astronomy Picture of the Day
        Given I want to GET the Astronomy Picture of the Day
        When I call the API with '<date>' parameter
        Then I should receive 200 response code and response body '<title>'

        Examples:
            | date       | title                               |
            | 1996-07-12 | Ancient Cratered Plains on Ganymede |
            | 2021-06-18 | Devil Horns from a Ring of Fire     |