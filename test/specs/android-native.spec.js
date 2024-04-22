describe('Android Native', () => {

    it('Package and Activity', async () => {

        await driver.startActivity("io.appium.android.apis",
            ".app.AlertDialogSamples");
        await driver.pause(3000);

        const title = $('//*[@text="App/Alert Dialogs"]')
        await expect(title).toBeExisting();

        await $('~OK Cancel dialog with a message').click();
        await driver.dismissAlert();
        await expect(title).toBeExisting();

    })

    it('scroll vertical', async () => {

        await $('~App').click();
        await $('~Activity').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await expect($('~Secure Dialog')).toBeExisting();
    })

    it('scroll horizontal', async () => {

        await driver.startActivity("io.appium.android.apis", ".view.Gallery1");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000)
    });

    it('date widget', async () => {

        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");
        const lblDate = await $('id=io.appium.android.apis:id/dateDisplay');
        const currentDate = await lblDate.getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@text="14"]').click();
        await $('id=android:id/button1').click();
        await driver.pause(3000);
        await expect(await lblDate.getText()).not.toEqual(currentDate);
    });

})
