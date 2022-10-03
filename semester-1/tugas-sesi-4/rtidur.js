let toggleTidurUtama = document.getElementById("toggleTidurUtama");
let toggleTidur1 = document.getElementById("toggleTidur1");
let toggleTidur2 = document.getElementById("toggleTidur2");

let lampRTidur1 = document.getElementById("lampRTidur1");
let lampRTidur2 = document.getElementById("lampRTidur2");

function saklarTidur() {
    if (toggleTidur1.checked == true) {
        lampRTidur1.src = srcOn;
    } else {
        lampRTidur1.src = srcOff;
    }

    if (toggleTidur2.checked == true) {
        lampRTidur2.src = srcOn;
    } else {
        lampRTidur2.src = srcOff;
    }

    if (toggleTidur1.checked && toggleTidur2.checked) {
        toggleTidurUtama.checked = true;
    } else {
        toggleTidurUtama.checked = false;
    }
}

function saklarTidurUtama() {
    if (toggleTidurUtama.checked) {
        toggleTidur1.checked = true;
        lampRTidur1.src = srcOn;
        toggleTidur2.checked = true;
        lampRTidur2.src = srcOn;
    } else {
        toggleTidur1.checked = false;
        lampRTidur1.src = srcOff;
        toggleTidur2.checked = false;
        lampRTidur2.src = srcOff;
    }
}
