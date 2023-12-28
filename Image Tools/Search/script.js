
// fr89Ghh-POsOJTFs1RovMeguQIFZG8gV-sqkYyYlz08 

const accessKey = "fr89Ghh-POsOJTFs1RovMeguQIFZG8gV-sqkYyYlz08" ;

const formEl = document.querySelector("form") ;
const inputEl = document.getElementById("search-input") ;
const searchResults = document.querySelector(".search-results") ;
const showMore = document.getElementById("show-more-button") ;

let inputData = "" ;
let page = 1 ;

async function searchImages(){
	inputData = inputEl.value ;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}` ;

	const response = await fetch(url) ;
	const data = await response.json() ;

	const results = data.results ;

	if(page === 1){
		searchResults.innerHTML = "" ;
	}

	results.map((result) =>{
		const imageWrapper = document.createElement("div") ;
		imageWrapper.classList.add("search-result") ;
		const image = document.createElement("img") ;
		image.src = result.urls.small ;
		image.alt = result.alt_description ;
		const imageLink = document.createElement("a") ;
		imageLink.href = result.links.html ;
		imageLink.target = "_blank" ;
		imageLink.textContent = result.alt_description ;

		imageWrapper.appendChild(image) ;
		imageWrapper.appendChild(imageLink) ;
		searchResults.appendChild(imageWrapper) ;
	}) ;

	page++ ;
	if(page > 1){
		showMore.style.display = "block" ;
	}
}

formEl.addEventListener("submit", (event) =>{
	event.preventDefault() ;
	page = 1 ;
	searchImages() ;
})

showMore.addEventListener("click", (event) =>{
	searchImages() ;
})




// Heading Stylish
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').addEventListener('mousemove', function(e) {
      var rXP = e.pageX - this.offsetLeft - this.offsetWidth / 2;
      var rYP = e.pageY - this.offsetTop - this.offsetHeight / 2;
  
      this.style.textShadow = rYP / 10 + 'px ' + rXP / 80 + 'px rgba(227,6,19,.8), ' +
                             rYP / 8 + 'px ' + rXP / 60 + 'px rgba(255,237,0,1), ' +
                             rXP / 70 + 'px ' + rYP / 12 + 'px rgba(0,159,227,.7)';
    });
});