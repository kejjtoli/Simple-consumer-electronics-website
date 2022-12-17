var logo = document.getElementById("bleakLogo");
var overlay = document.getElementById("overlay");
var par = document.getElementById("par");
var vid = document.getElementById("vid");
var ch = document.getElementById("ch");

var vidPlayed = false;


var logoPadding = 25;

window.onscroll = function() {
    var scrollY = window.scrollY;

    if (scrollY > 50) {
        logo.style.paddingTop = "23%";
        par.style.opacity = 1;
    } else {
        logo.style.paddingTop = "25%";
        par.style.opacity = 0;
    }

    if (scrollY > 1100 && scrollY < 2350) {
        if (vidPlayed == false) {
            vid.play();
            vidPlayed = true;
        }
        if (scrollY < 1800) {
            ch.style.opacity = 1;
        }
    }

    if (scrollY < 600 || scrollY > 2350) {
        vidPlayed = false;
        ch.style.opacity = 0;
        vid.currentTime = 0;
    }

    if (scrollY > 1800) {
        ch.style.opacity = 0;
    }
}