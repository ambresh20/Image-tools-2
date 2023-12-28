document.addEventListener('DOMContentLoaded', () => {
	const API_TOKEN = "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";

	const form = document.getElementById('generate-form');
	const loading = document.getElementById('loading');
	const resultImageContainer = document.getElementById('resultImageContainer');
  
	form.addEventListener('submit', handleSubmit);
  
	async function handleSubmit(event) {
	  event.preventDefault();
	  loading.style.display = 'flex';
  
	  const input = document.getElementById('input').value;
	  const response = await fetch(
		"https://api-inference.huggingface.co/models/prompthero/openjourney",
		{
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_TOKEN}`,
		  },
		  body: JSON.stringify({ inputs: input }),
		}
	  );
  
	  if (!response.ok) {
		throw new Error("Failed to generate image");
	  }
  
	  const blob = await response.blob();
	  resultImageContainer.innerHTML = `<img src="${URL.createObjectURL(blob)}" alt="art" />`;
	  loading.style.display = 'none';
	}
});




// footer section adjusments to the bottom parts of when images are showing
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const content = document.querySelector("#outputContainer");
    const footer = document.querySelector(".footer");
  
    const adjustFooter = () => {
      const contentHeight = content.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (contentHeight < windowHeight) {
        const footerHeight = footer.offsetHeight;
        content.style.minHeight = `calc(70vh - ${footerHeight}px)`;
      }
    };
  
    // Call adjustFooter initially and on window resize
    adjustFooter();
    window.addEventListener("resize", adjustFooter);
  });

  