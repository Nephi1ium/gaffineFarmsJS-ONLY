
function deployMainBody (){
    const mainBodyItem = 
`
<img class="photoOne" id="photoOne" src="../src/images/3gengaffnermen.jpg">
<h2 id="Bodytitle" class="Bodytitle">It began in 1937...</h2>
<p class="paragraph" id="mainParagraph">
Edith Ella Zobrist Married Carl Walter Gaffner in 1937 starting the Gaffine Family. Fourteen years and 5 children later the start of a new generation took root.
It only took a few more years before 16 more descendents came along carrying with them the torch lit by the faithfulness of Edith and Carl.   </p>

<h2 id="Bodytitle" class="Bodytitle">Here is a glimpse into that ADJECTIVE narrative</h2>

<p> HERE IS THE ROTATING BANNER OF QUOTES FROM GRANDMAS MEMOIRS AND STORIES (want to include random and even out of context items)</p>

<img id="photoTwo" class="photoTwo" src="../src/images/gaffner girls dutchesses.jpg">
<p class="paragraph">

This farm has been in the Gaffner, Zobrist family for over 100 years. From the first day
it was land worked by immigrants from two countries torn apart by war and strife. The hard working
German Gaffners found the black soil and humid climate a welcome change from the infertile, arid regions they
hailed from. Everyday since their descendents have made this agricultural endeavor into one to be 
admired. 
</p>

<p> HERE IS THE COMMENTS SECTION, WITH A SCROLLING HISTORY OF COMMENTS (prayer requests, life events etc)</p>

</main>
`;
document.getElementById("mainContent").innerHTML = mainBodyItem;

}


export {deployMainBody};