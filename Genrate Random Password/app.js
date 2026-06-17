
let genpass = document.getElementById("genpass")

document.getElementById("genbtn").addEventListener("click", (e) => {
    e.preventDefault();
    let numbers = document.getElementById("numbers").checked
    let symbols = document.getElementById("symbols").checked
    let uppercase = document.getElementById("uppercase").checked
    let lowercase = document.getElementById("lowercase").checked

    let length = document.getElementById("length").value

    let chars = "";
    if (numbers) {
        chars += "0123456789";
    }
    if (symbols) {
        chars += "!@#$%^&*()_+[]{}<>?";
    }
    if (uppercase) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (chars === "") {
        genpass.value = "Check At least on Box"
    } else {
        let password = "";
        for (let i = 1; i <= length; i++) {
            let random = Math.floor(Math.random() * chars.length)
            password += chars[random]
        }
        console.log(password)

        genpass.value = shuffle(password);
    }


})
function shuffle(str) {
    let arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
        return arr.join("")
    }
}

document.getElementById("img").addEventListener("click", (e) => {
    e.preventDefault()
    let textcopy = document.getElementById("genpass");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
})

