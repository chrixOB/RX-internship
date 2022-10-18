var num = document.getElementById("num");
num.textContent = 0;

let d = document.getElementById("decrease")
d.addEventListener("click", function (){
    num.textContent -= 1;
    num.style.color = "red";
})

let r = document.getElementById("reset")
r.addEventListener("click", function (){
    num.textContent = 0;
    num.style.color = "black";
})

let i = document.getElementById("increase")
i.addEventListener("click", function (){
    num.textContent++;
    num.style.color = "green";
})

