let name_error = document.getElementById("name-error");
let phone_error = document.getElementById("phone-error");
let email_error = document.getElementById("email-error");
let text_error = document.getElementById("text-error");
let submit_error = document.getElementById("submit-error");
let submit = document.getElementById("submit");

function validatename() {
    let name = document.getElementById("name").value;
    if (name.length == 0) {
        name_error.innerText = "Name is required";
        return false;
    } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        name_error.innerText = "Write Full Name";
        return false;
    } else {

        name_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validatephone() {
    let phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        phone_error.innerText = "Phone no is required";
        return false;
    } else if (phone.length !== 10) {
        phone_error.innerText = "Phone no shoulb be 10";
        return false;
    } else {

        phone_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function validateemail() {
    let email = document.getElementById("email").value;
    if (email.length == 0) {
        email_error.innerText = "Email is required";
        return false;
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        email_error.innerText = "Email Invalid";
        return false;
    } else {

        email_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
function validatetext() {
    let text = document.getElementById("message").value;
    let required = 10;
    let left = required - text.length
    if (left > 0) {
        text_error.innerText = `${left} is required`;
        return false;
    } else {

        text_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
submit.addEventListener("click", (e) => {
    e.preventDefault()

    if (!validatename() || !validatephone() || !validateemail() || !validatetext()) {
        submit_error.style.display = "block";
        submit_error.innerText = "Please Fix the Error";
        setTimeout(function () { submit_error.style.display = "none" }, 3000)
    }
})