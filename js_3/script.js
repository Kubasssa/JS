const strip = document.querySelector("div");
let colorFlag = true;
let stripHeight = 10;

window.addEventListener("scroll", function () {

    strip.style.height = stripHeight + "px";

    if (stripHeight == 200) {
        strip.style.backgroundColor = "red";
        colorFlag = false;
    } else if (stripHeight == 10) {
        strip.style.backgroundColor = "green";
        colorFlag = true;
    }
    if (colorFlag) {
        stripHeight += 5;
    } else {
        stripHeight -= 5;
    }


})