var prevScrollpos = window.pageYOffset;
navbar_height = document.querySelector('.navbar').offsetHeight;
let hamburgerClicked = false;
let maxWidth = screen.width;
let maxOffsetWidth = window.offsetWidth;

const matricDisplay = document.getElementById("matric");
const intermediateDisplay = document.getElementById("intermediate");
const undergraduateDisplay = document.getElementById("graduation");

$('body').bind('touchstart', function() {});

// if(maxWidth < 1050){

//     var build_classes = document.getElementsByClassName(".hid");
//     // console.log(build_classes)

//     for(var build_class of build_classes){
//         // console.log(build_class);
//         build_class.classList.remove(".build");
//         // build_class.classList.add("build");
//     }
// }

if(maxWidth < 440){
    document.getElementById("nav-scroll").style.width = (maxWidth)+"px";
}

document.getElementById("abone").addEventListener("mouseenter", function(){
    document.getElementById("abone").style.height = 157.5+"px";
    document.getElementById("abtwo").style.height = 112.5+"px";
    
    const matricS = "2006 - 2016 \nSecured 92.17%.";
    matricDisplay.textContent = matricS;

});
document.getElementById("abone").addEventListener("mouseleave", function(){
    document.getElementById("abone").style.height = 125+"px";
    document.getElementById("abtwo").style.height = 125+"px";

    const matricS = "";
    matricDisplay.textContent = matricS;
});

document.getElementById("abtwo").addEventListener("mouseenter", function(){
    document.getElementById("abone").style.height = 115+"px";
    document.getElementById("abtwo").style.height = 145+"px";
    document.getElementById("abthree").style.height = 115+"px";

    const intermediateS = "2016 - 2018 \nSecured 61.87%.";
    intermediateDisplay.textContent = intermediateS;
    
});
document.getElementById("abtwo").addEventListener("mouseleave", function(){
    document.getElementById("abone").style.height = 125+"px";
    document.getElementById("abtwo").style.height = 125+"px";
    document.getElementById("abthree").style.height = 125+"px";

    const intermediateS = "";
    intermediateDisplay.textContent = intermediateS;
});

document.getElementById("abthree").addEventListener("mouseenter", function(){
    document.getElementById("abthree").style.height = 187.5+"px";
    document.getElementById("abtwo").style.height = 62.5+"px";

    const gradS = "2019 - present \nElectrical Engineering minors in \nComputer Science.\nSecured 8.1GPA(till date)."
    undergraduateDisplay.textContent = gradS;
    
});
document.getElementById("abthree").addEventListener("mouseleave", function(){
    document.getElementById("abtwo").style.height = 125+"px";
    document.getElementById("abthree").style.height = 125+"px";

    const gradS = ""
    undergraduateDisplay.textContent = gradS;
});

// setInterval(coolcheck, 1000);

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


// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.target.elements.name.value = '';
//     e.target.elements.email.value = '';
//     e.target.elements.message.value = '';
//   });
