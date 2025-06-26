Feature: Manan LandingPage for Unauthenticated User

Background: User is not sign in and able to land on the Manan Launch page
    Given the user is not signed in to application
    When the user visits the landing page

Scenario: Show Welcome title "Transform Your Medical Practice" and buttons "Try for Free" and "For Medical Professionals"
    Given the user is not signed in to application
    When the user visits the landing page
    Then the heading 'Transform Your Medical Practice' should be visible

Scenario: Show sign in button in header
    Given the user is not signed in to application
    When the user visits the landing page
    Then Verify the 'Sign In' button should be present in the top right corner

Scenario: Show call-to-action buttons
    Given the user is on the landing page
    When the page is fully loaded
    Then Verify the buttons 'Try for free' and 'For Medical Professionals' should be visible

Scenario: Verify 'Clinical Decision Support Platform today' content is diaplyed
    Given the user is on the landing page
    When the page is fully loaded
    Then Verify 'Upgrade to a clinical decision-support platform today' should be displayed and the buttons 'Start Medical Traige Assessment' and 'View Pricing Plans' should be visible

Scenario: Display footer links and company info
    Given the user scrolls to the bottom of the home page
    Then Verify company description, About Us, Blog, and Contact Us links should be present

Scenario: Verify user is able to Sign In with existing user details
    Given The user is in Welcome to Manan Sign In page
    When User enters valid existing Username and Password and clicks Sign In
    Then User should see Authentication Successful message and redirected to Manan Assessment page
 
  Scenario: Verify New User is able to Create account successfully
    Given The user is in Welcome to Manan Sign Up page
    When User enters valid Username, Password, Confirm Password and clicks Create Account
    Then User should see Registration successful message and redirected to Manan Assessment Page

