import {videoGallery} from "../js/array/videogallery.js";




function deployVideoGalleryBody (){

    function showVideos() {
    
        const videoDisplay = document.getElementById('mainContent');

        // document.getElementById('mainContent').innerHTML = "";
     
        for (let i = 0; i < videoGallery.length; i++) {
            const videoElement = document.createElement('video');
            videoElement.classList.add('video');
            video2Element.src = videoGallery[i];
            galleryDisplay.appendChild(videoElement);
        }

    }
     
    showVideos();

}





export {deployVideoGalleryBody};




