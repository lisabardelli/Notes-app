it("is a member of the Notebook class", function() {
  var note = new Note;
  expect(note.__proto__.constructor).toEqual(Note)
})
