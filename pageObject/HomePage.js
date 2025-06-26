const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.root = page.locator('#root');
    this.signInTopButton = page.getByRole('button', { name: 'Sign In' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.emailInput = page.getByRole('textbox', { name: 'Email Address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password' });
    this.signInSubmitButton = page.getByRole('button', { name: 'Sign In' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.signUpTab = page.getByRole('tab', { name: 'Sign Up' });
    this.authStatus = page.locator('span[role="status"]');
    this.footer = page.getByRole('contentinfo');
    this.upgradeHeading = page.getByRole('heading', {  name: 'Upgrade to a Clinical Decision-Support Platform Today'});
    this.startTriageButton = page.getByRole('button', { name: 'Start Medical Triage' });
    this.viewPricingPlansButton = page.getByRole('button', { name: 'View Pricing Plans' });
  }

  // Navigation
  async gotoHome() {
    await this.page.goto(process.env.BASE_URL || 'https://manan.numpyninja.com/');
  }

  async waitForPageLoad() {
    await this.root.waitFor({ state: 'visible' });
  }
    async visitLandingPage() {
     await this.waitForPageLoad();
    }
  // Headings
  async verifyHeadingVisible(text) {
    await expect(this.root).toContainText(text);
  }

  // Buttons
  async verifyButtonVisible(name) {
    await expect(this.page.getByRole('button', { name })).toBeVisible();
  }

  async verifyMultipleButtons(names = []) {
    for (const name of names) {
      await this.verifyButtonVisible(name);
    }
  }

  // Sign In
  async clickSignInTopButton() {
    await this.signInTopButton.click();
  }

  async fillSignInCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async signIn(username, password) {
    await this.fillSignInCredentials(username, password);
    await this.signInSubmitButton.click();
  }

  async signInWithEnvCredentials() {
    await this.signIn(process.env.USER_NAME, process.env.PASSWORD);
  }

  async verifySignInSuccess() {
    await expect(this.authStatus).toContainText('Authentication Successful');
    await expect(this.root).toContainText('Manan');
  }

  // Sign Up
  async goToSignUpTab() {
    await this.signUpTab.click();
  }

  async fillSignUpDetails(username, email, password) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

  async signUp(username, email, password) {
    await this.fillSignUpDetails(username, email, password);
    await this.createAccountButton.click();
    console.log('print UN,Email,PD:',username, email, password);
  }

  async verifySignUpSuccess() {
    await expect(this.authStatus).toContainText('Registration Successful');
  }

  // Footer
  async verifyFooterLinks() {
    await expect(this.footer).toContainText('Company');
    await expect(this.footer).toContainText('About Us');
    await expect(this.footer).toContainText('Blog');
    await expect(this.footer).toContainText('Contact Us');
  }

  // Scroll
  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  // Section interaction
  async clickUpgradeHeading() {
    await this.page.getByRole('heading', { name: /Upgrade to a Clinical/i }).click();
  }

  async verifyUpgradeSection(text) {
    const actualText = await this.upgradeHeading.textContent();
  expect(actualText.toLowerCase()).toContain(text.toLowerCase());

  await expect(this.startTriageButton).toBeVisible();
  await expect(this.viewPricingPlansButton).toBeVisible();
  }
}

module.exports = { HomePage };
