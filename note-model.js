'use strict'

function Note(text) {
  this.text = text;

}

Note.prototype = (function() {

  function getText() {
    return this.text;
  }

  return {
    getTextPublic: getText
  }


})();