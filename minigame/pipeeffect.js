const spaceSound = new Audio('sounds/metal pipe.mp3.mp3');
let soundEnabled = true;

const soundToggleButton = document.getElementById('new-toggle');

// Function to toggle the sound state
function toggleSound() {
  soundEnabled = !soundEnabled;
  // Optionally, add visual feedback or UI changes based on the sound state
}

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    if (soundEnabled) {
      spaceSound.currentTime = 0; // Rewind the sound to the beginning
      spaceSound.play().catch(function(error) {
        console.log('Failed to play sound:', error);
      });
    }
  }
});

// Event listener for button click event
soundToggleButton.addEventListener('click', function() {
  toggleSound();
});
