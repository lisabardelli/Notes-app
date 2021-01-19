class Notebook {

  constructor() {
    this.entries = []
  }

  addEntry(note) {
    this.entries.push(note);
  }

  viewEntries() {
    return this.entries;
    console.log(this.entries);
  }
}





// var result = this.entries.map(myFunction);
// function myFunction(entry, index, array) {
//   return entry.text;
// }
// console.log(result);
