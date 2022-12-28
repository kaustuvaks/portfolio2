var prevScrollpos = window.pageYOffset;
navbar_height = document.querySelector('.navbar').offsetHeight;
let hamburgerClicked = false;
let maxWidth = screen.width;
let maxOffsetWidth = window.offsetWidth;


if(maxWidth < 440){
    document.getElementById("nav-scroll").style.width = (maxWidth)+"px";
}

document.getElementById("abone").addEventListener("mouseenter", function(){
    document.getElementById("abone").style.height = 187.5+"px";
    document.getElementById("abtwo").style.height = 62.5+"px";
    
});
document.getElementById("abone").addEventListener("mouseleave", function(){
    document.getElementById("abone").style.height = 125+"px";
    document.getElementById("abtwo").style.height = 125+"px";
});

document.getElementById("abtwo").addEventListener("mouseenter", function(){
    document.getElementById("abone").style.height = 93.75+"px";
    document.getElementById("abtwo").style.height = 187.5+"px";
    document.getElementById("abthree").style.height = 93.75+"px";
    
});
document.getElementById("abtwo").addEventListener("mouseleave", function(){
    document.getElementById("abone").style.height = 125+"px";
    document.getElementById("abtwo").style.height = 125+"px";
    document.getElementById("abthree").style.height = 125+"px";
});

document.getElementById("abthree").addEventListener("mouseenter", function(){
    document.getElementById("abthree").style.height = 187.5+"px";
    document.getElementById("abtwo").style.height = 62.5+"px";
    
});
document.getElementById("abthree").addEventListener("mouseleave", function(){
    document.getElementById("abthree").style.height = 125+"px";
    document.getElementById("abthree").style.height = 125+"px";
});

function coolcheck(){
    let x1 = document.getElementById("abone").style.height;
    let x2 = document.getElementById("abtwo").style.height;
    let x3 = document.getElementById("abthree").style.height;

    if(x1+x2+x3 <375){
        document.getElementById("abone").style.height = 125+"px";
        document.getElementById("abtwo").style.height = 125+"px";
        document.getElementById("abthree").style.height = 125+"px";
    }
}

setInterval(coolcheck, 1000);

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

const button = document.getElementById('hamburger');
button.addEventListener("click", function openNav(){
    if(maxWidth<501){
        document.getElementById("mySidenav").style.width = maxWidth+"px";
    }else{
        document.getElementById("mySidenav").style.width = "350px";
    } 
    if(!hamburgerClicked){
        closeNav();
    }
    hamburgerClicked=!hamburgerClicked;
});

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

document.addEventListener("DOMContentLoaded", hiding());

function hiding(){

    el_autohide = document.querySelector(".autohide");
    navbar_height = document.querySelector('.navbar').offsetHeight;
  
    if(el_autohide){
        var last_scroll_top = 30;
        window.addEventListener('scroll', function() {
            closeNav();
            let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                    el_autohide.classList.remove('scrolled-down');
                    el_autohide.classList.add('scrolled-up');
                }
                else {
                    el_autohide.classList.remove('scrolled-up');
                    el_autohide.classList.add('scrolled-down');
                }
                last_scroll_top = scroll_top;
        }); 
    }
}


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
