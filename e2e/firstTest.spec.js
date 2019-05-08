const loginPage = require('./pages/login');

describe('Connect&Login', () => {
  beforeEach(async () => {
    await device.launchApp({delete: true});
    await device.reloadReactNative();
  });


  it('should login to test server', async () => {
    // await loginPage.connectToServer();
    await element(by.id('to-login')).tap();
    await loginPage.logIn();
    await expect(element(by.id('home-page'))).toExist();
  });

});