
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SchedulesPage extends Page {
     /**
     * define selectors using getter methods
     */
      get schedulesTubSidebar() { return $('[data-test="Schedules"]');}
      get schedulesTitle() { return $('[class="MuiTypography-root jss39 MuiTypography-h5"]');}
      get competetionList() { return $('[aria-labelledby="mui-component-select-competitions"]');}
      get competetionListConfirm() { return $('[class="MuiList-root MuiMenu-list MuiList-padding"]');}
      get competetionRealMadrid () { return $('[data-test="Real_Madrid"]');}
      get competetionRealMadridconfirmText() { return $('//h6[text()="Real Madrid Summer 2021"]');}
      get SchedulesPopup () { return $('[data-icon="ellipsis-vertical"]');}
      get addGame () { return $('[data-icon="plus"]');}
      get groupingList() { return $('#seasonalGroupingIdDisplay');}
      get addGender() { return $('[role="menuitem"]');}
      get addAge10() { return $('span [value="6287a10576883430e8aa8756"]');}
      get locationList() { return $('#venueIdDisplay');}
      get addLeonDayField() { return $('[value="620d737b71dc094c804905aa"]');}
      get addSurfaceLeon() { return $('span [value="620d73b344956dc5bc09af54"]');}
      get addDateGame() { return $('[name="startDate"]');}
      get setDateGame() { return $('[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-isSelected"]');}
      get setYears() { return $('[class="MuiToolbar-root MuiToolbar-regular MuiPickersToolbar-toolbar MuiToolbar-gutters"] h6');} 
      get setYears2100 () { return $('//div[text()="2099"]');} 
      get enterTimeGame() { return $('[name="startTime"]');}
      get homeTeamlist() { return $('#mui-component-select-homeTeamId');}
      get setHomeTeam1stFriday() { return $('[data-value="6287a10d2c7d9a5ea4f84d3c"]');}
      get awayTeamlist() { return $('#mui-component-select-awayTeamId');}
      get setAwayTeam2stFriday() { return $('[data-value="6287a1237688342c6daa873b"]');}
      get gameNumber() { return $('[name="gameNumber"]');} 
      get addButton() { return $('[class*="MuiButtonBase-root"][type="submit"]');}
      get refereesSearchInput () { return $('[type="search"]');}
      get gameAsset() { return $('//p[contains(text(),"99")]');}
      get additReferres() { return $('//p[contains(text(),"2099")]/parent::*/parent::*/parent::*//*[contains(@class,"actions")]//button');}
      get chancgeStutusRefereeButton () { return $('//*[text()="Save"]');}
      get setScoreAway() { return $('[name="awayTeam.score"]');}
      get billsStudion() { return $('[value="6255c296907f0a11184d5d65"]');}
      get setSurfaceFieldOne () { return $('[value="6255c2c244956dc5bc3b279d"]');}
      get locationFiledSearhResultcheckBiils() { return $('//p[contains(text(),"Bills")]');}
      get locationFiledSearhResultcheckLeon() { return $('//p[contains(text(),"Leon")]');}
      get confimrdeleteGame() { return $('(//*[contains(@class,"MuiDialogActions-root")]//button)[1]');}
      get deleteGame() { return $('//p[contains(text(),"2099")]/parent::*/parent::*/parent::*//*[contains(@class,"actions")]//*[@data-icon="trash-can"]');}
      get confirDeleteGameText() { return $('[data-icon="empty-set"]');}
      get frideyCompatition () { return $('[data-value="6287a0892c7d9a61bcf84d5f"]');}
      get duration() { return $('[class="MuiInputBase-input MuiOutlinedInput-input"][name="duration"]');}
      get rendomDateday() { return $$('[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"] [class="MuiIconButton-label"]');}
    


    /**
     * a method to encapsule automation code to interact with the page
     */
     async clickSchedulesTubSidebar () {
        await this.schedulesTubSidebar.click()
        await this.schedulesTitle.waitForDisplayed({ timeout: 40000 });
    }
    async clickCompetetionList () {
        await this.competetionList.waitForClickable({ timeout: 40000 });
        await this.competetionList.click()
        await this.competetionRealMadrid.waitForExist({ timeout: 40000 });
    }  
    async clickCompetetionRealMadrid() {
        await this.competetionRealMadrid.click()
        await this.competetionRealMadridconfirmText.waitForDisplayed({ timeout: 40000 });
    }
    async clickCompetetionFirstFridey() {
        await this.frideyCompatition.waitForDisplayed({ timeout: 40000 });
        await this.frideyCompatition.click()
        await this.SchedulesPopup.waitForClickable({ timeout: 40000 });
    }
    async clickSchedulesPopUp() {
        await this.SchedulesPopup.waitForDisplayed({ timeout: 40000 });
        await this.SchedulesPopup.click();
    }
    async clickAddGameIcon() {
        await this.addGame.click();
        await this.groupingList.waitForDisplayed({ timeout: 40000 });
    }
    async clickGroupingList() {
        await this.groupingList.click();
        await this.addGender.waitForDisplayed({ timeout: 40000 });
    }
    async clickGender() {
        await this.addGender.click();
        await this.addAge10.waitForExist({ timeout: 40000 });
    }
    async clickAddAge10() {
        await this.addAge10.click();
        await this.locationList.waitForClickable({ timeout: 40000 });
    }
    async clickLocationList() {
        await this.locationList.click();
        await this.addLeonDayField.waitForDisplayed({ timeout: 40000 });
    }
    async clickAddLeonDayField() {
        await this.addLeonDayField.click();
        await this.addSurfaceLeon.waitForExist({ timeout: 40000 });
    }
    async clickAddBillsStudion() {
        await this.billsStudion.click();
        await this.setSurfaceFieldOne.waitForExist({ timeout: 40000 });
    }
    async clickSetSurfaceFieldOne() {
        await this.setSurfaceFieldOne.click();
        await this.chancgeStutusRefereeButton.waitForClickable({ timeout: 40000 });
    }
    async clickAddSurfaceLeon() {
        await this.addSurfaceLeon.click();
        await this.addDateGame.waitForClickable({ timeout: 40000 });
    }
    async clickDateGame() {
        await this.addDateGame.click();
        await this.setYears.waitForDisplayed({ timeout: 40000 });
    }
    async clickYears() {
        await this.setYears.click();
        this.setYears2100.waitForDisplayed({ timeout: 40000 });
    }
    async clickYears2100() {
        await this.setYears2100.click();
        await this.setDateGame.waitForDisplayed({ timeout: 40000 });
    }
    async clickSetDateGame() {
        let allDays = [];
        const url= await $$('[class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day"]')
        //find all days link and put on array allDays
        for (const positions of await  url) {
            allDays.push(await positions) 
        }
        //get one random link
        let randLink = ~~(Math.random()*allDays.length)| 0;
        //save one random link
        let randomLinkValue=allDays[randLink];
        await randomLinkValue.click();
        await this.enterTimeGame.waitForClickable({ timeout: 40000 });
    }
    async setTimeGame(value) {
        await this.enterTimeGame.setValue(value);
        await this.homeTeamlist.waitForExist({ timeout: 40000 });
    }
    
    async clickHomeTeamList() {
        await this.homeTeamlist.click();
        await this.setHomeTeam1stFriday.waitForDisplayed({ timeout: 40000 });
    }
    async clickSetHomeTeam1stFriday() {
        await this.setHomeTeam1stFriday.click();
    }
    async clickAwayTeamList() {
        await this.awayTeamlist.click();
        await this.setAwayTeam2stFriday.waitForExist({ timeout: 40000 });
    }
    async clickSetAwayTeam2stFriday() {
        await this.setAwayTeam2stFriday.click();
        await this.addButton.waitForClickable({ timeout: 40000 });
    }
    async clickAddButton() {
        await this.addButton.click();
        await this.additReferres.waitForClickable({ timeout: 40000 });
    }
    async setGameSearchInput (value) {
        await this.refereesSearchInput.waitForClickable({ timeout: 40000 });
        await this.refereesSearchInput.setValue(value)
        await this.gameAsset.waitForClickable({ timeout: 40000 })
    } 
    async clickAdditGame () {
        await this.additReferres.waitForClickable({ timeout: 40000 });
        await this.additReferres.click()
        await this.locationList.waitForClickable({ timeout: 40000 });
    } 
    async additScoreAway (value) {
        await this.setScoreAway.setValue(value)

    } 
    async clickChancgeStutusGameButton () {
        await this.chancgeStutusRefereeButton.click()
        await this.gameAsset.waitForClickable({ timeout: 40000 })
    }
    async clickDeleteGame () {
        await this.deleteGame.waitForClickable({ timeout: 40000 });
        await this.deleteGame.click()
        await this.confimrdeleteGame.waitForClickable({ timeout: 40000 });
    } 
    async clickConfirmDeleteGame() {
        await this.confimrdeleteGame.click()
        await this.SchedulesPopup.waitForClickable({ timeout: 40000 })
    }  


   
     

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('_/_schedules');
    }
}

module.exports = new SchedulesPage();
