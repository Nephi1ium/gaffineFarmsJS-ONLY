import {imageGallery} from "../js/array/imagegallery.js";

function deployCarousel(n){
        let counter = 1
        const slides = imageGallery;
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        console.log(slides, "Slides")
        

        const setImage = () => {
       document.getElementById("imageCarousel").src = slides[counter];
       counter = (counter+1)  % slides.length;
      }
      
      setInterval(setImage, 4000);
    
}

export {deployCarousel};










