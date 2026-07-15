window.onload = () => {

    const kalp = document.querySelector(".kalp");
    const yazi = document.querySelector("h1");

    kalp.style.opacity = "0";
    yazi.style.opacity = "0";

    setTimeout(() => {
        kalp.style.transition = "1.5s";
        yazi.style.transition = "1.5s";

        kalp.style.opacity = "1";
        yazi.style.opacity = "1";

    }, 500);

};
