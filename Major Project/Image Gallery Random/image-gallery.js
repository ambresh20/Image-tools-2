// picsum.photos/200/300/?random/1

const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const imgContainer = document.querySelector('.img-container');

submit.addEventListener('click', async function() {
    const count = input.value;
    console.log(count)
    if( count < 1 || count >= 500) {
        alert('Please enter a number between 1 and 500');
    }else {
        imgContainer.innerHTML = "" ;
        for( let i=0; i < count; i++) {
            const img = document.createElement('img');
            img.src = `https://picsum.photos/300/300/?random/${i}`;
            imgContainer.appendChild(img);
        }
    }
});




// footer section adjusments to the bottom parts of when images are showing
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const content = document.querySelector(".img-container");
    const footer = document.querySelector(".footer");
  
    const adjustFooter = () => {
      const contentHeight = content.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (contentHeight < windowHeight) {
        const footerHeight = footer.offsetHeight;
        content.style.minHeight = `calc(100vh - ${footerHeight}px)`;
      }
    };
  
    // Call adjustFooter initially and on window resize
    adjustFooter();
    window.addEventListener("resize", adjustFooter);
  });
  