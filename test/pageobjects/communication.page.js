

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommunicationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get communicationTubSidebar() { return $('[data-test="Communications"]');}
    get communicationTitle() { return $('[class="MuiTypography-root jss39 MuiTypography-h5"]');}

    /**
     * a method to encapsule automation code to interact with the page
     */
    async clickCommunicationTubSidbar () {
        await this.communicationTubSidebar.waitForClickable({ timeout: 40000 });
        await this.communicationTubSidebar.click()
        await this.communicationTitle.waitForDisplayed({ timeout: 40000 });
    }

}

module.exports = new CommunicationPage();
