function kalbiAc(){

    const giris = document.getElementById("giris");
    const kalp = document.getElementById("kalp");


    giris.style.animation = "gelis 1s reverse";


    setTimeout(()=>{


        giris.style.display="none";


        kalp.style.display="block";


    },700);



}
