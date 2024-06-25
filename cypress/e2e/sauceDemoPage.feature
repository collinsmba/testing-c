Feature: Swag Labs
As a user i should be able to login successfully

    Scenario: A user should be able to login with username and password successfully
        Given I launch the app
        When I input username
        And I input password
        And I click on login in button
        Then I should view inventory list successfully
       # When I click on filter field
        And I click on name A to Z
        And I click on name Z to A
        And I click on price Low to high
        # When I click on add to cart button
        # And I click on shopping cart badge Icon
        # And I click on remove button
        # And I click on continue shopping button
        # And I click on Add to cart button
        # And I click on cart Icon
        # When I click on checkout button
        # And I input First and Last name
        # And I input my zipcode
        # And I click on continue button
        # And I click on Finish button
        # And I click on Hamburger button
        # Then I click on Logout button
        



        