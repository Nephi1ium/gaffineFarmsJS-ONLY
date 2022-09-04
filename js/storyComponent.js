import {stories} from "./array/stories.js";
import {toggleProgram} from "./toggleComponent.js"


function deployStoryBody (){

    let content = document.querySelector('#mainContent');
    let toggle = toggleProgram();
 stories.forEach(story => {    
         content.innerHTML = content.innerHTML +
         `
         <button class="expandButton" onClick="toggle">+</button>
         <object class="fileViewer"data="${story}" type="application/pdf" width="500px" height="600px"> </object>
        
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
