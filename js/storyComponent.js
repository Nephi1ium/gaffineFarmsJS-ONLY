import {stories} from "./array/stories.js";


function deployStoryBody (){

    let content = document.querySelector('#mainContent');
 stories.forEach(story => {    
         content.innerHTML = content.innerHTML +
         `
         <h3> ${story.name}   </h3>
         <h5>${story.description}</h5>
         <button class="expandButton" onClick="toggleProgram()">+</button>
         <div class="fileViewer">
            <a class="pdfDownloadButton" download="${story.link}" target="_blank" onClick="toggleProgram()" href="${story.link}">Download</a>
            <object class="pdfShow"data="${story.link}" type="application/pdf"> </object>
         </div>
        
        `;
        console.log("name of file", story);

 });

}

// NEED TO CREATE ACTION FOR BUTTON TO CHANGE CORRESPONDING CLASS LIST TO REMOVE THE CLASSLIST fileViewer
export {deployStoryBody};



// <p>Your web browser doesn't have a PDF plugin.
// <a href="${story}">click here to download the PDF file.</a></p>









// let content = document.querySelector('#mainContent');


//  stories.forEach(story => {    
//          content.innerHTML = content.innerHTML +
//          `<div class="card">
//             <div class="card-header">
//                 <h4> Story </h4>
//                 <div class="card-body">
//                 <p class="paragraph">${story}</p>
//                 </div>
//             </div>
//         </div>`;
//         });
//     };
