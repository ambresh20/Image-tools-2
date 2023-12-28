
const loading = document.getElementById('loading');

document.getElementById('imageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    loading.style.display = 'block';
    const textInput = document.getElementById('textInput').value;

    fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ inputs: textInput }),
        }
    )
        .then((res) => res.blob())
        .then((blob) => {
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = ''; // Clear previous image
            const img = document.createElement('img');
            img.src = window.URL.createObjectURL(blob);
            imageContainer.appendChild(img);
            loading.style.display = 'none';
        });
});
