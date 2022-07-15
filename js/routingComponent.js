import {deployHeader} from "./headerComponent.js";
import {deployFooter} from "./footerComponent.js";
import {deployMainBody} from "./homeComponent.js";
import {deployAboutBody} from "./aboutComponent.js";
import {deployStoryBody} from "./storyComponent.js";
import {deployGalleryBody} from "./galleryComponent.js";


window.addEventListener('load', deployHeader());
window.addEventListener('load', deployFooter());
window.addEventListener('load', deployMainBody());

// Home Component Navigation
const goHome = document.querySelector("#homeButton");

goHome.addEventListener("click", () => homeNavigator());



// About Component Navigation
const goAbout = document.querySelector("#aboutButton");
const goFootAbout = document.querySelector("#footAboutButton");

goAbout.addEventListener("click", () => aboutNavigator());
goFootAbout.addEventListener("click", () => aboutNavigator());


// Stories Component Navigation
const goStories = document.querySelector("#storiesButton");

goStories.addEventListener("click", () => storiesNavigator());

// Gallery Component Navigation
const goGallery = document.querySelector("#galleryButton");

goGallery.addEventListener("click", () => galleryNavigator());



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

function storiesNavigator(){
    deployHeader();
    deployFooter();
    deployStoryBody();

}

function galleryNavigator(){
    deployHeader();
    deployFooter();
    deployGalleryBody();

}