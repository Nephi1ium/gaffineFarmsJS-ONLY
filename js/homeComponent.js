import {deployHeader} from "./headerComponent.js";
import {deployFooter} from "./footerComponent.js"
import {deployMainBody} from "./mainBodyComponent.js"


window.addEventListener('load', deployHeader());
window.addEventListener('load', deployFooter());
window.addEventListener('load', deployMainBody());
