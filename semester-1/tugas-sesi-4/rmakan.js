let toggleMakanUtama = document.getElementById("toggleMakanUtama");
let toggleMakan1 = document.getElementById("toggleMakan1");

let lampRMakan1 = document.getElementById("lampRMakan1");

function saklarMakan() {
    if (toggleMakan1.checked && toggleMakanUtama == true) {
        lampRMakan1.src = srcOn;
    } else {
        lampRMakan1.src = srcOff;
    }

    if (toggleMakan1.checked) {
        toggleMakanUtama.checked = true;
    } else {
        toggleMakanUtama.checked = false;
    }
}

function saklarMakanUtama() {
    if (toggleMakanUtama.checked) {
        toggleMakan1.checked = true;
        lampRMakan1.src = srcOn;
    } else {
        toggleMakan1.checked = false;
        lampRMakan1.src = srcOff;
    }
}
