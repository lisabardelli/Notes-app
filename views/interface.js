
let entries = []
var stringText;

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


let backButton = document.getElementById('back-button')
backButton.addEventListener("click", function() {
    history.replaceState(null, null, " ");
    displayMainBody();
    document.getElementById('full-note-text').innerHTML = "";
    hideBackButton()
})



  function displayMainBody() {
    var hidden = document.querySelector('#main-body');
    hidden.style.display = (status !== 'open') ? 'block' : 'none';
  }

  function hideBackButton() {
    var homeButton = document.getElementById('back-button')
    homeButton.style.display = (status === 'open') ? 'block' : 'none';
  }

  function viewEntries() {
      let entriesDiv = document.getElementById("notes")
      notes.innerHTML = ""
      entries.forEach(function(note) {
          getPostData(`${note.text}`, `${note.id}`)
          let noteDiv = document.getElementById(`${note.id}`)
          console.log(noteDiv)
          // noteDiv.insertAdjacentHTML("afterend", "<br>")
        });
  }

  function getPostData(text, id) {
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: text
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      document.getElementById("notes").insertAdjacentHTML('beforeend', `<a href="#${id}" id="${id}">${data.emojified_text}</a><br>`);
    })
  }



    makeUrlChangeShowNoteForCurrentPage();

    function makeUrlChangeShowNoteForCurrentPage() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
      hideContent()
      showNote(accessTheHash(window.location));
      displayBackButton();
    };

    function displayBackButton() {
      var homeButton = document.getElementById('back-button')
      homeButton.style.display = (status !== 'open') ? 'block' : 'none';
    }

    function accessTheHash(location) {
      return location.hash.split("#")[1]
      };

    function showNote(id) {
      
      document.getElementById('full-note-text').innerHTML = `<p> ${entries[id].text} </p><br>`
    };

    function hideContent() {
        var hidden = document.getElementById("main-body")
        hidden.style.display = "none";
    };


