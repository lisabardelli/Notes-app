(function() {
    var note;
    function testCreateNewNote() {
        var note = new Note();
        if(note.text !== "test") {
            throw new Error("text should be equal to 'test'");
        } else {
            console.log("Test passed. It creates a new note")
        }
    };
testCreateNewNote();
})();

