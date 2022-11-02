Feature: Application Information

    User wishes to know more about the application

    Scenario: User logs out
        Given the user is on the application
        When the user clicks on How-it-Works link on the navbar
        Then the user sees How-it-works information
