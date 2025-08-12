function hamburgerToggle() {
//    "use strict";
    var hamburger = document.getElementById("hamburger");
    var sidenav = document.getElementById("sidenav");
    
    if (hamburger.classList.contains("is-active")) {
        hamburger.classList.remove("is-active");
        sidenav.style.width = "0%";
    } else {
        hamburger.classList.add("is-active");
        sidenav.style.width = "80%";   
    }
}

function copyEmail() {
    navigator.clipboard.writeText("hi@lunablake.com");
}


// Gallery Block Clicks
document.getElementById('kalimba').addEventListener('click', function() {
    location.href = 'https://echosoundworks.com/kalimba-plugin'
}, false);

document.getElementById('nothing-new').addEventListener('click', function() {
    location.href = 'https://echosoundworks.com/kalimba-plugin'
}, false);

document.getElementById('evoxa').addEventListener('click', function() {
    location.href = 'https://echosoundworks.com/evoxa-serum-edition'
}, false);