const intro = document.getElementById("intro");
const heartScreen = document.getElementById("heartScreen");

// İlk ekrana tıklanınca geçiş
intro.addEventListener("click", () => {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        heartScreen.classList.remove("hidden");

        // Kalpleri oluşturmaya başla
        setInterval(createHeart, 200);
    }, 700);
});

// Uçuşan küçük kalpler
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    const randomX = (Math.random() - 0.5) * 200;

    heart.animate([
        {
            transform: "translate(0,0)",
            opacity: 1
        },
        {
            transform: `translate(${randomX}px,-${window.innerHeight + 200}px)`,
            opacity: 0
        }
    ], {
        duration: 5000,
        easing: "linear"
    });

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
