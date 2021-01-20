// document.getElementById("textbox").innerHTML = txt
let entries = []

let button = document.getElementById('create-button')
button.addEventListener("click", function() {
    let area = document.getElementById('textbox')
    let text = area.value
    let note = new Note(text)
    area.value = ""
    entries.push(note)
    viewEntries()
    })
    
    function viewEntries() {
        let entriesDiv = document.getElementById("notes")
        notes.innerHTML = ""
        entries.forEach(function(note) {
            entriesDiv.appendChild(note.elementForDisplay())
        });
    } 