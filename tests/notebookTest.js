(function() {
    var notebook;
    function testCreateNewNotebookHasEntriesProperty() {
        var notebook = new Notebook();
        if(notebook.entries.length !== 0 ) {
            throw new Error("entries should be equal to []");
        } else {
            console.log("Test passed. It creates a new notebook")
        }
    };
testCreateNewNotebookHasEntriesProperty();
})();

(function(){
  
});
