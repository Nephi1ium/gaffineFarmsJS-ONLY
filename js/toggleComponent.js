






function toggleProgram (){

const toggleBtn = document.querySelectorAll('.expandButton');

toggleBtn.forEach(item => {
  item.addEventListener('click', event => {
    let toggleTgt = item.nextElementSibling;
    toggleTgt.classList.toggle('fileViewer');
  })
});
console.log("Toggle Successful!");
}


// export {toggleProgram};