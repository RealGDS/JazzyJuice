// scriptminigame.js

const backgroundMusic = document.getElementById('background-music');
const musicToggleButton = document.getElementById('music-toggle');
let isMusicPlaying = false;

// Function to toggle the background music
function toggleBackgroundMusic() {
  if (isMusicPlaying) {
    backgroundMusic.pause();
  } else {
    backgroundMusic.play();
  }
  isMusicPlaying = !isMusicPlaying;
}

// Add a click event listener to the music toggle button
musicToggleButton.addEventListener('click', toggleBackgroundMusic);

// Start playing the background music
backgroundMusic.play();
