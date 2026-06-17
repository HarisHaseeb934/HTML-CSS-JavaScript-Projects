let toastbox = document.getElementById("toastbox");

function addtoast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastbox.appendChild(toast);
    if(msg.includes('Error')){
        toast.classList.add("error");
    }
    if(msg.includes('Invalid')){
        toast.classList.add("invalid");
    }
    setTimeout(()=>{
        toast.remove(); 
    },6000)
}