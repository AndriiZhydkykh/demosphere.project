
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RefereesPage extends Page {
     /**
     * define selectors using getter methods
     */
      get refereesTitle() { return $('//div[@class="jss36"]//span[text()="Referees"]');}
      get refereesButton () { return $('[class*="MuiButtonBase-root "][data-test="REFEREES"]');}
      get refereesPopup () { return $('[data-icon="ellipsis-vertical"]');}
      get addReferees () { return $('[data-icon="plus"]');}
      get addRefereesWimdowTitle () { return $('#form-dialog-title');}
      get addRefereesEmailInput () { return $('[class*="MuiInputBase-input"][name="email"]');}
      get addRefereesFirstNameInput () { return $('[class*="MuiInputBase-input"][name="firstName"]');}
      get addRefereesLastNameInput () { return $('[class*="MuiInputBase-input"][name="lastName"]');}
      get addRefereesGenderMale () { return $('[value="MALE"]');}
      get addRefereesButtonForm () { return $('[type="submit"] [class="MuiButton-label"]');}
      get refereesSearchInput () { return $('[type="search"]');}
      get accesText() { return $('[class="MuiCircularProgress-svg"]');}
      get firstUsername () { return $('(//*[contains(text(),"firstUserName123  lastUserName")])[1]');}
      get deleteReferees() { return $('(//*[@data-icon="trash-can"])[1]');}
      get confimrdeleteReferees() { return $('(//*[contains(@class,"MuiDialogActions-root")]//button)[1]');}
      get additReferres() { return $('(//*[contains(@class,"actions")]//button)[1]');}
      get chancgeStutusRefereeListbox() { return $('[aria-labelledby="mui-component-select-status"]');}
      get chancgeStutusRefereeInactive() { return $('[data-value="INACTIVE"]');}
      get chancgeStutusRefereeActive() { return $('[data-value="ACTIVE"]');}
      get chancgeStutusRefereeButton () { return $('//*[text()="Save"]');}
      get inactiveStatusReferee() { return $('//*[text()="inactive"]');}
      get addButton() { return $('[class*="MuiButtonBase-root"][type="submit"]');}
      get confirDeleteTextReferee() { return $('[data-icon="empty-set"]');}
      get statusRefereeInactive () { return $('(//div [text()="inactive"])[1]');}
      get statusRefereeActive() { return $('(//div [text()="active"])[1]');}
      get getStatus() { return $('#status');}
      get refereeaddetText() { return $('[class*="MuiTypography-root MuiDialogContentText-root"]');}
      

    /**
     * a method to encapsule automation code to interact with the page
     */

    async setDataReferee(email,firstname,lastname) {
        await this.addRefereesWimdowTitle.waitForDisplayed({ timeout: 40000 });
        await this.addRefereesEmailInput.setValue(email);
        await this.addRefereesFirstNameInput.setValue(firstname);
        await this.addRefereesLastNameInput.setValue(lastname);
    }
    async clickReferresButton() {
        await this.refereesButton.waitForDisplayed({ timeout: 40000 });
        await this.refereesButton.click();
    }
    async clickReferresPopUp() {
        await this.refereesPopup.waitForDisplayed({ timeout: 40000 });
        await this.refereesPopup.click();
    }
    async clickaddReferresIcon() {
        await this.addReferees.click();
        await this.addRefereesEmailInput.waitForDisplayed({ timeout: 40000 });
    }
    async setReferresGender () {
        await this.addRefereesGenderMale.click();

    }
    async clickAddRefereesButtonForm () {
        await this.addRefereesButtonForm.waitForClickable({ timeout: 40000 })
        await this.addRefereesButtonForm.click();
        await this.refereeaddetText.waitForDisplayed({ timeout: 40000 })
        await this.refereesPopup.waitForClickable({ timeout: 40000 });
    } 
    async setRefereesSearchInput (value) {
        await this.refereesSearchInput.setValue(value)
        await this.firstUsername.waitForDisplayed({ timeout: 40000 });
    } 
    async clickDeletereferees () {
        await this.deleteReferees.waitForClickable({ timeout: 40000 });
        await this.deleteReferees.click()
        await this.confimrdeleteReferees.waitForDisplayed({ timeout: 40000 });
    } 
    async clickConfirmDeletereferees () {
        await this.confimrdeleteReferees.click();
        await this.refereesPopup.waitForClickable({ timeout: 40000 });
    }   
    async clickAdditReferee () {
        await this.additReferres.waitForClickable({ timeout: 40000 });
        await this.additReferres.click()
        await this.chancgeStutusRefereeListbox.waitForDisplayed({ timeout: 40000 });
    } 
    async clickChancgeStutusRefereeListbox () {
        await this.chancgeStutusRefereeListbox.click()
        //await this.chancgeStutusRefereeInactive.waitForDisplayed({ timeout: 40000 });
    }  
    async clickChancgeStutusRefereeInactive () {
        await this.chancgeStutusRefereeInactive.click()
        await this.chancgeStutusRefereeButton.waitForClickable({ timeout: 40000 });
    }  
    async clickChancgeStutusRefereeActive () {
        await this.chancgeStutusRefereeActive.click()
        await this.chancgeStutusRefereeButton.waitForClickable({ timeout: 40000 });
    }
    async clickChancgeStutusRefereeButton () {
        await this.chancgeStutusRefereeButton.click()
        await this.inactiveStatusReferee.waitForDisplayed({ timeout: 40000 });
    }
    async clickAddButton () {
        await this.chancgeStutusRefereeButton.click()
        await this.inactiveStatusReferee.waitForDisplayed({ timeout: 40000 });
    }  

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('_/_officials-mgmt');
    }
}

module.exports = new RefereesPage();
