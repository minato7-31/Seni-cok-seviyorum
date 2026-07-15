function kalbiGoster() {

    const yazi = document.getElementById("yazi");
    const kalp = document.getElementById("kalp");
    const kalpler = document.querySelectorAll(".ucan");

    // Yazıyı gizle
    yazi.style.display = "none";

    // Uçan kalpleri gizle
    kalpler.forEach(kalp => {
        kalp.style.display = "none";
    });

    // Büyük kalbi göster
    kalp.style.display = "block";

}
