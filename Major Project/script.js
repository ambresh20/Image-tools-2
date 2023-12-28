

// ******* Toggle --> dark & light mode  *******
// var icon = document.getElementById("icons") ;

// icon.onclick = function(){
//     document.body.classList.toggle("dark-theme") ;
//     if(document.body.classList.contains("dark-theme")) {
//         icon.src = "/asset/dark theme icon/sun.png"
//     } else {
//         icon.src = "/asset/dark theme icon/moon2.png" ;
//     }
// }



// *********** button go to Top   ****************
let mybutton = document.getElementById("myBtn");
		
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	mybutton.style.display = "block";
  } else {
	mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}