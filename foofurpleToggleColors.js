var colorsOn = 0;

var c1 = "#aaf0c3";
var c2 = "#f99fc5";
var c3 = "#e6e9b3";
var c4 = "#d5bfe9";
var c5 = "#f0c3aa";
var defaultColor = "#fff";

function toggleColors() {

    if (colorsOn === 0) {
        document.getElementById("header").style.backgroundColor = c1;
        document.getElementById("container").style.backgroundColor = c2;
        document.getElementById("main").style.backgroundColor = c3;
        document.getElementById("sidebar").style.backgroundColor = c4;
        document.getElementById("footer").style.backgroundColor = c5;
        colorsOn = 1;
    }
    else {
        document.getElementById("header").style.backgroundColor = defaultColor;
        document.getElementById("container").style.backgroundColor = defaultColor;
        document.getElementById("main").style.backgroundColor = defaultColor;
        document.getElementById("sidebar").style.backgroundColor = defaultColor;
        document.getElementById("footer").style.backgroundColor = defaultColor;
        colorsOn = 0;
    }
}

