let toggleKeluargaUtama = document.getElementById("toggleKeluargaUtama");
let toggleKeluarga1 = document.getElementById("toggleKeluarga1");
let toggleKeluarga2 = document.getElementById("toggleKeluarga2");
let toggleKeluarga3 = document.getElementById("toggleKeluarga3");

let lampRKeluarga1 = document.getElementById("lampRKeluarga1");
let lampRKeluarga2 = document.getElementById("lampRKeluarga2");
let lampRKeluarga3 = document.getElementById("lampRKeluarga3");

const srcOn = "assets/images/on.gif";
const srcOff = "assets/images/off.gif";

function saklarKeluarga() {
    if (toggleKeluarga1.checked == true) {
        lampRKeluarga1.src = srcOn;
    } else {
        lampRKeluarga1.src = srcOff;
    }

    if (toggleKeluarga2.checked == true) {
        lampRKeluarga2.src = srcOn;
    } else {
        lampRKeluarga2.src = srcOff;
    }

    if (toggleKeluarga3.checked == true) {
        lampRKeluarga3.src = srcOn;
    } else {
        lampRKeluarga3.src = srcOff;
    }

    if (toggleKeluarga1.checked && toggleKeluarga2.checked && toggleKeluarga3.checked) {
        toggleKeluargaUtama.checked = true;
    } else {
        toggleKeluargaUtama.checked = false;
    }
}

function saklarKeluargaUtama() {
    if (toggleKeluargaUtama.checked) {
        toggleKeluarga1.checked = true;
        lampRKeluarga1.src = srcOn;
        toggleKeluarga2.checked = true;
        lampRKeluarga2.src = srcOn;
        toggleKeluarga3.checked = true;
        lampRKeluarga3.src = srcOn;
    } else {
        toggleKeluarga1.checked = false;
        lampRKeluarga1.src = srcOff;
        toggleKeluarga2.checked = false;
        lampRKeluarga2.src = srcOff;
        toggleKeluarga3.checked = false;
        lampRKeluarga3.src = srcOff;
    }
}
