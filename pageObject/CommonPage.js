export class CommonPage {
    constructor(page) {
        this.page = page;
        this.signInBtn = page.getByRole('button', { name: 'Sign In' });
        this.usernameField = page.getByRole('textbox', { name: 'Username' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Sign In' });
    }

    async gotoHomePage() {
        await this.page.goto(process.env.BASE_URL);
    }

    async clickSignIn() {
        await this.signInBtn.click();
    }
    async enterUsername() {
        await this.usernameField.fill(process.env.USER_NAME);
    }
    async enterPassword() {
        await this.passwordField.fill(process.env.PASSWORD);
    }
    async clickLogin() {
        await this.loginBtn.click();
    }
}