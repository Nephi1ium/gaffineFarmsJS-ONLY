






function toggleProgram (){

const toggleBtn = document.querySelectorAll('.toggle-heading');

toggleBtn.forEach(item => {
  item.addEventListener('click', event => {
    let toggleTgt = item.nextElementSibling;
    toggleTgt.classList.toggle('noShow');
  })
});
console.log("Toggle Successful!");
}


export {toggleProgram};