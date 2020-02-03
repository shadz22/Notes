'use strict'

function NoteList() {
  this.notes = [];

}

NoteList.prototype = (function() {

  function createNote(text) {
    var note = new Note(text);
    this.notes.push(note);
    return note;
  }

  function getNotes() {
    return this.notes;
  }

  return {
    createNotePublic: createNote,
    getNotesPublic: getNotes
  }


})();