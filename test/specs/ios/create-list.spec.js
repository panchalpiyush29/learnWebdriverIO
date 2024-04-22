const listScreen = require('../../screenobjects/ios/list.screen');
const itemsScreen = require('../../screenobjects/ios/items.screen');
const listName = "My first list";
const itemName = "Buy grocery";
describe('test ios app', () => {

    it('create list test ', async () => {

        await listScreen.createANewList(listName);
        await expect(await listScreen.listHeading).toBeExisting();
    });

    it('to items test', async () => {
        await listScreen.listHeading.click();

        await itemsScreen.createAnItem(itemName);
        await expect(await itemsScreen.getBuyGroceryHeading).toBeExisting();

    })
})
