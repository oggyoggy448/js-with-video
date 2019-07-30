var vid = document.getElementById('video');
vid.addEventListener('ended', playNextVideo, false);
function playNextVideo(el){
    // it will not play anything because the link is youtube link 
    // in order to execute this code you need to give some website video link
    vid.src = "https://youtu.be/S-cb9lGMvFM?list=PLqoKJrCsBNERla0fEWbZK61UuYbQlX22k&t=136";
    vid.play();
}

