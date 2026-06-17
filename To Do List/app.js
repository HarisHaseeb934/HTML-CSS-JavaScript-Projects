let ul = document.querySelector(".ul");

function deletebtn(li) {
    li.remove();
}

function saveNoteToStorage(inputask) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(inputask);
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes)
}

function deletenotefromstorage(notetext) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note !== notetext)
    localStorage.setItem("notes", JSON.stringify(notes))
}

document.querySelector(".add").addEventListener("click", (e) => {
    e.preventDefault();
    let inputtext = document.querySelector(".input-text")
    let inputask = inputtext.value.trim();
    console.log(inputtext.value)
    addtask(inputask);
    saveNoteToStorage(inputask);
    inputtext.value = "";
})

function addtask(inputask) {
    let li = document.createElement("li")
    let p = document.createElement("p");

    let text = document.createTextNode(inputask);
    p.appendChild(text)

    let button = document.createElement("button")
    button.innerText = "x";
    button.style.fontSize = "20px"

    createcheckbox(li, p)
    li.appendChild(p)
    li.appendChild(button)
    ul.appendChild(li)
    button.addEventListener("click", () => {
        deletebtn(li)
        deletenotefromstorage(inputask)
    })
}

function createcheckbox(li, p) {
    let label = document.createElement("label");
    label.classList.add("container");
    let inputcheck = document.createElement("input");
    inputcheck.type = "checkbox";
    inputcheck.setAttribute("class", "check")
    let span = document.createElement("span");
    span.classList.add("checkmark");

    label.appendChild(inputcheck);
    label.appendChild(span);
    li.appendChild(label)


    inputcheck.addEventListener("change", () => {
        p.classList.toggle("mark");
    });
}
window.onload = () => {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];    
    notes.forEach(note => {
        addtask(note);
    });
}

