const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmithE', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).to.exist;
        expect(await browser.checkScreen('examplePaged_1', { /* some options */ })).equal(0);
        await expect(await SecurePage.flashAlert.getText()).to.have.string('You logged into a secure area!');
    });
});


