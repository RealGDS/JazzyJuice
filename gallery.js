// Get references to the gallery elements
const galleryImages = document.querySelectorAll(".gallery-images img");
const imageOverlay = document.getElementById("image-overlay");
const enlargedImage = document.getElementById("enlarged-image");

// Add event listeners to the gallery images
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    enlargeImage(image);
  });
});

// Add event listener to the image overlay
imageOverlay.addEventListener("click", (event) => {
  if (
    event.target === imageOverlay ||
    event.target === enlargedImage
  ) {
    return;
  }

  closeImageOverlay();
});

// Function to enlarge the clicked image
function enlargeImage(image) {
  const src = image.getAttribute("src");
  const alt = image.getAttribute("alt");

  enlargedImage.setAttribute("src", src);
  enlargedImage.setAttribute("alt", alt);

  imageOverlay.style.display = "flex";
}

// Function to close the image overlay
function closeImageOverlay() {
  imageOverlay.style.display = "none";
}
