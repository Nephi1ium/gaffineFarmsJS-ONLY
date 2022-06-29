import {deployHeader} from "./headerComponent.js";
import {deployFooter} from "./footerComponent.js";
import {deployMainBody} from "./homeComponent.js";
import {deployAboutBody} from "./aboutComponent.js";



window.addEventListener('load', deployHeader());
window.addEventListener('load', deployFooter());
window.addEventListener('load', deployMainBody());


const goHome = document.querySelector("#homeButton");
const goAbout = document.querySelector("#aboutButton");

goHome.addEventListener("click", () => homeNavigator());
goAbout.addEventListener("click", () => aboutNavigator());

function homeNavigator(){
    deployHeader();
    deployFooter();
    deployMainBody();

}

function aboutNavigator(){
    deployHeader();
    deployFooter();
    deployAboutBody();

}