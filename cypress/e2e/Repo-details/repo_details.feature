Feature: Repository Details

    User wishes to view the details of a repositories

    Scenario: User wants to see Repository detail
        Given the user is logged in
        And the user is on the Home Page
        When the user clicks on any repository from the list
        Then the user sees the details of that repository
