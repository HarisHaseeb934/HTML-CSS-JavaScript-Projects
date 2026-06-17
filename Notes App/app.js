let p_container = document.getElementById("p-contain");

window.onload = () => {
    p_container.innerHTML = localStorage.getItem("notes");
}
function update() {
    localStorage.setItem("notes", p_container.innerHTML);
}
document.getElementById("create-btn").addEventListener("click", () => {
    let p = document.createElement("p");
    p.className = "input-notes";
    p.setAttribute("contenteditable", "true");

    let img = document.createElement("img");
    img.src = "delete.png";

    p.appendChild(img);
    p_container.appendChild(p);
});

p_container.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        update()
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-notes");
        notes.forEach(note => {
            note.onkeyup = () => {
                update();
            }
        })
    }
})


