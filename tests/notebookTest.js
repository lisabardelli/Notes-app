
var assert = {
  isTrue: function(assertionToCheck, testNumber) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log(testNumber + ": Assertion passed: " + assertionToCheck);
    }
  }
};


(function() {
    var notebook;
    function testCreateNewNotebookHasEntriesProperty() {
        notebook = new Notebook();
        assert.isTrue(notebook.entries.length === 0, "#testCreateNewNotebookHasEntriesProperty()");
        // if(notebook.entries.length !== 0 ) {
        //     throw new Error("entries should be equal to []");
        // } else {
        //     console.log("Test passed. It creates a new notebook")
        // }
    };
testCreateNewNotebookHasEntriesProperty();
})();

(function(){
  var notebook;
  var note;
  function testAddNewNoteToNotebook() {
    notebook = new Notebook();
    note = new Note();
    notebook.addEntry(note)
    assert.isTrue(notebook.entries.includes(note), "#testAddNewNoteToNotebook()")
    // if(!notebook.entries.includes(note) ) {
    //   throw new Error(`Entry should include ${note}`);
    // } else {
    //   console.log("Test passed. Entry added to notebook")
    // }
  }
  testAddNewNoteToNotebook();
})();

(function() {
  var notebook;
  var note;
  function testViewNotes() {
    notebook = new Notebook();
    note = new Note();
    notebook.addEntry(note);
    assert.isTrue(notebook.viewEntries() === notebook.entries, "#testViewNotes()")
    // if (!notebook.viewEntries() === notebook.entries) {
    //   throw new Error(`This method should return ${notebook.entries.text}`);
    // } else {
    //   console.log("Test passed: viewNotes returns note in entries");
    // }
  }
  testViewNotes();
}());
