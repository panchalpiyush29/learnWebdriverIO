class ListScreen {

    get createListButton() {
        return $('//*[@name="Create list"]');
    }

    get listNameInput() {
        return $('//*[@value="List Name"]');
    }

    get createButton() {
        return $('~Create');
    }

    get listHeading() {
        return $('~My first list');
    }

    async createANewList(listName) {
        await this.createListButton.click();
        await this.listNameInput.addValue(listName);
        await this.createButton.click();
    }
}

module.exports = new ListScreen();
