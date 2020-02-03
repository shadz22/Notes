'use strict'

function testTextStoredInNote() {
  var note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
}

testTextStoredInNote();

function testReturnsText() {
  var note = new Note("Hi");
  assert.isTrue(note.getTextPublic() === "Hi");
}

testReturnsText();