
function deployMainBody (){
    const mainBodyItem = 
`
<main class="mainContent">
<img class="photoOne" src="../src/images/3gengaffnermen.jpg">
<h2 class="Bodytitle">It began in 1922...</h2>
<p class="paragraph">This farm has been in the Gaffner, Zobrist family for over 100 years. From the first day
it was land worked by immigrants from two countries torn apart by war and strife. The hard working
German Gaffners found the black soil and humid climate a welcome change from the infertile arid regions they
hailed from. Everyday since their descendents have made this agricultural endeavor into one to be 
admired. </p>
</main>`;
document.getElementById("mainContent").innerHTML = mainBodyItem;

}


export {deployMainBody};