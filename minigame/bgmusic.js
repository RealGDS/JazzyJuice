// Function to toggle the sound state
function toggleSound() {
    const audioElements = document.querySelectorAll('audio'); // Get all audio elements
  
    // Iterate through each audio element and toggle the sound state
    audioElements.forEach((audio) => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  
    // Optionally, add visual feedback or UI changes based on the sound state
  }
  
