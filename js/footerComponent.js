
function deployFooter (){
    const footerItem = 
`
<footer class="mainFooter">
<button id="footAboutButton" class="footerleft footerBut">About</button>
<button id="footCalendarButton" class="footercenter footerBut">Calendar</button>
<button id="footGalleryButton" class="footerright footerBut">Gallery</button>
</footer>`;
document.getElementById("mainFooter").innerHTML = footerItem;

}


export {deployFooter};




{/* <h4 id="aboutFooter" class="footerleft">About</h4>
<h4 id="socialFooter" class="footercenter">Social</h4>
<h4 id="storiesFooter" class="footerright">Stories</h4> */}