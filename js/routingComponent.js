import {deployHeader} from "./headerComponent.js";
import {deployFooter} from "./footerComponent.js";
import {deployMainBody} from "./homeComponent.js";
import {deployAboutBody} from "./aboutComponent.js";
import {deployStoryBody} from "./storyComponent.js";
import {deployCalendar} from "./calendarComponent.js";


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

// Calendar Component Navigation
const goCalendar = document.querySelector("#calendarButton");

goCalendar.addEventListener("click", () => calendarNavigator());




function clearMain(){
    document.getElementById('mainContent').innerHTML = "";
}

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
    clearMain();
    deployHeader();
    deployFooter();
    deployGalleryBody();

}

function calendarNavigator(){
    clearMain();
    deployCalendar();

}