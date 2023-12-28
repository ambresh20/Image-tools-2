
let profilePic = document.getElementById("profile-pic") ;
let fileInput = document.getElementById("fileInput") ;
let imageURL;


fileInput.onchange = function(){
	profilePic.src = URL.createObjectURL(fileInput.files[0]) ;
}


function submitHandler(){
    // console.log("click");
    const fileInput = document.getElementById('fileInput');
    // console.log(fileInput.files);
    const image = fileInput.files[0];

    // Multipart file
    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = "zyKVZZLTwu4TQFFWTBrLj8tK";

    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers: {
            'X-Api-Key': apiKey
        },
        body: formData
    })
    .then(function(reponse){
            return reponse.blob()
    })
    .then(function(blob){
            // console.log(blob);
            const url = URL.createObjectURL(blob);
            imageURL = url;
            // const img = document.createElement('img');
            // img.src = url;
            // document.body.appendChild(img);
			profilePic.src = url ;
    })
    .catch(function(error){
		console.error(error) ;
	});
}


function downloadFile(){

    var a = document.createElement('a'); //<a></a>
    a.href = imageURL;
    a.download = 'naciasv.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



// ######## Navigation Bar ########
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-default');

  button.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
});



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