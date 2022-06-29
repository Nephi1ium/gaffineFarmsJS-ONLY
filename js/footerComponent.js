
function deployFooter (){
    const footerItem = 
`
<footer class="mainFooter">
<h4 id="aboutFooter" class="footerleft">About</h4>
<h4 id="socialFooter" class="footercenter">Social</h4>
<h4 id="storiesFooter" class="footerright">Stories</h4>
</footer>`;
document.getElementById("mainFooter").innerHTML = footerItem;

}


export {deployFooter};


{/* <a href="" id="aboutFooter" class="footerleft">About</a>
<a href="" id="socialFooter" class="footercenter">Social</a>
<a href="" id="storiesFooter" class="footerright">Stories</a> */}