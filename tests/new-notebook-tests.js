
function expect(a) {
  return {
    toEqual: function(b) {
      if (a === b) {
        console.log("Pass")
      } else {
        console.log("Fail")
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}

it("notebook initialises with empty entries array", function(){
  var notebook = new Notebook;
  expect(notebook.entries.length).toEqual(0)
})

it("addEntry method add a note to notebook.entries", function(){
  var notebook = new Notebook;
  var note = new Note;
  notebook.addEntry(note);
  expect(notebook.viewEntries()).toEqual(notebook.entries)
})

it("is a member of the Notebook class", function() {
  var notebook = new Notebook;
  expect(notebook.__proto__.constructor).toEqual(Notebook)
})
