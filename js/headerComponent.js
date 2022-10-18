import {deployCarousel} from "./carouselComponent.js";



function deployHeader (){
    const headerItem = 
`
<header class="mainHeader">
<div class="mainPhoto">
<img id=imageCarousel class="mainPhoto carousel_image"></img>
</div>
<h2 class="title">Gaf-Fine Farms</h2>
<h4 class="subtitle">Family owned and operated since an Unknown Date</h4>
</header>`;
deployCarousel();
document.getElementById("mainHeader").innerHTML = headerItem;

}


export {deployHeader};








