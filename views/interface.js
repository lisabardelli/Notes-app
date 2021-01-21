// document.getElementById("textbox").innerHTML = txt
let entries = []

let button = document.getElementById('create-button')
button.addEventListener("click", function() {
    let area = document.getElementById('textbox')
    let text = area.value
    let note = new Note(text)
    area.value = ""
    entries.push(note)
    note.assignId(entries.indexOf(note))
    viewEntries()
    })

    function viewEntries() {
        let entriesDiv = document.getElementById("notes")
        notes.innerHTML = ""
        entries.forEach(function(note) {
            entriesDiv.appendChild(note.elementForDisplay())
        });
    }



    makeUrlChangeShowNoteForCurrentPage();

    function makeUrlChangeShowNoteForCurrentPage() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
      console.log(accessTheHash(window.location))
      showNote(accessTheHash(window.location));
    };


    // function accessTheHash(location) {
    //   return location.hash.split('#')[1];
    // }

    function accessTheHash(location) {
      return location.hash.split("#")[1]
        // let notes = entries
        // for( var i in notes) {
        //   if (id == notes[i].id) {
        //     return notes[i].text
        //   }
        // }
      };

    function showNote(id) {
      console.log(entries)
      document.getElementById('full-note-text').innerHTML = `<p> ${entries[id].text} </p><br>`
    };


    // access the hash number
    //access the array at the index number which corresponds with hash number
    // get the full text of that note
    // show this using an HTML element


    // when the hash changes (after a note is clicked)
    // we see the full text of an individual note on its own page
    // then there needs to be a button that takes you to the original page
