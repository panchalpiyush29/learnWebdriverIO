
class ItemsScreen {

    get getCreateItem() {
        return $('//*[@name="Create item"]');
    }

    get getTitle() {
        return $('//*[@value="Title"]');
    }

    get getCreateButton() {
        return $('~Create');
    }

    get getBuyGroceryHeading() {
        return $('~Buy grocery');
    }

    async createAnItem(itemName) {
        await this.getCreateItem.click();
        await this.getTitle.addValue(itemName);
        await this.getCreateButton.click();
    }


}module.exports = new ItemsScreen();
