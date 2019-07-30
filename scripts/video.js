function create_new_video(){
    // creates a new element
    var video = document.createElement("video");
    // adds the src attr in it
    video.src = "video.mp4";
    // applying other optional attr
    video.width = 200; 
    video.height = 300;
    video.controls = true;
    
    // setting the attribute 
    video.setAttribute("id","vid");
    // adds to the end of body tag
    document.body.appendChild(video);
}

function getVideo() {
    // returning the above mentioned video that i've created dynamically in create_new_video function
	return document.getElementById("vid");
}