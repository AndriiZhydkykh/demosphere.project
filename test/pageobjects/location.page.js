

const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LocationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get locationTubSidebar() { return $('[data-test="Locations"]');}
    get locationTitle() { return $('[class="MuiTypography-root jss39 MuiTypography-h5"]');}

    /**
     * a method to encapsule automation code to interact with the page
     */
    async clickLocationTubSidebar () {
        await this.locationTubSidebar.waitForClickable({ timeout: 40000 });
        await this.locationTubSidebar.click()
        await this.locationTitle.waitForDisplayed({ timeout: 40000 });
    }

}

module.exports = new LocationPage();
