var nav = document.getElementById("nav");
var m = document.getElementById("main");
var x = document.getElementById("togglebtn").children;
var w = window.matchMedia("(max-width=650px)");

function loadPage() {
    var t = setTimeout(loadHome, 2000);
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

var cards = document.getElementById("rocards");
var card = cards.children;
var descriptions = document.getElementById("cdesp");
var des = descriptions.children;
card[0].addEventListener('click', () => { test(1) })
card[1].addEventListener('click', () => { test(2) })
card[2].addEventListener('click', () => { test(3) })
card[3].addEventListener('click', () => { test(4) })


function test(n) {
    let ishidden = document.getElementById("d" + n).classList.contains("hide");
    for (let i = 0; i < card.length; i++)
        des[i].classList.add("hide");
    if (ishidden) {
        document.getElementById("d" + n).classList.remove("hide");
    }

}

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