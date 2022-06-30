
function deployFooter (){
    const footerItem = 
`
<footer class="mainFooter">
<button id="footAboutButton" class="footerleft footerBut">About</button>
<button href="" id="socialFooter" class="footercenter footerBut">Calendar</button>
<button href="" id="storiesFooter" class="footerright footerBut">Gallery</button>
</footer>`;
document.getElementById("mainFooter").innerHTML = footerItem;

}


export {deployFooter};




{/* <h4 id="aboutFooter" class="footerleft">About</h4>
<h4 id="socialFooter" class="footercenter">Social</h4>
<h4 id="storiesFooter" class="footerright">Stories</h4> */}