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

// const d = document.getElementById("io");
// const m = document.getElementById("move");
// d.addEventListener("click", function slide(){
//     m.style.animation = "left-right 2.5s ease-in forwards";
// })

const menu = document.querySelector(".fa-bars");
const option = document.querySelector(".display-menu");

menu.addEventListener("click", function hideshow(){
    option.classList.toggle("hide");
})

const arrow = document.getElementById("arrow");
const index = document.querySelector(".index");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

arrow.addEventListener("click", function extend(){
    index.classList.toggle("hide");
    second.classList.toggle("hide");
    third.classList.toggle("hide");
})

const last = document.querySelector("#arrow-last");
const link = document.querySelector(".help-links");

last.addEventListener("click", function() {
    link.classList.toggle("hide");
})

// (function(){
//     var topnavigation = document.querySelector('.slider__nav');
//     var navigationlinks = document.querySelector('.slider__nav a');
//     var activelink = document.querySelector('a.active');
//     var slide = document.querySelector('.active-link');

//     //adding click event listener to eack link
//     navigationlinks.forEach(link => {
//         link.addEventListener('click', slideToLink);
//     })

//     function slideToLink(e){
//         //remove active class
//         removeActiveClass();
//         //move to current slide
//         setActiveSlide(e.target);
//         //make the current link active

//     }

//     function removeActiveClass(){
//         //get the active link
//         activelink = document.querySelector('a.active')
//         //remove active class
//         activelink.classList.remove('active');
//         e.target.classList.add('active')
//     }

//     function setActiveClass(target){
//         //get the left point of target link
//         activelink = document.querySelector('a.active')
//         var left =getLeftValue(target);
//     }

//     function getLeftValue(targetLink){
//         var targetLeft = targetLink.getBoundingClientRect().left;
//         var topnavigationLeft = topnavigation.getBoundingClientRect().left;
//         return targetLeft - topnavigationLeft + 50;
//     }
  
//     setActiveSlide(activelink);
// })();


const options = {
    method: 'GET',
    headers: {
        'x-RapidAPI-Key':'SIGN-UP-FOR-KEY',
        'x-RapidAPI-Host':'unogsng.p.rapidapi.com'
    }
};
fetch('http://localhost:3000/comments',options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

person = {name:"paul", age: "27", position: "Senior developer"  }

console.log(person.name);