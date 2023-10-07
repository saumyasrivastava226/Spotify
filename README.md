# Simple Spotify Clone

This is a simple Spotify clone project created using HTML, CSS, and JavaScript. It allows users to view a list of 4 songs and play them in real-time using the JavaScript Audio object.

## Features

- Display a list of 4 songs.
- Play and pause songs.
- Display song details such as title, artist, and album.
- Seek through the song's progress.
- Control volume.

## Technologies Used

- HTML
- CSS
- JavaScript

## Code Sample

Here is a simplified example of how the audio playback is implemented in JavaScript:

```javascript
// Create an audio element
const audio = new Audio();

// Set the source of the audio file
audio.src = 'song.mp3';

// Play the audio
audio.play();

// Pause the audio
audio.pause();

// Change the current time (seek)
audio.currentTime = 30;

// Adjust the volume
audio.volume = 0.5;
