let text = document.getElementById("text");
let qrcode = document.querySelector(".qrcode");
let img = document.querySelector("#img");

document.getElementById("gen").addEventListener("click",(e)=>{
    let inputtext = text.value;
    if(text.value.length > 0){
         img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputtext}`;
    }else{
        text.classList.add("error");
        setTimeout(() => {
            text.classList.remove("error");
        }, 3000);
    }

    // img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputtext}`;
    
    text.value = "";
})
