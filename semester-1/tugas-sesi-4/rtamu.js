let toggleTamuUtama = document.getElementById("toggleTamuUtama");
let toggleTamu1 = document.getElementById("toggleTamu1");
let toggleTamu2 = document.getElementById("toggleTamu2");
let toggleTamu3 = document.getElementById("toggleTamu3");
let toggleTamu4 = document.getElementById("toggleTamu4");

let lampRTamu1 = document.getElementById("lampRTamu1");
let lampRTamu2 = document.getElementById("lampRTamu2");
let lampRTamu3 = document.getElementById("lampRTamu3");
let lampRTamu4 = document.getElementById("lampRTamu4");

function saklarTamu() {
    if (toggleTamu1.checked == true) {
        lampRTamu1.src = srcOn;
    } else {
        lampRTamu1.src = srcOff;
    }

    if (toggleTamu2.checked == true) {
        lampRTamu2.src = srcOn;
    } else {
        lampRTamu2.src = srcOff;
    }

    if (toggleTamu3.checked == true) {
        lampRTamu3.src = srcOn;
    } else {
        lampRTamu3.src = srcOff;
    }

    if (toggleTamu4.checked == true) {
        lampRTamu4.src = srcOn;
    } else {
        lampRTamu4.src = srcOff;
    }

    if (toggleTamu1.checked && toggleTamu2.checked && toggleTamu3.checked && toggleTamu4.checked) {
        toggleTamuUtama.checked = true;
    } else {
        toggleTamuUtama.checked = false;
    }
}

function saklarTamuUtama() {
    if (toggleTamuUtama.checked) {
        toggleTamu1.checked = true;
        lampRTamu1.src = srcOn;
        toggleTamu2.checked = true;
        lampRTamu2.src = srcOn;
        toggleTamu3.checked = true;
        lampRTamu3.src = srcOn;
        toggleTamu4.checked = true;
        lampRTamu4.src = srcOn;
    } else {
        toggleTamu1.checked = false;
        lampRTamu1.src = srcOff;
        toggleTamu2.checked = false;
        lampRTamu2.src = srcOff;
        toggleTamu3.checked = false;
        lampRTamu3.src = srcOff;
        toggleTamu4.checked = false;
        lampRTamu4.src = srcOff;
    }
}
