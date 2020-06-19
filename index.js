var nav = document.getElementById("nav");
var m = document.getElementById("main");
var x = document.getElementById("togglebtn").children;
var w = window.matchMedia("(max-width=650px)");

function loadPage() {
    var t = setTimeout(loadHome, 3000);
}

function loadHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("loader").style.display = "none";

}

function toggle() {
    if (nav.classList.contains("hide")) {
        m.style.marginTop = "5rem";
        for (let i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#c9cfeb";
        }
    } else {
        m.style.marginTop = "3rem";
        for (let i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#8332b9";
        }
    }
    nav.classList.toggle("hide");
}
// var cards = document.getElementById("rocards");
// var card = cards.children;
// for (var n = 0; n < card.length; n++) {
//     card[n].addEventListener("click", () => {
//         document.getElementById("d" + n).classList.toggle("hide");
//     });
// }

function htools() {
    var d = document.getElementById("drop");
    d.classList.toggle("hide");
}


window.addEventListener("scroll", function() {
    nav.classList.add("hide");
    m.style.marginTop = "3rem";
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#8332b9";
    }

});

// function scrollreach(x) {
//     x.querySelector("#about");
//     x.scrollIntoView({ behavior: 'smooth', block: 'center' });
// }

window.addEventListener("load", loadPage);