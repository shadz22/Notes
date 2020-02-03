'use strict'

function testCreateNote() {
  var note_list = new NoteList();
  assert.isTrue(note_list.createNotePublic('Hello').getTextPublic() === 'Hello');
  assert.isTrue(note_list.notes.length === 1);
}

testCreateNote();

function testGetNotes() {
  var note_list = new NoteList();
  note_list.createNotePublic('Hello');
  note_list.createNotePublic('Hey');
  assert.isTrue(note_list.getNotesPublic().length === 2);
  assert.isTrue(note_list.getNotesPublic()[0].getTextPublic() === 'Hello');
}

testGetNotes();

