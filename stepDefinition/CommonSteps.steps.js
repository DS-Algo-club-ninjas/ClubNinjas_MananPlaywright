import { createBdd } from 'playwright-bdd';
import {CommonPage} from '../pageObject/CommonPage.js'
const { Given, When, Then } = createBdd();

Given('User is in Manan Home page', async ({page}) => {
  // await page.goto('https://manan.numpyninja.com/');
    const common = new CommonPage(page);
    await common.gotoHomePage();
});

When('User enters valid login', async ({page}) => {
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USERNAME);
//   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD);
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await expect(page.locator('span[role="status"]')).toContainText('Authentication Successful');
    const common = new CommonPage(page);
    await common.clickSignIn();
    await common.enterUsername();
    await common.enterPassword();
    await common.clickLogin();
});