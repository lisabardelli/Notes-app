var notebook;

describe("#Notebook", function(){
  
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

  it("should return an error when trying to addEntry and the note is empty", function(){
    note.text = ""
    expect(notebook.addEntry(note)).toThrowError("Text cannot be empty")
  })
  it("should return an error when trying to addEntry and the note is empty", function(){
    note.text = "Hello"
    expect(notebook.addEntry(note)).not_toThrowError("Text cannot be empty")
  })

  it("is a member of the Notebook class", function() {
    expect(notebook.__proto__.constructor).toEqual(Notebook)
  })
})