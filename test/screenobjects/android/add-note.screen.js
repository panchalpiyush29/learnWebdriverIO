class AddNoteScreen {

    get skipButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
    }

    get addNoteText() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]');
    }

    get addText() {
        return $('//*[@text="Text"]');
    }

    get editText() {
        return $('//*[@text="Editing"]');
    }

    get noteHeading() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteBody() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    get editNoteBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }


    async skipTutorial() {
        await this.skipButton.click();
        await expect(this.addNoteText).toHaveText("Add note");
    }

    async addANewNote(noteHeading, noteBody) {
        await this.addNoteText.click();
        await this.addText.click();
        await expect(this.editText).toBeDisplayed();
        await this.noteHeading.setValue("My first note");
        await this.noteBody.setValue("One\nTwo\nThree");
        await driver.back();
        await driver.back();
    }

    async verifyNoteDetails(noteDetails) {
        await expect(this.editNoteBtn).toBeDisplayed();
        await expect(this.viewNote).toHaveText(noteDetails);
    }
}

module.exports = new AddNoteScreen();
