Feature: Login with credentials

  Background:
    Given user navigates to the login page
    When  user clicks the sign in button on the homepage
    When user fills the username field with credentials from env
    When the user fills the password field with credentials from env
    When the user clicks the login button
    Then the user should be logged in successfully


 Scenario: Verify User lands on the medical dashboard
    Given the user should be logged in successfully
    When The user is directed to the dashboard URL
    Then The page should have URL visible 
    
Scenario: Verify User starts a new assessment
    Given The user is on the dashboard
    When The user clicks on the "Start New Assessment" button
    Then the user should be logged in successfully

Scenario: Verify User able to View previous medical assessments
    Given The user is on the dashboard
    When The user clicks the "View Previous Assessments" button
    Then The user should be in "View Previous Assessments" page

 Scenario: verify User is able See current "AI analysis usage"
    Given The user is on the dashboard
    When  dashboard is displayed with 'AI analysis usage'
    Then The page should have URL visible

 Scenario: verify User is able See current "upgrade to premium"
    Given The user is on the dashboard
    When verify user is able click on 'upgrade to premium' button
    Then user is on subscription page


 Scenario: verify User is able to click current Start your first assessment
    Given The user is on the dashboard
    When The user clicks on  the Start your first assessment button
    Then the user should be logged in successfully

 Scenario: verify User is able See current "Account Settings"
    Given The user is on the dashboard
    When The user clicks on Update settings under the Account Settings section
    Then The user should directed to Account Settings page

 Scenario: verify User is able See current Subscription Plans
    Given The user is on the dashboard
    When The user clicks on Upgrade now  section   in the Subscription Plans section
     Then user is on subscription page


 Scenario: verify User is able See current Assessment History
    Given The user is on the dashboard
    When The user clicks on View history  section in the Assessment History section
    Then The user should be in "View Previous Assessments" page

Scenario: verify User is able See current "About Us"
    Given The user is on the dashboard
    When The user clicks on "About Us  "section   in the "company" section
    Then The user should directed to "About Us "page

 Scenario: verify User is able See current "Blog"
    Given The user is on the dashboard
    When The user clicks on "Blog  "section   in the "company" section
    Then The user should directed to "Blog"page

    Scenario: verify User is able See current "Contact Us"
    Given The user is on the dashboard
    When The user clicks on "Contact Us  "section   in the "company" section
    Then The user should directed to "Contact Us"page

 Scenario: verify User is able See current "Terms"
    Given The user is on the dashboard
    When The user clicks on "Terms "section   in the "© 2025 Manan - Medical Triage Assistant" section
    Then The user should directed to "Terms"page

  Scenario: verify User is able See current "Privacy"
    Given The user is on the dashboard
    When The user clicks on "Privacy "section   in the "© 2025 Manan - Medical Triage Assistant" section
    Then The user should directed to "Privacy"page

 Scenario: Verify user is able to logout successfully
    Given The user is on the dashboard
    When The user clicks User profile icon and clicks Logout option
    Then The user should get "Session Ended" message and rediected to Manan signin Page

  Scenario: Verify user is able to directed to settings successfully
    Given The user is on the dashboard
    When The user clicks User profile icon and clicks  settings option
    Then The user should directed to "settings"page

  Scenario: Verify user is able to directed to Previous Assessments successfully
    Given The user is on the dashboard
    When The user clicks User profile icon and clicks previous assessment option
    Then The user should directed to "Previous Assessments"page

  Scenario: Verify user is able to directed to subscription plans successfully
    Given The user is on the dashboard
    When The user clicks User profile icon and clicks subscription plans option
    Then The user should directed to "subscription plans"page

     