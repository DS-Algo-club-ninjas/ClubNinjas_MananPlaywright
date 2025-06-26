// Generated from: feature\Home.feature
import { test } from "playwright-bdd";

test.describe.only('Manan LandingPage for Unauthenticated User', () => {

  test.beforeEach('Background: User is not sign in and able to land on the Manan Launch page', async ({ Given, page, When }) => {
    await Given('the user is not signed in to application', null, { page }); 
    await When('the user visits the landing page', null, { page }); 
  });
  
  test('Show Welcome title "Transform Your Medical Practice" and buttons "Try for Free" and "For Medical Professionals"', { tag: ['@only'] }, async ({ Given, page, When, Then }) => { 
    await Given('the user is not signed in to application', null, { page }); 
    await When('the user visits the landing page', null, { page }); 
    await Then('the heading \'Transform Your Medical Practice\' should be visible', null, { page }); 
  });

  test('Show sign in button in header', { tag: ['@only'] }, async ({ Given, page, When, Then }) => { 
    await Given('the user is not signed in to application', null, { page }); 
    await When('the user visits the landing page', null, { page }); 
    await Then('Verify the \'Sign In\' button should be present in the top right corner', null, { page }); 
  });

  test('Show call-to-action buttons', { tag: ['@only'] }, async ({ Given, page, When, Then }) => { 
    await Given('the user is on the landing page', null, { page }); 
    await When('the page is fully loaded', null, { page }); 
    await Then('Verify the buttons \'Try for free\' and \'For Medical Professionals\' should be visible', null, { page }); 
  });

  test('Verify \'Clinical Decision Support Platform today\' content is diaplyed', { tag: ['@only'] }, async ({ Given, page, When, Then }) => { 
    await Given('the user is on the landing page', null, { page }); 
    await When('the page is fully loaded', null, { page }); 
    await Then('Verify \'Upgrade to a clinical decision-support platform today\' should be displayed and the buttons \'Start Medical Traige Assessment\' and \'View Pricing Plans\' should be visible', null, { page }); 
  });

  test('Display footer links and company info', { tag: ['@only'] }, async ({ Given, page, Then }) => { 
    await Given('the user scrolls to the bottom of the home page', null, { page }); 
    await Then('Verify company description, About Us, Blog, and Contact Us links should be present', null, { page }); 
  });

  test('Verify user is able to Sign In with existing user details', { tag: ['@only'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user is in Welcome to Manan Sign In page', null, { page }); 
    await When('User enters valid existing Username and Password and clicks Sign In', null, { page }); 
    await Then('User should see Authentication Successful message and redirected to Manan Assessment page', null, { page }); 
  });

  test('Verify New User is able to Create account successfully', { tag: ['@only'] }, async ({ Given, page, When, Then }) => { 
    await Given('The user is in Welcome to Manan Sign Up page', null, { page }); 
    await When('User enters valid Username, Password, Confirm Password and clicks Create Account', null, { page }); 
    await Then('User should see Registration successful message and redirected to Manan Assessment Page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('feature\\Home.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the heading 'Transform Your Medical Practice' should be visible","stepMatchArguments":[{"group":{"start":12,"value":"'Transform Your Medical Practice'","children":[{"children":[{"children":[]}]},{"start":13,"value":"Transform Your Medical Practice","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":13,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Verify the 'Sign In' button should be present in the top right corner","stepMatchArguments":[{"group":{"start":11,"value":"'Sign In'","children":[{"children":[{"children":[]}]},{"start":12,"value":"Sign In","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":18,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given the user is on the landing page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the page is fully loaded","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Verify the buttons 'Try for free' and 'For Medical Professionals' should be visible","stepMatchArguments":[{"group":{"start":19,"value":"'Try for free'","children":[{"children":[{"children":[]}]},{"start":20,"value":"Try for free","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"'For Medical Professionals'","children":[{"children":[{"children":[]}]},{"start":39,"value":"For Medical Professionals","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":23,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is on the landing page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the page is fully loaded","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Verify 'Upgrade to a clinical decision-support platform today' should be displayed and the buttons 'Start Medical Traige Assessment' and 'View Pricing Plans' should be visible","stepMatchArguments":[{"group":{"start":7,"value":"'Upgrade to a clinical decision-support platform today'","children":[{"children":[{"children":[]}]},{"start":8,"value":"Upgrade to a clinical decision-support platform today","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":99,"value":"'Start Medical Traige Assessment'","children":[{"children":[{"children":[]}]},{"start":100,"value":"Start Medical Traige Assessment","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":137,"value":"'View Pricing Plans'","children":[{"children":[{"children":[]}]},{"start":138,"value":"View Pricing Plans","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":28,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given the user scrolls to the bottom of the home page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Verify company description, About Us, Blog, and Contact Us links should be present","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":32,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"Given The user is in Welcome to Manan Sign In page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When User enters valid existing Username and Password and clicks Sign In","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see Authentication Successful message and redirected to Manan Assessment page","stepMatchArguments":[]}]},
  {"pwTestLine":46,"pickleLine":37,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is not signed in to application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user visits the landing page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given The user is in Welcome to Manan Sign Up page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User enters valid Username, Password, Confirm Password and clicks Create Account","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see Registration successful message and redirected to Manan Assessment Page","stepMatchArguments":[]}]},
]; // bdd-data-end