var logo = document.getElementById("bleakLogo");
var par = document.getElementById("par");

window.onscroll = function() {
    var scrollY = window.scrollY;

    if (scrollY > 50) {
        logo.style.paddingTop = "15%";
        par.style.opacity = 1;
    } else {
        logo.style.paddingTop = "17%";
        par.style.opacity = 0;
    }
}