
// NavBar responsive Js
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toogleNavbar =() =>{
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", () =>toogleNavbar());



// Toggle --> dark & light mode
var icon = document.getElementById("icons") ;

icon.onclick = function(){
    document.body.classList.toggle("dark-theme") ;
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "/asset/dark theme icon/sun.png"
    } else {
        icon.src = "/asset/dark theme icon/moon2.png" ;
    }
}