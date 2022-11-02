Feature: Login User

    User wishes to log into the application

    Scenario: User logs in from the Home Page
        Given the user is not yet logged in
        And the user is on the landing page
        When the user clicks on the Landing Component's login button
        Then the Landing Component disappears
        And the user sees a list of repositories


    Scenario: User logs in from Repository Detail Page
        Given the user logs out while on the repository details page
        When the user clicks on the navbar login link
        And the user reloads the current page
        Then the user sees the current repository details
    