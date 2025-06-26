import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pageObject/HomePage.js';
import { test } from '../fixtures/fixture';

const { Given, When, Then } = createBdd();

// NAVIGATION
Given('the user is not signed in to application', async ({ page }) => {
  const home = new HomePage(page);
  await home.gotoHome();
});

Given('the user is on the landing page', async ({ page }) => {
  const home = new HomePage(page);
  await home.gotoHome();
});

When('the user visits the landing page', async ({ page }) => {
  const home = new HomePage(page);
  await home.visitLandingPage();
});

// HEADINGS
Then('the heading {string} should be visible', async ({ page }, heading) => {
  const home = new HomePage(page);
  await home.verifyHeadingVisible(heading);
});

// BUTTONS
Then('Verify the {string} button should be present in the top right corner', async ({ page }, button) => {
  const home = new HomePage(page);
  await home.verifyButtonVisible(button);
});

Then('Verify the buttons {string} and {string} should be visible', async ({ page }, btn1, btn2) => {
  const home = new HomePage(page);
  await home.verifyMultipleButtons([btn1, btn2]);
});

// UPGRADE SECTION
When('the page is fully loaded', async ({ page }) => {
  const home = new HomePage(page);
  await home.clickUpgradeHeading();
});

Then('Verify {string} should be displayed and the buttons {string} and {string} should be visible', async ({ page }, sectionText, btn1, btn2) => {
  const home = new HomePage(page);
  await home.verifyUpgradeSection(sectionText);
});

// FOOTER
Given('the user scrolls to the bottom of the home page', async ({ page }) => {
  const home = new HomePage(page);
  await home.gotoHome();
  await home.scrollToBottom();
});

Then('Verify company description, About Us, Blog, and Contact Us links should be present', async ({ page }) => {
  const home = new HomePage(page);
  await home.verifyFooterLinks();
});

// SIGN IN
Given('The user is in Welcome to Manan Sign In page', async ({ page }) => {
  const home = new HomePage(page);
  await home.gotoHome();
  await home.clickSignInTopButton();
});

When('User enters valid existing Username and Password and clicks Sign In', async ({ page }) => {
  const home = new HomePage(page);
  await home.signInWithEnvCredentials();
});

Then('User should see Authentication Successful message and redirected to Manan Assessment page', async ({ page }) => {
  const home = new HomePage(page);
  await home.verifySignInSuccess();
});

// SIGN UP
Given('The user is in Welcome to Manan Sign Up page', async ({ page }) => {
  const home = new HomePage(page);
  await home.gotoHome();
  await home.clickSignInTopButton();
  await home.goToSignUpTab();
});

When('User enters valid Username, Password, Confirm Password and clicks Create Account', async ({ page }) => {
  const home = new HomePage(page);
  const id = `ClubNinjas${Date.now()}`;
  await home.signUp(id, `${id}@gmail.com`, 'numpyninja');
});

Then('User should see Registration successful message and redirected to Manan Assessment Page', async ({ page }) => {
  const home = new HomePage(page);
  await home.verifySignUpSuccess();
});
