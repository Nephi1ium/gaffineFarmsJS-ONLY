


    function mainNavComponent(){
        const hnav =
            `<nav class="allNav">
                <nav class="fullSizeNav">
                    <button class="mainNavigationBut" id="homeButton">Home</button>
                    <button class="mainNavigationBut" id="aboutButton">About</button>
                    <button class="mainNavigationBut" id="storiesButton">Stories</button>
                    <button class="mainNavigationBut" id="galleryButton">Gallery</button>
                    <button class="mainNavigationBut" id="calendarButton">Calendar</button>

                </nav>

                <button class="hamButton" id="hamNavButton"></button>

                <nav id="mobileNav" class="mobileNav">

                    <button class="mobileNavigationBut" id="homeButtonMobile">Home</button>
                    <button class="mobileNavigationBut" id="aboutButtonMobile">About</button>
                    <button class="mobileNavigationBut" id="storiesButtonMobile">Stories</button>
                    <button class="mobileNavigationBut " id="galleryButtonMobile">Gallery</button>
                    <button class="mobileNavigationBut " id="calendarButtonMobile">Calendar</button>

                </nav>
            </nav>`;
            document.getElementById("mainNavigation").innerHTML = hnav;

    }




{/* <div class="greyOut"></div> */}
    function dispMobileNav(){
        const clickNav = document.getElementById("hamNavButton");

        clickNav.addEventListener("click", ()=> dispNavChoices());

        function dispNavChoices(){
            console.log("Good Try 1");
            const showHome = document.getElementById("homeButtonMobile");
            const showAbout = document.getElementById("aboutButtonMobile");
            const showstories = document.getElementById("storiesButtonMobile");
            const showGallery = document.getElementById("galleryButtonMobile");
            const showCalendar = document.getElementById("calendarButtonMobile");

            showHome.classList.toggle('showMobNavItems');
            showAbout.classList.toggle('showMobNavItems');
            showstories.classList.toggle('showMobNavItems');
            showGallery.classList.toggle('showMobNavItems');
            showCalendar.classList.toggle('showMobNavItems');

            console.log("Good Try!");
        }


    }



    function deployNavigator(){
        mainNavComponent()
        dispMobileNav()
    }


export {deployNavigator};
