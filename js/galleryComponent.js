import {imageGallery} from "../js/array/imagegallery.js";




function deployGalleryBody (){

    function showImages() {
    
        const galleryDisplay = document.getElementById('mainContent');

        // document.getElementById('mainContent').innerHTML = "";
     
        for (let i = 0; i < imageGallery.length; i++) {
            const imageElement = document.createElement('img');
            imageElement.classList.add('img');
            imageElement.src = imageGallery[i];
            galleryDisplay.appendChild(imageElement);
        }

    }
     
    showImages();

}





export {deployGalleryBody};








// const galleryOfImages = 
// imageGallery.forEach(image => {
//     let img = document.createElement('img');
//     img.src = image;
//     console.log("image", image);
//     return `<img class="img" src="${image}" width="500" height="600"></img> `;
// });
// document.getElementById("mainContent").innerHTML = galleryOfImages;
// console.log("Image Showing", galleryOfImages)
// }

// container.appendChild(docFrag);


// const galleryOfImages = 
// imageGallery.forEach(image=> {

//     `<img class="img" src="${image}" width="500" height="600"></img> `;
//     });
//     document.getElementById("mainContent").innerHTML = galleryOfImages;
// console.log("Image Showing", galleryOfImages)


// };


// var imgs = ['http://lorempizza.com/380/240', 'http://dummyimage.com/250/ffffff/000000', 
// 'http://lorempixel.com/g/400/200/', 'http://lorempixel.com/g/400/200/sports/'];
// var container = document.getElementById('mainContent');
// var docFrag = document.createDocumentFragment();




// const galleryOfImages = 
// imageGallery.forEach(function(Image) {    // for each link l in ArrayOfImages
//     let img = document.createElement('img'); // create an img element
//     console.log("is the image created?")
//     img.src = Image;  
//     console.log("It was, is the image appended?")                       // set its src to the link l
//     document.body.appendChild(img);  
//     console.log("it was, is it not appending?")
//     // append it to the body 
//   });

// document.getElementById("mainContent").innerHTML = galleryOfImages;