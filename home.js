var prevScrollpos = window.pageYOffset;
navbar_height = document.querySelector('.navbar').offsetHeight;
let hamburgerClicked = false;

function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

const button = document.getElementById('hamburger');
button.addEventListener("click", function openNav(){
    let maxWidth = screen.width;
    if(maxWidth<501){
        document.getElementById("mySidenav").style.width = maxWidth+"px";
    }else{
        document.getElementById("mySidenav").style.width = "300px";
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
