const LoginPage = require('../pageobjects/login.page');
const RefereesPage = require('../pageobjects/referees.page');
const SchedulesPage = require('../pageobjects/schedules.page');
const assert =require('assert')
const randomeTime =Math.floor(Math.random() * 10) + 1 +":" + Math.floor(Math.random() * 5)+Math.floor(Math.random() * 10)+" PM"

xdescribe('Test case 5  Goto Schedules page - Competition: Season = Real Madrid - Real Madrid', () => {
    it('Open Schedules page', async () => {
        await SchedulesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the competition list', async () => {
        await SchedulesPage.clickCompetetionList()
    })
    it('Click on the Real Madrid on competition list', async () => {
        await SchedulesPage.clickCompetetionRealMadrid();
    })

});
xdescribe('Test case 6 Add game', () => {
    it('Open Schedules page', async () => {
        await SchedulesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the competition list', async () => {
        await SchedulesPage.clickCompetetionList()
        await browser.pause(2000)
    })
    it('Click on the First Fridey on competition list', async () => {
        await SchedulesPage.clickCompetetionFirstFridey();
    })

    it('Click on the game schedules Popup menu', async () => {
        await SchedulesPage.clickSchedulesPopUp()
    })
    it('Click on the add game icon (+)', async () => {
        await SchedulesPage.clickAddGameIcon();
    })
    it('Click on the Grouping list ', async () => {
        await SchedulesPage.clickGroupingList();
    })
    it('Click on the Gender ', async () => {
        await SchedulesPage.clickGender();
    })
    it('Click on the Age 10 ', async () => {
        await SchedulesPage.clickAddAge10();
    })
    it('Click on the location list ', async () => {
        await SchedulesPage.clickLocationList();
    })
    it('Click on the leon day field ', async () => {
        await SchedulesPage.clickAddLeonDayField();
    })
    it('Click on the surface Leon ', async () => {
        await SchedulesPage.clickAddSurfaceLeon();
    })
    it('Click on the date list ', async () => {
        await SchedulesPage.clickDateGame();
    })
    it('Click on the years ', async () => {
        await SchedulesPage.clickYears();
    })
    it('Click on the 2100 years ', async () => {
        await SchedulesPage.clickYears2100();
    })
    it('Set date game curent day of the month ', async () => {
        await SchedulesPage.clickSetDateGame();
    })
    it('Set random time a game', async () => {
        await SchedulesPage.setTimeGame(randomeTime);
        await browser.pause(1000);
    })

    it('click on the home team list ', async () => {
        await SchedulesPage.clickHomeTeamList();
    })
    it('set home team 1st fridey ', async () => {
        await SchedulesPage.clickSetHomeTeam1stFriday();
    })
    it('click on the away team list ', async () => {
        await SchedulesPage.clickAwayTeamList();
    })
    it('set await team 2st fridey ', async () => {
        await SchedulesPage.clickSetAwayTeam2stFriday();
    })
    it('click add button  ', async () => {
        await SchedulesPage.clickAddButton();
    })
    it('Find the new game by date and confirm', async () => {
        await browser.refresh();
        await SchedulesPage.setGameSearchInput('2099');
        await browser.pause(2000)
        await expect(SchedulesPage.gameAsset).toHaveTextContaining('2099')
    })
});

xdescribe('Test case 7 edit game', () => {
    it('Open Schedules page', async () => {
        await SchedulesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the competition list', async () => {
        await SchedulesPage.clickCompetetionList()
        await browser.pause(2000)
    })
    it('Click on the First Fridey on competition list', async () => {
        await SchedulesPage.clickCompetetionFirstFridey();
    })
    it('Find the new game by date ', async () => {
        await SchedulesPage.setGameSearchInput('2099');
    })
    
    it('click on the edit game button ', async () => {
        await SchedulesPage.clickAdditGame()
        await browser.pause(2000)
    }) 
    
    it('edit game location and save ', async () => {
        const gameLocation = await $('#venueIdDisplay')
        if( await gameLocation.getValue() ==='Leon Day Field / Leon'){
            await SchedulesPage.clickLocationList();
            await SchedulesPage.clickAddBillsStudion();
            await SchedulesPage.clickSetSurfaceFieldOne();
            await SchedulesPage.clickChancgeStutusGameButton();
            await expect(SchedulesPage.locationFiledSearhResultcheckBiils).toHaveTextContaining('Bills')
        }
        else if (await gameLocation.getValue() ==='Bills Stadium / Field One'){
            await SchedulesPage.clickLocationList();
            await SchedulesPage.clickAddLeonDayField();
            await SchedulesPage.addSurfaceLeon.click();
            await SchedulesPage.clickChancgeStutusGameButton();
            await expect(SchedulesPage.locationFiledSearhResultcheckLeon).toHaveTextContaining('Leon')
        }
    })

});
xdescribe('Test case 8 delete game', () => {
    it('Open Schedules page', async () => {
        await SchedulesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the competition list', async () => {
        await SchedulesPage.clickCompetetionList()
        await browser.pause(2000)
    })
    it('Click on the First Fridey on competition list', async () => {
        await SchedulesPage.clickCompetetionFirstFridey();
    })
    
    it('Find the new game by date ', async () => {
        await SchedulesPage.setGameSearchInput('2099');
    })
    
    it('click on the delete button ', async () => {
        await SchedulesPage.clickDeleteGame()
        
    })
    it('confitm delete ', async () => {
        await SchedulesPage.clickConfirmDeleteGame();
    })
});
