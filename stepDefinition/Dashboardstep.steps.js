import * as dotenv from 'dotenv';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { Dashboardpage } from '../pageObject/Dashboardpage.js';
import { test } from '../fixtures/fixture';


const { Given, When, Then } = createBdd(test);

dotenv.config();

let dashboard;

Given('user navigates to the login page', async ({ dbPage }) => {
  console.log('******** BASE URL: ',process.env.BASE_URL);
  //console.log('******** PAGE in STEP: ',dbPage);
  await dbPage.navigateToLoginPage(process.env.BASE_URL);
});


When('user clicks the sign in button on the homepage', async ({ dbPage }) => {
  await dbPage.clickSignInButton();
});

When('user fills the username field with credentials from env', async ({ dbPage }) => {
  console.log('******** USERNAME: ',process.env.USER_NAME);
  await dbPage.enterUsername(process.env.USER_NAME);
});

When('the user fills the password field with credentials from env', async ({ dbPage }) => {
  console.log('******** PASSWORD: ',process.env.PASSWORD);
  await dbPage.enterPassword(process.env.PASSWORD);
});

When('the user clicks the login button', async ({ dbPage }) => {
  await dbPage.submitLogin();
});

Then('the user should be logged in successfully', async ({ dbPage }) => {
  dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.HOME_PAGE_URL);
});

//2

When('The user is directed to the dashboard URL', async ({ dbPage }) => {
  await dbPage.clickDashboard();
});

Then('The page should have URL visible', async ({ dbPage }) => {
  dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.DASHBOARD_URL);
});

//3

Given('The user is on the dashboard', async ({dbPage}) => {
    await dbPage.clickDashboard();

});

When('The user clicks on the {string} button', async ({dbPage}) => {
      await dbPage.clickStartAssessment();

});

//4

When('The user clicks the {string} button', async ({dbPage}) => {
  await dbPage.clickViewPreviousAssessments();
});

Then('The user should be in {string} page', async ({dbPage}) => {
  dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.PREVIOUS_ASSESMENTS);
});

//5
When('dashboard is displayed with {string}', async ({dbPage}) => {
  await dbPage.isvisible_analysisheader();
});
//6
When('verify user is able click on {string} button', async ({dbPage}, arg) => {
 await dbPage.clickUpgradeToPremium();
});

Then('user is on subscription page', async ({dbPage}) => {
  dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.SUBSCRIPTION_PAGE);
});

//7
When('The user clicks on  the Start your first assessment button', async ({dbPage}) => {
  await dbPage.clickStartAssessment();
});

//8
When('The user clicks on Update settings under the Account Settings section', async ({dbPage}) => {
  await dbPage.clickUpdateSettings();
});

Then('The user should directed to Account Settings page', async ({dbPage}) => {
 dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.SETTINGS_PAGE);
});

//9

When('The user clicks on Upgrade now  section   in the Subscription Plans section', async ({dbPage}) => {
  await dbPage.clickUpgradeNow();
});

//10

When('The user clicks on View history  section in the Assessment History section', async ({dbPage}) => {
  await dbPage.clickViewHistory();
});

//11

When('The user clicks on "About Us  "section   in the {string} section', async ({dbPage}) => {
  await dbPage.clickAboutUs();
});

Then('The user should directed to "About Us "page', async ({dbPage}) => {
  dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.ABOUT_PAGE);
});

//12
When('The user clicks on "Blog  "section   in the {string} section', async ({dbPage}) => {
    await dbPage.clickBlog();

});

Then('The user should directed to "Blog"page', async ({dbPage}) => {
   dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.BLOG_PAGE);
});

//13

When('The user clicks on "Contact Us  "section   in the {string} section', async ({dbPage}) => {
   await dbPage.clickContactUs();
});

Then('The user should directed to "Contact Us"page', async ({dbPage}) => {
    dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.CONTACR_PAGE);
});
//14

When('The user clicks on "Terms {string}© {int} Manan - Medical Triage Assistant" section', async ({dbPage}) => {
  await dbPage.clickTerms();
});

Then('The user should directed to "Terms"page', async ({dbPage}) => {
  dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.TERMS_PAGE);
});

//15
When('The user clicks on "Privacy {string}© {int} Manan - Medical Triage Assistant" section', async ({dbPage}) => {
 await dbPage.clickPrivacy();
});

Then('The user should directed to "Privacy"page', async ({dbPage}) => {
   dbPage.URLReset();
  await expect(dbPage.URL).toMatch(process.env.PRIVACY_POLICY);
});

When('The user clicks User profile icon and clicks Logout option', async ({}) => {
 
});

Then('The user should get {string} message and rediected to Manan signin Page', async ({}, arg) => {
  
});

When('The user clicks User profile icon and clicks  settings option', async ({}) => {
 
});

Then('The user should directed to "settings"page', async ({}) => {
  
});

When('The user clicks User profile icon and clicks previous assessment option', async ({}) => {
  // Step: When The user clicks User profile icon and clicks previous assessment option
  // From: tests\features\Dashboard.feature:96:5
});

Then('The user should directed to "Previous Assessments"page', async ({}) => {
  // Step: Then The user should directed to "Previous Assessments"page
  // From: tests\features\Dashboard.feature:97:5
});

When('The user clicks User profile icon and clicks subscription plans option', async ({}) => {
  // Step: When The user clicks User profile icon and clicks subscription plans option
  // From: tests\features\Dashboard.feature:101:5
});

Then('The user should directed to "subscription plans"page', async ({}) => {
  // Step: Then The user should directed to "subscription plans"page
  // From: tests\features\Dashboard.feature:102:5
});