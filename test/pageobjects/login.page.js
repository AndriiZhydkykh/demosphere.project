

const Page = require('./page');
const RefereesPage = require('../pageobjects/referees.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() { return $('#user_login');}
    get inputPassword () {return $('#user_password');}
    get btnSignIn () {return $('[class="btn btn-sm btn-green"]');}
    get profileButton () {return $('[class="MuiAvatar-root MuiAvatar-circle jss16 MuiAvatar-colorDefault"]');}
    get logoutButton() {return $('[href="/_logout"]');}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }
    async clickProfile () {
        await this.profileButton.waitForDisplayed({ timeout: 40000 });
        await this.profileButton.click()
    }
    async clickLogout() {
        await this.logoutButton.waitForDisplayed({ timeout: 40000 });
        await this.logoutButton.click()
        await this.inputEmail.waitForDisplayed({ timeout: 40000 });
    }


}

module.exports = new LoginPage();
