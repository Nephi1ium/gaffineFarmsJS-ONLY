
function deployFooter (){
    const footerItem = 
`
<img class="mainPhoto" src="../src/images/gma and gpa sign.jpg">
<footer class="mainfooter">
<h2 class="title">Gaf-Fine Farms</h2>
<h4 class="subtitle">Family owned and operated since 1904</h4>
</footer>`;
document.getElementById("mainFooter").innerHTML = footerItem;

}


export {deployFooter};