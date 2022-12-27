var prevScrollpos = window.pageYOffset;
navbar_height = document.querySelector('.navbar').offsetHeight;
// function check(){
//     ch = false;
// }

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
      // window.addEventListener
    }
    // if
  
}

// $(document).ready(function() {

//     //window and animation items
//     var animation_elements = $.find('.animation-element');
//     var web_window = $(window);
  
//     //check to see if any animation containers are currently in view
//     function check_if_in_view() {
//       //get current window information
//         var window_height = web_window.height();
//         var window_top_position = web_window.scrollTop();
//         var window_bottom_position = (window_top_position + window_height);
  
//       //iterate through elements to see if its in view
//         $.each(animation_elements, function() {
    
//             //get the element sinformation
//             var element = $(this);
//             var element_height = $(element).outerHeight();
//             var element_top_position = $(element).offset().top;
//             var element_bottom_position = (element_top_position + element_height);
    
//             //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
//             if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
//             element.addClass('in-view');
//             } else {
//             element.removeClass('in-view');
//             }
//         });
  
//     }
//     $(window).on('scroll resize', function() {
//         check_if_in_view()
//     })
//     $(window).trigger('scroll');
  
// });