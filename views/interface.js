// document.getElementById("textbox").innerHTML = txt
let entries = []
var string;

let button = document.getElementById('create-button')
button.addEventListener("click", function() {
    let area = document.getElementById('textbox')
    let text = area.value
    let note = new Note(text)
    area.value = ""
    entries.push(note)
    note.assignId(entries.indexOf(note))
    viewEntries()
    // emojifyText()
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
          entriesDiv.appendChild(note.elementForDisplay())
          let noteDiv = document.getElementById(note.id)
          noteDiv.insertAdjacentHTML("afterend", "<br>")
        });
  }

  function getPostData(text) {
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
      // console.log(res)
      return res.json()
    })
    .then(data => {
      // console.log(data)
      // document.getElementById("notes").insertAdjacentHTML('afterend', `<p>${data.emojified_text}</p>`);
     return data.emojified_text
    })
  }

  // function emojifyText() {
  //   let listDiv = document.querySelector("#notes")
  //   console.log(listDiv)
  //   console.log('above should be the listDiv')
  //   // save entire div as variable
  //   let divContent = listDiv.innerHTML
  //   console.log(divContent)
  //   console.log('above should be the divContent')
  //   // clear the div
  //   listDiv.textContent = ""
  //   console.log(listDiv)
  //   console.log('above should be an empty string printed')
  //   // shove the variable through the getEMoji method
  //   let newContent = getPostData(divContent)
  //   console.log(getPostData(divContent))
  //   console.log(newContent)
  //   console.log('above should be the entire new div with emojis')
  //   // re-insert the output of getEMoji method
  //   listDiv.innerHTML = newContent
  // }

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



    // access the array at the index number which corresponds with hash number
    // get the full text of that note
    // show this using an HTML element


    // when the hash changes (after a note is clicked)
    // we see the full text of an individual note on its own page
    // then there needs to be a button that takes you to the original page
