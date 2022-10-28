//create an array with some colors
const colors = ["red","blue","yellow","40AF23","rgb(23,56,78)","purple"];
//get the "click me" button by its id
const btn = document.getElementById("btn");
//get the span element with a class of "name"
const name = document.querySelector(".name");
//listening for click event on button and invoking the function
btn.addEventListener("click",function(){
    const r = randnum();
    console.log(r);

    document.body.style.backgroundColor = colors[r];
    name.textContent = colors[r];
})

//function definition to generate a random number 
function randnum() {
    return Math.floor(Math.random() * colors.length);
    const v = Math.ceil(40.3345);
    console.log(v);  
    
}                        