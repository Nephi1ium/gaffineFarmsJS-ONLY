const stories = [
    '../src/stories/Lorem Ipsum Romani.docx', 
    
    '../src/stories/Lorem Ipsum English.docx', 

    '../src/stories/Lorem Ipsum Hvarti.docx', 
];


function deployStoryBody (){

let content = document.querySelector('#mainContent');


 stories.forEach(story => {    
         content.innerHTML = content.innerHTML +
         `<div class="card">
            <div class="card-header">
                <h4> Story </h4>
                <div class="card-body">
                <div>${story}</div>
                </div>
            </div>
        </div>`;
        });
    };




export {deployStoryBody};