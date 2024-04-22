

class DeleteNoteScreen {

    get existingNote() {
        return $('//*[@text="My first note"]');
    }

    get moreBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get burgerMenu() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashList() {
        return $('//*[@text="Trash Can"]');
    }

    async deleteExistingNote() {
        await this.existingNote.click();
        await this.moreBtn.click();
        await this.deleteBtn.click();
        await driver.acceptAlert();
        await expect(this.existingNote).not.toBeDisplayed();
    }

    async verifyNoteDetails() {
        await this.burgerMenu.click();
        await this.trashList.click();
        await driver.pause(3000);
        await expect(this.existingNote).toBeDisplayed();
    }
}
module.exports = new DeleteNoteScreen();
