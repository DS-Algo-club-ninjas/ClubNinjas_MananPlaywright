export class Dashboardpage{
  constructor(page) {
    this.page = page;
    this.signInBtn = page.getByRole('button', { name: 'Sign In' });
    this.usernameField = page.getByRole('textbox', { name: 'Username' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    //Dashboard
    this.dashboardBtn = page.getByRole('button', { name: 'Dashboard' });
    this.startAssessmentBtn = page.getByRole('button', { name: 'Start your first assessment →' });
    this.updateSettingsBtn = page.getByRole('button', { name: 'Update settings →' });
    this.upgradeNowBtn = page.getByRole('button', { name: 'Upgrade now →' });
    this.viewHistoryBtn = page.getByRole('button', { name: 'View history →' });
    this.viewPreviousAssessmentsBtn = page.getByRole('button', { name: 'View Previous Assessments' });
    this.upgradePremiumLink = page.getByRole('link', { name: 'Upgrade to Premium' });
    this.usageText = page.getByText('Track your AI analysis usage');
    this.analysisUsageHeader=page.getByRole('heading', { name: 'Analysis Usage' });

    //Header&footer
     
    this.aboutUs = page.getByRole('link', { name: 'About Us' });
    this.blog = page.getByRole('link', { name: 'Blog' });
    this.contactUs = page.getByRole('link', { name: 'Contact Us' });
    this.terms = page.getByRole('link', { name: 'Terms' });
    this.privacy = page.getByRole('link', { name: 'Privacy' });
    this.profileBtn = page.getByRole('button', { name: 'P', exact: true });
    this.settings = page.getByText('Settings', { exact: true });
    this.previousAssessments = page.getByText('Previous Assessments', { exact: true });
    this.subscriptionPlans = page.getByLabel('P').getByText('Subscription Plans');
    this.logout = page.getByText('Log out');
    this.URL = this.page.URL;
 
  }

  async navigateToLoginPage(URL) {
    //console.log('******** PAGE in Page navigateToLoginPage(): ',await this.page);
    //console.log('******** PAGE in Page content navigateToLoginPage(): ',await this.page.content);
    await this.page.goto(URL);
  }

  async clickSignInButton() {
    await this.signInBtn.click();
  }

  async enterUsername(USERNAME) {
    await this.usernameField.fill(USERNAME);
  }

  async enterPassword(PASSWORD) {
    await this.passwordField.fill(PASSWORD);
  }

  async submitLogin() {
    await this.signInBtn.click();
    await this.page.waitForTimeout(5000);
  }

  async URLReset() {
    this.URL=this.page.url();
    console.log('*** PAGE URL After Signin', this.page.url());
  }
  //Dashboard
  async clickDashboard() {
    await this.dashboardBtn.click();
    await this.page.waitForTimeout(5000);
  }
  

  async clickStartAssessment() {
    await this.startAssessmentBtn.click();
    await this.page.waitForTimeout(5000);
  }
  async isvisible_analysisheader(){
  await this.analysisUsageHeader.isVisible();
  }

  async clickUpdateSettings() {
    await this.updateSettingsBtn.click();
  }

  async clickUpgradeNow() {
    await this.page.upgradeNowBtn.click();
  }

  async clickViewHistory() {
    await this.viewHistoryBtn.click();
  }

  async clickViewPreviousAssessments() {
    await this.viewPreviousAssessmentsBtn.click();
  }

  async clickUpgradeToPremium() {
    await this.upgradePremiumLink.click();
  }

  //Header&footer

  async clickAboutUs() {
    await this.aboutUs.click();
  }

  async clickBlog() {
    await this.blog.click();
  }

  async clickContactUs() {
    await this.contactUs.click();
  }

  async clickTerms() {
    await this.terms.click();
  }

  async clickPrivacy() {
    await this.privacy.click();
  }

  async openProfileMenu() {
    await this.profileBtn.click();
  }

  async clickSettings() {
    await this.settings.click();
  }

  async clickPreviousAssessments() {
    await this.previousAssessments.click();
  }

  async clickSubscriptionPlans() {
    await this.subscriptionPlans.click();
  }

  async clickLogout() {
    await this.logout.click();
  }

  async clickUsageText() {
    await this.usageText.click();
  }
}
