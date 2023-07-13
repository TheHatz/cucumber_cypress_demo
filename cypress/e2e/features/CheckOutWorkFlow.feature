Feature: As a shopper, I want to add an item to the cart, and complete the checkout process, so that I can receive awesome products

  Scenario: Add an item to the shopping cart, complete checkout process, verify checkout process completed successfully
   
    Given I navigate to the home page
    Given I am signed in as the standard user  
    When  I submit the login request

    # When  I view the inventory page
    # When  I choose to add item "Sauce Labs Fleece Jacket" to the cart
    # Then  I verify that the header indicates that there are "1" items in the cart
    # When  I choose to view product details for item "Sauce Labs Fleece Jacket"
    # When  I select to view the cart contents
    # When  I view the shopping cart
    # Then  I verify that the item "Sauce Labs Fleece Jacket" is present in the shopping cart
    # Then  I verify that the item "1234567890" is NOT present in the shopping cart
    # Then  I verify that the item "Sauce Labs Fleece Jacket" is NOT present in the shopping cart 


    # When  I select to checkout via the shopping cart
    # When  I view the checkout information page
    # When  I enter first name of "first-name" during checkout
    # When  I enter last name of "last-name" during checkout
    # When  I enter postal code of "22222" during checkout
    # When  I select to continue on the overview page
    # When  I view the checkout step two page
    # Then  I verify that the item "Sauce Labs Fleece Jacket" is present on the checkout step two page
    # When  I select to complete the checkout
    # When I view the order completion page
    # Then I verify that my order was placed successfully
    # Then I verify that the order completion text includes "Your order has been dispatched, and will arrive just as fast as the pony can get there"