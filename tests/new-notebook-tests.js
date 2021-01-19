var notebook;

beforeEach(function(){
  notebook = new Notebook();
  note = new Note();
})

it("notebook initialises with empty entries array", function(){
  expect(notebook.entries.length).toEqual(0)
})

it("addEntry method add a note to notebook.entries", function(){
  notebook.addEntry(note);
  expect(notebook.viewEntries()).toEqual(notebook.entries)
})

it("is a member of the Notebook class", function() {
  expect(notebook.__proto__.constructor).toEqual(Notebook)
})
