const assert =require('assert')
const LoginPage = require('../pageobjects/login.page');
const RefereesPage = require('../pageobjects/referees.page');
const SchedulesPage = require('../pageobjects/schedules.page');
//create random email
const randomEmail = Math.random().toString(36).substring(2,18)+"@gmail.com";


xdescribe('Test case 2 Add a valid referee and confirm', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the referees button', async () => {
        await RefereesPage.clickReferresButton()
    })
    it('Click on the referees Popup menu', async () => {
        await RefereesPage.clickReferresPopUp()
    })
    it('Click on the add referees icon (+)', async () => {
        await RefereesPage.clickaddReferresIcon();
    })
    it('Set input email,firstname,lastname', async () => {
        await RefereesPage.setDataReferee(randomEmail,'firstUserName123', 'lastUserName');
    })
    it('Set gender male', async () => {
        await RefereesPage.setReferresGender();
    })
    it('Click on the add button of the form', async () => {
        await RefereesPage.clickAddRefereesButtonForm();
    })

    it('Find the new refeees by name (assert)', async () => {
        await browser.refresh();
        await RefereesPage.setRefereesSearchInput('firstUserName123');
        await browser.pause(1000)
        //result search contains "firstUserName123"
        await expect(RefereesPage.firstUsername).toHaveTextContaining('firstUserName123')
    })

});
xdescribe('Test case 3 edit referee', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the referees button', async () => {
        await RefereesPage.clickReferresButton()
    })

    it('Find the new refeees by name ', async () => {
        await RefereesPage.setRefereesSearchInput('firstUserName123');
        await RefereesPage.firstUsername.waitForDisplayed({ timeout: 40000 });
    })
    
    it('click on the edit button ', async () => {
        await RefereesPage.clickAdditReferee()
    }) 

    it('Change status referee for active or inactive ', async () => {
        const refereeStatus = await $('#mui-component-select-status')
        if( await refereeStatus.getText() ==='Inactive'){
            //click on the referee list
            await RefereesPage.clickChancgeStutusRefereeListbox()
            await RefereesPage.chancgeStutusRefereeActive.waitForDisplayed({ timeout: 40000 })
            await RefereesPage.clickChancgeStutusRefereeActive()
            await RefereesPage.clickChancgeStutusRefereeButton()
            await expect(RefereesPage.statusRefereeActive).toHaveText('ACTIVE');
        }
        else if (await refereeStatus.getText() ==='Active'){
            await RefereesPage.clickChancgeStutusRefereeListbox()
            await RefereesPage.chancgeStutusRefereeInactive.waitForDisplayed({ timeout: 40000 })
            await RefereesPage.clickChancgeStutusRefereeInactive()
            await RefereesPage.clickChancgeStutusRefereeButton()
            await expect(RefereesPage.statusRefereeInactive).toHaveText('INACTIVE');
        }
    }) 


});
xdescribe('Test case 4 delete  referee', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the referees button', async () => {
        await RefereesPage.clickReferresButton()
    })

    it('Find the new refeees by name ', async () => {
        await RefereesPage.setRefereesSearchInput('firstUserName123');
        await RefereesPage.firstUsername.waitForDisplayed({ timeout: 40000 });
    })
    
    it('click on the delete button', async () => {
        await RefereesPage.clickDeletereferees()
        
    })
    it('confitm delete ', async () => {
        await RefereesPage.clickConfirmDeletereferees();  
    }) 

});

