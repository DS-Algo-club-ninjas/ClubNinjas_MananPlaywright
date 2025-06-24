// Generated from: feature\MananAssessment.feature
import { test } from "playwright-bdd";

test.describe('Manan Medical Triage Assistant', () => {

  test.beforeEach('Background: User is successfully logged into Manan Application', async ({ Given, page, When }) => {
    await Given('User is in Manan Home page', null, { page }); 
    await When('User enters valid login', null, { page }); 
  });
  
  test('Verify user is able to successfully analyze case by entering valid data', async ({ Given, page, When, Then }) => { 
    await Given('User is in Manan Medical Triage Assistant page', null, { page }); 
    await When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, Medical History, and Current medications and clicks Analyze Case', null, { page }); 
    await Then('User should be able to see Analysis report with Analysis Complete AI has analysed the case message', null, { page }); 
  });

  test('User should be able to maunally enter Vital Signs & Lab Reports', async ({ Given, page, When, Then }) => { 
    await Given('User is in Manan Medical Triage Assistant page', null, { page }); 
    await When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms,  maunally enters Vital Signs & Lab Reports, Medical History, and Current medications and clicks Analyze Case'); 
    await Then('User should be able to see Analysis report'); 
  });

  test('User should be able to analyze case without entering Medical History and Curretn medications', async ({ Given, page, When, Then }) => { 
    await Given('User is in Manan Medical Triage Assistant page', null, { page }); 
    await When('User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, and clicks Analyze Case'); 
    await Then('User should be able to see Analysis report'); 
  });

  test('Verify  user is able to share the report after analysis', async ({ Given, When, Then }) => { 
    await Given('User is in  Manan Medical Triage Assistant page after successful analysis'); 
    await When('User clicks Share Analysis button'); 
    await Then('User should be able to see a Share window with the analysis pdf'); 
  });

  test('Verify user is able to Ask for Further Analysis', async ({ Given, When, Then }) => { 
    await Given('User is in  Manan Medical Triage Assistant page after successful analysis'); 
    await When('User clicks Ask for Further Analysis'); 
    await Then('User should be able to see details for further analysis'); 
  });

  test('Verify user is able to upload 5 pdf files', async ({ Given, page, When, Then }) => { 
    await Given('User is in Manan Medical Triage Assistant page', null, { page }); 
    await When('User uploads five pdf files'); 
    await Then('User should see Success, Blood report values have been added to vitals'); 
  });

  test.describe('Verify user is able to see error when clicking Analyze case without entering required fields', () => {

    test('Example #1', async ({ Given, page, When, Then }) => { 
      await Given('User is in Manan Medical Triage Assistant page', null, { page }); 
      await When('User clicks Analyze Case for \'AgeNull\''); 
      await Then('User should see error message for \'AgeNull\''); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('feature\\MananAssessment.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is in Manan Medical Triage Assistant page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, Medical History, and Current medications and clicks Analyze Case","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see Analysis report with Analysis Complete AI has analysed the case message","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given User is in Manan Medical Triage Assistant page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms,  maunally enters Vital Signs & Lab Reports, Medical History, and Current medications and clicks Analyze Case","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see Analysis report","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given User is in Manan Medical Triage Assistant page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User enters Patient Age, Gender at Birth, Cheif complaint, Detailed Symptoms, upload Blood report, and clicks Analyze Case","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see Analysis report","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given User is in  Manan Medical Triage Assistant page after successful analysis","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When User clicks Share Analysis button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see a Share window with the analysis pdf","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is in  Manan Medical Triage Assistant page after successful analysis","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User clicks Ask for Further Analysis","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should be able to see details for further analysis","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given User is in Manan Medical Triage Assistant page","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When User uploads five pdf files","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see Success, Blood report values have been added to vitals","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in Manan Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enters valid login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given User is in Manan Medical Triage Assistant page","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User clicks Analyze Case for 'AgeNull'","stepMatchArguments":[{"group":{"start":29,"value":"'AgeNull'","children":[{"children":[{"children":[]}]},{"start":30,"value":"AgeNull","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see error message for 'AgeNull'","stepMatchArguments":[{"group":{"start":34,"value":"'AgeNull'","children":[{"children":[{"children":[]}]},{"start":35,"value":"AgeNull","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end