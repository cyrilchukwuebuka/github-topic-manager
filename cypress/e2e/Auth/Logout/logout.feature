Feature: Logout User

    User wishes to log out of the application

    Scenario: User logs out
        Given the user is logged in
        When the user clicks on the logout link on the navbar
        Then the user logs out of the application
