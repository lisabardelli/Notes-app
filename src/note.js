class Note {
  constructor(text) {
    this.text = text;
    this.id;
  }

  elementForDisplay() {
    let textElement = document.createElement("a")
    textElement.setAttribute("id", `${this.id}`)
    textElement.setAttribute("class", "note-link")
    textElement.setAttribute("href", `#${this.id}`)
    textElement.textContent = this.text.substring(0, 20)
    return textElement
  }

  assignId(number) {
    this.id = number;
  }
}

// myPara.setAttribute("id", "id_you_like");
