import {deployHeader} from "./headerComponent.js";
import {deployFooter} from "./footerComponent.js";
import {deployMainBody} from "./homeComponent.js";
import {deployAboutBody} from "./aboutComponent.js";
import {deployStoryBody} from "./storyComponent.js";
import {deployGalleryBody} from "./galleryComponent.js";
import {deployCalendar} from "./calendarComponent.js";
import {deployNavigator} from "./navigatorComponent.js";
// import {toggleProgram} from "./toggleComponent.js";

window.addEventListener('load', deployHeader());
window.addEventListener('load', deployFooter());
window.addEventListener('load', deployMainBody());
window.addEventListener('load', deployNavigator());
// document.addEventListener("DOMContentLoaded", () => toggleProgram());

// Home Component Navigation
const goHome = document.querySelector("#homeButton");
const goHomeMobile = document.querySelector("#homeButtonMobile");

goHome.addEventListener("click", () => homeNavigator());
goHomeMobile.addEventListener("click", () => homeNavigator());



// About Component Navigation
const goAbout = document.querySelector("#aboutButton");
const goAboutMobile = document.querySelector("#aboutButtonMobile");
const goFootAbout = document.querySelector("#footAboutButton");

goAbout.addEventListener("click", () => aboutNavigator());
goAboutMobile.addEventListener("click", () => aboutNavigator());
goFootAbout.addEventListener("click", () => aboutNavigator());


// Stories Component Navigation
const goStories = document.querySelector("#storiesButton");
const goStoriesMobile = document.querySelector("#storiesButtonMobile");
// const expandStories = document.querySelector("#expandButton");

goStories.addEventListener("click", () => storiesNavigator());
goStoriesMobile.addEventListener("click", () => storiesNavigator());
// expandStories.addEventListener("click", () => toggleProgram());

// Gallery Component Navigation
const goGallery = document.querySelector("#galleryButton");
const goGalleryMobile = document.querySelector("#galleryButtonMobile");
const goFootGallery = document.querySelector("#footGalleryButton");

goGallery.addEventListener("click", () => galleryNavigator());
goGalleryMobile.addEventListener("click", () => galleryNavigator());
goFootGallery.addEventListener("click", () => galleryNavigator());

// Calendar Component Navigation
const goCalendar = document.querySelector("#calendarButton");
const gofootCalendar = document.querySelector("#footCalendarButton");
const goCalendarMobile = document.querySelector("#calendarButtonMobile");


goCalendar.addEventListener("click", () => calendarNavigator());
gofootCalendar.addEventListener("click", () => calendarNavigator());
goCalendarMobile.addEventListener("click", () => calendarNavigator());




function clearMain(){
    document.getElementById('mainContent').innerHTML = "";
}

function homeNavigator(){
    clearMain();
    // deployNavigator();
    deployMainBody();

}

function aboutNavigator(){
    clearMain();

    deployAboutBody();

}

function storiesNavigator(){
    clearMain();

    deployStoryBody();



}

function galleryNavigator(){
    clearMain();

    deployGalleryBody();

}

function calendarNavigator(){
    clearMain();

    deployCalendar();

}