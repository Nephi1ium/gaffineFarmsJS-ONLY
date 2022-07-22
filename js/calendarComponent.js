function deployCalendar(){

const calendarItem = 
`
<section id="big-calendar" class="big-calendar responsive-iframe-container>
 <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23EF6C00&ctz=America%2FChicago&showDate=1&showTitle=1&title=Gaffner%20Family%20Calendar&src=Z2FmZmluZWZhcm1zQGdtYWlsLmNvbQ&src=cXIxdGx1aGY0cGI2YW5iYmZja3VkZjVpMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%237986CB" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</section>

<section id="small-calendar" class="small-calendar responsive-iframe-container>
<iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23F09300&ctz=America%2FChicago&mode=MONTH&showTabs=0&showNav=0&showCalendars=1&showTitle=1&title=Gaffner%20Family%20Calendar&src=cXIxdGx1aGY0cGI2YW5iYmZja3VkZjVpMzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" style="border:solid 1px #777" width="300" height="400" frameborder="0" scrolling="no"></iframe></section>
</section>
`;
document.getElementById("mainHeader").innerHTML = calendarItem;

};

export {deployCalendar};


