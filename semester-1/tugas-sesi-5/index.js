function onLogin() {
    let username = document.querySelector("#username").value;
    let alertUsername = document.querySelector("#alertUsername");

    let password = document.querySelector("#password").value;
    let alertPassword = document.querySelector("#alertPassword");

    if (username || password !== "") {
        alertUsername.classList.remove("block");
        alertUsername.classList.add("hidden");
        alertPassword.classList.remove("block");
        alertPassword.classList.add("hidden");
        if (username == localStorage.getItem("username") && password == localStorage.getItem("password")) {
            alertUsername.classList.remove("block");
            alertUsername.classList.add("hidden");
            alertPassword.classList.remove("block");
            alertPassword.classList.add("hidden");
            location.replace("dashboard.html");
        } else if (username == "") {
            alertUsername.classList.remove("hidden");
            alertUsername.classList.add("block");
            alertUsername.innerText = "Username kosong, harap diisi";
        } else if (password == "") {
            alertPassword.classList.remove("hidden");
            alertPassword.classList.add("block");
            alertPassword.innerText = "Password kosong, harap diisi";
        } else if (username !== localStorage.getItem("username")) {
            alertUsername.classList.remove("hidden");
            alertUsername.classList.add("block");
            alertUsername.innerText = "Username salah atau tidak ditemukan, coba lagi";
        } else if (password !== localStorage.getItem("password")) {
            alertPassword.classList.remove("hidden");
            alertPassword.classList.add("block");
            alertPassword.innerText = "Password salah, coba lagi";
        }
    } else {
        alertUsername.classList.remove("hidden");
        alertUsername.classList.add("block");
        alertUsername.innerText = "Username kosong, harap diisi";
        alertPassword.classList.remove("hidden");
        alertPassword.classList.add("block");
        alertPassword.innerText = "Password kosong, harap diisi";
    }
}

function onSignUp() {
    let username = document.querySelector("#username").value;
    let alertUsername = document.querySelector("#alertUsername");

    let password = document.querySelector("#password").value;
    let alertPassword = document.querySelector("#alertPassword");

    let passwordConfirm = document.querySelector("#passwordConfirm").value;
    let alertPasswordConfirm = document.querySelector("#alertPasswordConfirm");

    let selectRole = document.querySelector("#selectRole").value;
    let alertSelectRole = document.querySelector("#alertSelectRole");

    if (username == "") {
        alertUsername.classList.remove("hidden");
        alertUsername.classList.add("block");
        alertUsername.innerText = "Username kosong, harap diisi";
    } else if (username !== "") {
        alertUsername.classList.remove("block");
        alertUsername.classList.add("hidden");
    }

    if (password == "") {
        alertPassword.classList.remove("hidden");
        alertPassword.classList.add("block");
        alertPassword.innerText = "Password kosong, harap diisi";
    } else if (password !== "") {
        alertPassword.classList.remove("block");
        alertPassword.classList.add("hidden");
    }

    if (passwordConfirm == "") {
        alertPasswordConfirm.classList.remove("hidden");
        alertPasswordConfirm.classList.add("block");
        alertPasswordConfirm.innerText = "Password confirm kosong, harap diisi";
    } else if (passwordConfirm !== "") {
        alertPasswordConfirm.classList.remove("block");
        alertPasswordConfirm.classList.add("hidden");
    }

    if (selectRole == "") {
        alertSelectRole.classList.remove("hidden");
        alertSelectRole.classList.add("block");
        alertSelectRole.innerText = "Tingkatan pengguna belum dipilih, harap pilih";
    } else if (selectRole !== "") {
        alertSelectRole.classList.remove("block");
        alertSelectRole.classList.add("hidden");
        if (selectRole == "admin") {
        } else {
        }
    }

    if (username !== "" && password !== "" && passwordConfirm !== "" && selectRole !== "") {
        if (password === passwordConfirm) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("role", selectRole);
            location.replace("index.html");
        } else {
            alertPassword.classList.remove("hidden");
            alertPassword.classList.add("block");
            alertPassword.innerText = "Password dan password konfirmasi tidak sesuai";
            alertPasswordConfirm.classList.remove("hidden");
            alertPasswordConfirm.classList.add("block");
            alertPasswordConfirm.innerText = "Password dan password konfirmasi tidak sesuai";
        }
    }
}

function dashboard() {
    let username = document.querySelector("#username");
    let role = document.querySelector("#role");

    if (localStorage.getItem("role") == "admin") {
        username.innerText = "Selamat datang di halaman dashboard, " + localStorage.getItem("username") + "!";
        role.innerText = "Anda login sebagai admin.";
    } else if (localStorage.getItem("role") == "basic") {
        username.innerText = "Selamat datang di halaman dashboard, " + localStorage.getItem("username") + "!";
        role.innerText = "Anda login sebagai user biasa.";
    } else {
        alert("Anda tidak diizinkan mengakses halaman ini, silahkan masuk terlebih dahulu atau daftar jika belum memiliki akun.");
        location.replace("index.html");
    }
}

function onLogout() {
    localStorage.clear();
    location.replace("index.html");
}
