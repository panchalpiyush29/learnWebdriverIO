describe('iOS find elements', () => {

    it('find element by accessibilityId', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find element by tagName', async () => {
        //single element
        console.log(await $('XCUIElementTypeStaticText').getText());
        //multiple elements
        const textElements = await $$('XCUIElementTypeStaticText');

        for (const element of textElements) {
            console.log(await element.getText());
        }
    });

    it('find element by xpath', async () => {
        // xpath --> //tagName[@attribute='value']
        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find element by class chain', async () => {
        const elementAlertView = '**/XCUIElementTypeStaticText[`name CONTAINS "Alert"`]';
        await $(`-ios class chain:${elementAlertView}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find element by predicate sting', async () => {
        const elementAlertView = 'name == "Alert Views"';
        await $(`-ios predicate string:${elementAlertView}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('search text field', async () => {
        const searchField = '//XCUIElementTypeSearchField';
        await $('~Search').click();
        await $('~Default').click();
        await $(searchField).addValue("I love India");
        await $('~Clear text').click();
        await expect(await $(searchField).getText()).toBe("");
    });

    it('vertical scroll generic', async () => {
        await driver.execute('mobile: scroll', {direction: "down"});
        await driver.execute('mobile: scroll', {direction: "up"});
    })

    it('picker view scroll', async () => {
        await $('~Picker View').click();

        const redPicker = '~Red color component value';
        const greenPicker = '~Green color component value';
        const bluePicker = '~Blue color component value';

        //set purple colour
        await $(redPicker).addValue('125');
        await $(greenPicker).addValue('0');
        await $(bluePicker).addValue('125');

        await driver.pause(2000);
    })

})
