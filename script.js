const intro = document.getElementById("intro");
const scene = document.getElementById("scene");
const particles = document.getElementById("particles");

// Açılış ekranına tıklayınca
intro.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        scene.classList.remove("hidden");

        startParticles();

    }, 800);

});

// Küçük uçan kalpler
function startParticles(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "particle";
        heart.innerHTML = "💙";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = (10 + Math.random() * 18) + "px";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        particles.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },7000);

    },180);

}

// Fare hareket edince ekstra kalpler
document.addEventListener("mousemove",(e)=>{

    if(scene.classList.contains("hidden")) return;

    const heart=document.createElement("div");

    heart.className="particle";
    heart.innerHTML="💙";

    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.fontSize="12px";

    particles.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },2500);

});
