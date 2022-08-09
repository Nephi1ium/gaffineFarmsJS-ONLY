
function deployAboutBody (){


    const aboutBodyItem = 
`

<main id="aboutPageContent">
<h2 id="bodyTitle" class="Bodytitle">It began in 1922...</h2>
<media id="droneVideo">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RJRP642lg8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</media>
<p class="paragraph" id="aboutParagraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere, ante eu porttitor consectetur, nisi metus scelerisque elit, ac sodales massa odio id lacus. Donec euismod tincidunt enim, ac hendrerit purus accumsan in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ut placerat leo. Praesent lacinia ullamcorper tellus et venenatis. Phasellus pharetra turpis at ex aliquam placerat. Sed aliquam dignissim lectus vitae ultrices.


Donec eu iaculis orci, nec ornare diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a orci mattis, finibus erat venenatis, ornare nibh. Sed vulputate sit amet dolor quis congue. Praesent egestas nibh mauris, eget condimentum turpis blandit non. Fusce ullamcorper ipsum turpis, nec fringilla nisl tincidunt sit amet. Morbi at augue purus. Cras maximus gravida dui id rutrum. In tempus massa sapien, sed hendrerit lacus porttitor et. Quisque dolor augue, faucibus semper purus a, vehicula semper ipsum. Fusce luctus tincidunt ante, quis efficitur tortor auctor a. Aenean vestibulum convallis metus, vitae tincidunt ligula vehicula ullamcorper.
<img class="photoOne" id="photoOne" src="../src/images/3gengaffnermen.jpg">
Vestibulum commodo arcu nulla, sit amet pellentesque nibh facilisis ac. Vivamus condimentum pharetra augue eu pulvinar. Duis interdum orci augue, nec aliquet dui egestas eget. Morbi euismod lacinia tellus, vel tristique quam dictum non. Nam mi turpis, maximus nec est nec, consequat fermentum magna. Ut sagittis aliquam justo, quis suscipit nulla lacinia eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis sodales diam. Vestibulum nec consectetur massa.
</p>
<img id="photoTwo" class="photoTwo" src="../src/images/jerry_gaffner.jpg">


</main>
`;
document.getElementById("mainContent").innerHTML = aboutBodyItem;

}


export {deployAboutBody};