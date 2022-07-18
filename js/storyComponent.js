
function deployStoryBody (){
    const storyBodyItem = 
`
<img class="photoOne" id="photoOne" src="#">
<h2 id="Bodytitle" class="Bodytitle">It began in 1922...</h2>
<p class="paragraph" id="mainParagraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere, ante eu porttitor consectetur, nisi metus scelerisque elit, ac sodales massa odio id lacus. Donec euismod tincidunt enim, ac hendrerit purus accumsan in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ut placerat leo. Praesent lacinia ullamcorper tellus et venenatis. Phasellus pharetra turpis at ex aliquam placerat. Sed aliquam dignissim lectus vitae ultrices.

Donec eu iaculis orci, nec ornare diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a orci mattis, finibus erat venenatis, ornare nibh. Sed vulputate sit amet dolor quis congue. Praesent egestas nibh mauris, eget condimentum turpis blandit non. Fusce ullamcorper ipsum turpis, nec fringilla nisl tincidunt sit amet. Morbi at augue purus. Cras maximus gravida dui id rutrum. In tempus massa sapien, sed hendrerit lacus porttitor et. Quisque dolor augue, faucibus semper purus a, vehicula semper ipsum. Fusce luctus tincidunt ante, quis efficitur tortor auctor a. Aenean vestibulum convallis metus, vitae tincidunt ligula vehicula ullamcorper.

Vestibulum commodo arcu nulla, sit amet pellentesque nibh facilisis ac. Vivamus condimentum pharetra augue eu pulvinar. Duis interdum orci augue, nec aliquet dui egestas eget. Morbi euismod lacinia tellus, vel tristique quam dictum non. Nam mi turpis, maximus nec est nec, consequat fermentum magna. Ut sagittis aliquam justo, quis suscipit nulla lacinia eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis sodales diam. Vestibulum nec consectetur massa.
</p>
<img id="photoTwo" class="photoTwo" src="../src/images/gaffner girls dutchesses.jpg">
<p class="paragraph">
Morbi quis mauris ornare, ornare neque ut, ornare mauris. Pellentesque id vestibulum lacus, sit amet aliquam nisi. Pellentesque luctus tellus eget tellus fringilla vulputate. Phasellus tincidunt augue mauris, vel blandit libero hendrerit a. Donec porttitor egestas fringilla. Vivamus vitae neque a purus tincidunt accumsan quis at sem. Duis elementum urna ex, quis vulputate dui ultrices in. Donec congue orci ipsum, in euismod risus varius a. Nam sed sem nisl. Aenean hendrerit nunc id magna consectetur eleifend. Nulla facilisi. Sed tincidunt id eros at cursus. Curabitur tempus non eros a ullamcorper. Nam auctor gravida enim, id feugiat lorem hendrerit quis.

Aenean a imperdiet nisl, at tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi feugiat lacus sem, at placerat mi blandit sit amet. Praesent mi magna, pharetra in massa vitae, pellentesque lobortis tellus. Cras ac lacus quis metus tristique vehicula in a nunc. Morbi vitae laoreet arcu. Aenean venenatis urna ut sem malesuada, quis elementum arcu vehicula. Etiam lacus nisi, facilisis ut elit vel, interdum sollicitudin nibh.

This farm has been in the Gaffner, Zobrist family for over 100 years. From the first day
it was land worked by immigrants from two countries torn apart by war and strife. The hard working
German Gaffners found the black soil and humid climate a welcome change from the infertile arid regions they
hailed from. Everyday since their descendents have made this agricultural endeavor into one to be 
admired. 
</p>

</main>
`;
document.getElementById("mainContent").innerHTML = storyBodyItem;

}


export {deployStoryBody};