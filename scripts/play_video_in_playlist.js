window.onload = init;
// Either use the above code or use onload method in body tag as a attribute. 

var myVideo;
var currentVideo = 0;

var sources = [
      "http://html5doctor.com/demos/video-canvas-magic/video.mp4",
"http://www.archive.org/download/AnimatedMechanicalArtPiecesAtMit/P1120973_512kb.mp4"
];

// Set the src of the video to the next URL in the playlist
// If at the end, we start again from beginning (the modulo
// source.length does this)
function loadNextVideo() {
   myVideo.src = sources[currentVideo++ % sources.length]
   myVideo.load();
   
}

// callback that loads and plays the next video
function loadAndplayNextVideo() {
   console.log("playing " + sources[currentVideo % sources.length])
   loadNextVideo();
   myVideo.play();
}

// Called when the page is loaded
function init(){
   // get the video element using the DOM api
   myVideo = document.querySelector("#video01");
   // Define a callback function called each time a video ends
   myVideo.addEventListener('ended', loadAndplayNextVideo, false);
   // Load the first video when the page is loaded.
   loadNextVideo();
}