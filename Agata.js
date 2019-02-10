// "use strict";

function change(){
   let link = document.getElementsByTagName("a");
    for(i = 0; i < link.length; i++) {
        link[i].classList.toggle("blue");
}
}
