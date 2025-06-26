import { createBdd } from 'playwright-bdd';
import {CommonPage} from '../pageObject/CommonPage.js'
const { Given, When, Then } = createBdd();

Given('User is in Manan Home page', async ({page}) => {
    const common = new CommonPage(page);
    await common.gotoHomePage();
});

When('User enters valid login', async ({page}) => {
    const common = new CommonPage(page);
    await common.clickSignIn();
    await common.enterUsername();
    await common.enterPassword();
    await common.clickLogin();
});