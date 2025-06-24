Feature: Manan Medical Triage Assistant 

Background: User is successfully logged into Manan Application
    Given User is in Manan Home page
    When User enters valid login

Scenario: Verify user is able to successfully analyze case by entering valid data
    Given User is in Manan Medical Triage Assistant page 
    When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, Medical History, and Current medications and clicks Analyze Case
    Then User should be able to see Analysis report with Analysis Complete AI has analysed the case message

Scenario: User should be able to maunally enter Vital Signs & Lab Reports
    Given User is in Manan Medical Triage Assistant page
    When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms,  maunally enters Vital Signs & Lab Reports, Medical History, and Current medications and clicks Analyze Case
    Then User should be able to see Analysis report

Scenario: User should be able to analyze case without entering Medical History and Curretn medications 
    Given User is in Manan Medical Triage Assistant page
    When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, and clicks Analyze Case
    Then User should be able to see Analysis report
    
Scenario: Verify  user is able to share the report after analysis
    Given User is in  Manan Medical Triage Assistant page after successful analysis
    When User clicks Share Analysis button
    Then User should be able to see a Share window with the analysis pdf
    
Scenario: Verify user is able to Ask for Further Analysis
    Given User is in  Manan Medical Triage Assistant page after successful analysis
    When User clicks Ask for Further Analysis
    Then User should be able to see details for further analysis
    
Scenario: Verify user is able to upload 5 pdf files
    Given User is in Manan Medical Triage Assistant page
    When User uploads five pdf files
    Then User should see Success, Blood report values have been added to vitals
    
Scenario Outline: Verify user is able to see error when clicking Analyze case without entering required fields
    Given User is in Manan Medical Triage Assistant page
    When User clicks Analyze Case for '<Scenario>'
    Then User should see error message for '<Scenario>'

    Examples:
    |Scenario|
    |AgeNull|
    