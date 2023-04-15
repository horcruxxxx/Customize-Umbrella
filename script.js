function rotateImage() {
    var uploadedImage = document.getElementById('uploaded-image');
    var img = document.getElementById("umbrella");
    var loadingImage = document.getElementById("loading");
    
    img.style.display = "none";
    uploadedImage.style.display = 'none';
    loadingImage.classList.add("rotate"); // add rotate class
    loadingImage.style.display = "block";
    
    setTimeout(function() {
      img.style.display = "block";
      uploadedImage.style.display = 'block';
      loadingImage.style.display = "none";
      loadingImage.classList.remove("rotate"); // remove rotate class
    }, 1000);
  }
  
  function showImage(color) {
    rotateImage();
    var img = document.getElementById("umbrella");
    if (color === "blue") {
      img.src = "/assets/blue.png";
    } else if (color === "pink") {
      img.src = "/assets/pink.png";
    } else if (color === "yellow") {
      img.src = "/assets/yellow.png";
    }
  }

  function toggleFileInput() {
    const fileInput = document.getElementById("file-upload");
    if (fileInput.style.display === "none") {
        fileInput.style.display = "block";
    } else {
        fileInput.style.display = "none";
    }
}

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const uploadedImage = document.getElementById('uploaded-image');
    const mainImage = document.getElementById('umbrella');
    const width = mainImage.offsetWidth * 0.3;
    const height = mainImage.offsetHeight * 0.3;
    uploadedImage.innerHTML = `<img src="${url}" style="width: ${width}px; height: ${height}px; position: absolute; bottom: 0;"/>`;
  }