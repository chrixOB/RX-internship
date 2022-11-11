const popup = document.querySelector(".pop-up-form");
const loginBtn = document.querySelector(".login-button");
const closeBtn = document.querySelector(".fa-xmark");

loginBtn.addEventListener("click", openmodal);
closeBtn.addEventListener("click", closemodal);
window.addEventListener("click", outsideclick);

function openmodal(){
    popup.style.display = "block";
}

function closemodal(){
    popup.style.display = "none";
}

function outsideclick(e){
    if(e.target=="popup"){
         closemodal()
    }
}

const d = document.getElementById("io");
const m = document.getElementById("move");
d.addEventListener("click", function slide(){
    m.style.animation = "left-right 2.5s ease-in forwards";
})