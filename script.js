// Efek mengetik otomatis
const text = "Kak Intan, maaf ya kalau aku bikin kakak kesal atau kecewa. Sumpah, nggak ada maksud kayak gitu. Aku nyesel banget, dan aku janji bakal lebih hati-hati ke depannya. Jangan marah lama-lama ya, Kak! Peace! ✌️";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Efek hati muncul saat tombol ditekan
document.getElementById("forgive-btn").addEventListener("click", function() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80%";
    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});

// Musik latar
const bgMusic = document.getElementById("bg-music");
document.getElementById("play-music").addEventListener("click", function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.innerText = "⏸️ Pause Musik";
    } else {
        bgMusic.pause();
        this.innerText = "🎵 Putar Musik";
    }
});

document.getElementById("forgive-btn").addEventListener("click", function() {
    let waNumber = "6285876202818"; // Ganti dengan nomor WA Kak Intan (gunakan format internasional tanpa "+")
    let waMessage = encodeURIComponent("Makasih Kak Intan udah maafin aku! ❤️");
    let waLink = `https://wa.me/${waNumber}?text=${waMessage}`;
    
    // Set href pada tombol WhatsApp
    let waButton = document.getElementById("wa-button");
    waButton.href = waLink;
    waButton.style.display = "inline-block"; // Pastikan tombol terlihat
});

document.getElementById("forgive-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("forgive-btn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("thankyou-sound").play(); // Mainkan suara
});