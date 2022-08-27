const assert =require('assert')
const LoginPage = require('../pageobjects/login.page');
const RefereesPage = require('../pageobjects/referees.page');
const SchedulesPage = require('../pageobjects/schedules.page');
const CommunicationPage = require('../pageobjects/communication.page');
const LocationPage = require('../pageobjects/location.page');

xdescribe('Test case 9 Verify Referee Product Access Then user should see "Referees" ', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Confirm that the User sees the "Referees"  ', async () => {
        await expect(RefereesPage.refereesTitle).toHaveText('Referees')
    })
 
});
xdescribe('Test case 10 When I click on Communications Tab from sidebar Then I should see "Communications" ', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the Communications Tab from sidebar  ', async () => {
        await CommunicationPage.clickCommunicationTubSidbar()
    })
    it('User  should see "Communications"  ', async () => {
        await expect(CommunicationPage.communicationTitle).toHaveText('Communications')
    })
 
});
xdescribe('Test case 11 When I click on Locations Tab from sidebar Then I should see "Locations" ', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the Location Tab from sidebar  ', async () => {
        await LocationPage.clickLocationTubSidebar()
    })
    it('User  should see "Locations"  ', async () => {
        await expect(LocationPage.locationTitle).toHaveText('Locations')
    })
 
})
xdescribe('Test case 12 When I click on Schedules Tab from sidebar Then I should see "Schedules" ', () => {
    it('Open Referees page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
    })
    it('Click on the Schedules Tab from sidebar  ', async () => {
        await SchedulesPage.clickSchedulesTubSidebar()
    })
    it('User  should see "Schedules"  ', async () => {
        await expect(SchedulesPage.schedulesTitle).toHaveText('Schedules')

    })
 
})