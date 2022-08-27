const LoginPage = require('../pageobjects/login.page');
const RefereesPage = require('../pageobjects/referees.page');
const assert =require('assert')

xdescribe('test case 1 User login with valid data ', () => {
    it('should login with valid credentials', async () => {
        //Open Referees page
        await RefereesPage.open();
        await browser.maximizeWindow()
        //User see "DEMOSPHERE" in the title
        await expect(browser).toHaveTitle('DEMOSPHERE')
        // Set input field valid data and Click on button Sign in
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
        //Wait for displayed titlte text Referees on Referis page
        await RefereesPage.refereesTitle.waitForDisplayed({ timeout: 40000 })
        //Expect browser url contains text "officials-mgmt"
        await expect(browser).toHaveUrlContaining('officials-mgmt')
        await browser.pause(1000)
       // await browser.reloadSession()
    })
   
});
xdescribe('test case 13 User Log out', () => {
    it('Open Referees Page', async () => {
        await RefereesPage.open();
        await browser.maximizeWindow()
        if( await browser.getTitle() === 'DEMOSPHERE'){
            await LoginPage.login('alidem2', 'Alidem2');
        }
        await browser.maximizeWindow()
        
    })
    it('click on the profile button', async () => {
        await LoginPage.clickProfile()
    })
    it('click on the click Logout', async () => {
        await LoginPage.clickLogout()
    })
   
});


