var prevScrollpos = window.pageYOffset;
navbar_height = document.querySelector('.navbar').offsetHeight;
// function check(){
//     ch = false;
// }

let hamburgerClicked = false;

const button = document.getElementById('hamburger');
button.addEventListener("click", function openNav(){
    let maxWidth = screen.width;
    if(maxWidth<501){
        document.getElementById("mySidenav").style.width = maxWidth+"px";
    }else{
        document.getElementById("mySidenav").style.width = "250px";

    } 
    if(!hamburgerClicked){
        closeNav();
    }
    hamburgerClicked=!hamburgerClicked;
});

button.addEventListener("click", function(){
    el_autohide = document.querySelector(".autohide");
    el_autohide.classList.add('scrolled-down');
});


function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
}


document.addEventListener("DOMContentLoaded", hiding());

function hiding(){

    el_autohide = document.querySelector(".autohide");
    navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
        var last_scroll_top = 30;
        window.addEventListener('scroll', function() {
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
      // window.addEventListener
    }
    // if
  
}

// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
  
//     // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
//     if (currentScrollPos > 0) {
//       // I am using 'display' instead of 'top':
//       document.getElementById("nav-scroll").style.display = "none";
//     } else {
//       document.getElementById("nav-scroll").style.display = "initial";
//     }
// }