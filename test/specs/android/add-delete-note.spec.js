const addNoteScreen = require('../../screenobjects/android/add-note.screen');
const deleteNoteScreen = require('../../screenobjects/android/delete-note.screen');
const noteHeading = "My first note";
const noteBody = "One\nTwo\nThree";

describe('Add Notes', () => {

    it('skip the tutorial', async () => {
        //skip tutorial
        await addNoteScreen.skipTutorial();
    });

    it('add a note', async () => {
        //add a note
        await addNoteScreen.addANewNote(noteHeading, noteBody);
        //verify note is added
        await addNoteScreen.verifyNoteDetails(noteBody);
    });

    it('delete a note', async () => {
        await driver.back();

        //delete existing note
        await deleteNoteScreen.deleteExistingNote();

        //verify note is present in trash can
        await deleteNoteScreen.verifyNoteDetails();
    });
});
