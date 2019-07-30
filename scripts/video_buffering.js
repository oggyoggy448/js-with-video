window.onload = addMyListeners;

// require this tag in html file to execute this code
{/* <h1 id="loadStatus"></h1> */}

function getPercentProg() {

    var myVideo = document.getElementsByTagName('video')[0];
    // returns the duration that is already buffered
    var endBuf = myVideo.buffered.end(0);
    // expression returns the buffered video duration in form of percentage. moreover duration property returns the
    // total duration of video
    var soFar = parseInt(((endBuf / myVideo.duration) * 100));
    // putting the value of percentage in content of selected element
    document.getElementById("loadStatus").innerHTML = soFar + '%';
}
// Will be called as soon as the page is ready on desktop computer,
// Only when a user clicks on play control or image on mobile
function myAutoPlay() {
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.play();
}
function addMyListeners(){
    var myVideo = document.getElementsByTagName('video')[0];
    // 
    myVideo.addEventListener('progress', getPercentProg, false);
    // Calls autoplay only if the device is adapted
    myVideo.addEventListener('canplaythrough', myAutoPlay, false);
}


