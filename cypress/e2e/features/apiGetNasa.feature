Feature: API Call GET in NASA API

    Scenario: I want get the Astronomy Picture of the Day
        Given I am in Nasa API
        When I want to get the APOD and I call the API with '<date>' parameter
        Then I should receive 200 response code and response body '<title>'

        Examples:
            | date       | title                               |
            | 1996-07-12 | Ancient Cratered Plains on Ganymede |
            | 2021-06-18 | Devil Horns from a Ring of Fire     |

    Scenario: I want to get Mars Weather Service API
        Given I am in Nasa API
        When I want to GET InSight: Mars Weather Service API
        Then I should receive 200 response code and sol hours required