function deployCalendar(){

const calendarItem = 
`

<a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NDRvbmNuNDg2Y3YxajRtNzU3Y29pN24yNnUgcXIxdGx1aGY0cGI2YW5iYmZja3VkZjVpMzhAZw&amp;tmsrc=qr1tluhf4pb6anbbfckudf5i38%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>

<section id="big-calendar" class="big-calendar responsive-iframe-container">
<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=America%2FChicago&src=cXIxdGx1aGY0cGI2YW5iYmZja3VkZjVpMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe></section>

<section id="small-calendar" class="small-calendar responsive-iframe-container">
<iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23F09300&ctz=America%2FChicago&mode=MONTH&showTabs=0&showNav=0&showCalendars=1&showTitle=1&title=Gaffner%20Family%20Calendar&src=cXIxdGx1aGY0cGI2YW5iYmZja3VkZjVpMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" style="border:solid 1px #777" width="300" height="400" frameborder="0" scrolling="no"></iframe></section>
</section>
`;
document.getElementById("mainContent").innerHTML = calendarItem;

};

export {deployCalendar};


