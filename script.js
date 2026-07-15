function kalpOlustur(){

    const heart=document.createElement("div");

    heart.className="heart";
    heart.innerHTML="❤️";

    heart.style.left=Math.random()*window.innerWidth+"px";
    heart.style.top=window.innerHeight+"px";

    heart.style.fontSize=(20+Math.random()*40)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(kalpOlustur,150);
