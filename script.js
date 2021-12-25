window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        document.querySelector("nav").style.backgroundColor = "#0099ff";
    }
    else {
        document.querySelector("nav").style.backgroundColor = "transparent";
    }
}  
const btnNav = document.querySelector(".nav-checkbox");
const hamWarp = document.querySelector(".ham-wrapper");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link");
const hamSpan = document.querySelectorAll(".ham-span");

btnNav.addEventListener("click", function(){
    for (let i = 1; i <= hamSpan.length; i++) {
        hamSpan[i - 1].classList.toggle(`s${i}-active`);
    }
    hamWarp.classList.toggle("colored");
    navLinks.classList.toggle("animate");
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function(){
        for (let i = 1; i <= hamSpan.length; i++) {
            hamSpan[i - 1].classList.remove(`s${i}-active`);
        }
        navLinks.classList.remove("animate");
        hamWarp.classList.remove("colored");
    });
}

const year = document.querySelector(".year");
const getYear = new Date().getFullYear();
year.innerHTML = getYear;