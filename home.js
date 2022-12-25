// function check(){
//     ch = false;
// }
let maxWidth = screen.width;
let hamburgerClicked = false;
const button = document.getElementById('hamburger');
button.addEventListener("click", function openNav(){
    document.getElementById("mySidenav").style.width = "250px";

    if(hamburgerClicked){
        closeNav();
    }
    hamburgerClicked=!hamburgerClicked;
})

// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     check = false;
//     check = !check;
//     if(!check){
//         closeNav();
//     }
// }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
