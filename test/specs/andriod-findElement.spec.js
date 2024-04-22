describe('Android Find Element', () => {

    it('find element by accessibility id', async () => {
        //find element
        const appOption = await $('~App');
        //click element
        await appOption.click();
        //assert element
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it('find element by classname', async () => {
        //find element

        const accessibility = await $('android.widget.TextView');

        await expect(accessibility).toHaveText("API Demos");
    })

    it('find element by xpath', async () => {
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await $('//android.widget.TextView[@text="Command two"]').click();

        const textAssertion = await $('android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");

    });

    it('Find multiple elements', async () => {

        const expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics',
            'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'];

        const actualList = [];

        //find element
        const textList = await $$('android.widget.TextView');

        //loop throught elements
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        //assert elements
        await expect(actualList).toEqual(expectedList);

    })

    it('Enter and validate text', async () => {
        const countryName = "India";
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('~1. Screen Top').click();

        const txtCountry = await $('id=io.appium.android.apis:id/edit');
        await txtCountry.setValue(countryName);
        await expect(txtCountry).toHaveText(countryName);
    })
});
