const ekran = document.getElementById("ekran");
const yaziAlan = document.getElementById("yaziAlan");
const kalp = document.getElementById("kalp");

ekran.addEventListener("click", () => {

    yaziAlan.style.display = "none";

    kalp.style.display = "block";

});
