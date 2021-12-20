window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        document.querySelector("nav").style.backgroundColor = "#0099ff";
    }
    else {
        document.querySelector("nav").style.backgroundColor = "transparent";
    }
}  
