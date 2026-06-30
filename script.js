/* ===========================================
   MADE WITH LOVE ❤️
   SCRIPT PART 3A
=========================================== */

const loader = document.getElementById("loader");
const website = document.getElementById("website");
const typingText = document.getElementById("typingText");

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

const messages = [
  "Every heartbeat carries an apology...",
  "Especially For...",
];

let messageIndex = 0;
let charIndex = 0;

function typeWriter() {

  if (messageIndex >= messages.length) {

    setTimeout(() => {

      loader.style.opacity = "0";

      setTimeout(() => {

        loader.style.display = "none";
        website.style.display = "block";

      },1000);

    },1800);

    return;

  }

  if (charIndex < messages[messageIndex].length){

    typingText.innerHTML += messages[messageIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter,60);

  }

  else{

    setTimeout(()=>{

      typingText.innerHTML="<br>";

      messageIndex++;

      charIndex=0;

      typeWriter();

    },1200);

  }

}

window.onload=()=>{

setTimeout(()=>{

typeWriter();

},800);

};



/* ==========================
MUSIC
========================== */

let playing=false;

musicButton.onclick=()=>{

if(playing){

music.pause();

musicButton.innerHTML="❤️ Music";

playing=false;

}

else{

music.play();

musicButton.innerHTML="💖 Pause";

playing=true;

}

};
/* =====================================
      PAGE NAVIGATION SYSTEM
===================================== */

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".nextBtn");
const prevButtons = document.querySelectorAll(".prevBtn");

let currentPage = 0;

function showPage(index){

pages.forEach((page)=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

currentPage=index;

window.scrollTo({

top:0,

behavior:"smooth"

});

}



/* NEXT */

nextButtons.forEach((button)=>{

button.addEventListener("click",()=>{

if(currentPage<pages.length-1){

showPage(currentPage+1);

}

});

});


/* PREVIOUS */

prevButtons.forEach((button)=>{

button.addEventListener("click",()=>{

if(currentPage>0){

showPage(currentPage-1);

}

});

});



showPage(0);





/* =====================================
        HEART CLICK EFFECT
===================================== */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.fontSize="28px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

heart.style.transition="1.2s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120px) scale(2)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1200);

});
/* =====================================
      HEART RAIN ENGINE
===================================== */

function createRainHeart(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="transform 6s linear, opacity 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
"translateY("+(window.innerHeight+150)+"px) rotate(360deg)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},6000);

}



/* =====================================
      HEART RAIN START
===================================== */

let rainInterval=null;

function startHeartRain(){

if(rainInterval) return;

rainInterval=setInterval(()=>{

createRainHeart();

},180);

}

function stopHeartRain(){

clearInterval(rainInterval);

rainInterval=null;

}



/* =====================================
      SECRET LONG PRESS
===================================== */

let pressTimer;

document.addEventListener("touchstart",()=>{

pressTimer=setTimeout(()=>{

startHeartRain();

},5000);

});

document.addEventListener("touchend",()=>{

clearTimeout(pressTimer);

});



/* =====================================
      HEART EXPLOSION
===================================== */

let tapCount=0;

document.addEventListener("click",()=>{

tapCount++;

if(tapCount>=5){

for(let i=0;i<120;i++){

setTimeout(()=>{

createRainHeart();

},i*25);

}

tapCount=0;

}

});
/* =====================================
      SPARKLE ENGINE
===================================== */

function createSparkle(){

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*window.innerWidth+"px";
sparkle.style.top=Math.random()*window.innerHeight+"px";

sparkle.style.fontSize=(10+Math.random()*20)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity="1";

sparkle.style.zIndex="9998";

sparkle.style.transition="all 2s ease";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.transform="translateY(-40px) scale(1.8)";
sparkle.style.opacity="0";

},50);

setTimeout(()=>{

sparkle.remove();

},2000);

}

setInterval(()=>{

createSparkle();

},600);



/* =====================================
      FLOATING HEARTS
===================================== */

function floatingHeart(){

const h=document.createElement("div");

h.innerHTML="💗";

h.style.position="fixed";

h.style.bottom="-40px";

h.style.left=Math.random()*window.innerWidth+"px";

h.style.fontSize=(18+Math.random()*20)+"px";

h.style.pointerEvents="none";

h.style.zIndex="9997";

h.style.transition="all 8s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform=
"translateY(-"+(window.innerHeight+120)+"px) rotate(360deg)";

h.style.opacity="0";

},50);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(()=>{

floatingHeart();

},1200);
/* =====================================
      SMOOTH PAGE TRANSITION
===================================== */

function fadeToPage(index){

if(index<0 || index>=pages.length) return;

const current=pages[currentPage];

current.style.opacity="0";
current.style.transform="translateY(40px) scale(.98)";

setTimeout(()=>{

current.classList.remove("active");

pages[index].classList.add("active");

pages[index].style.opacity="0";
pages[index].style.transform="translateY(40px) scale(.98)";

setTimeout(()=>{

pages[index].style.transition="all .8s ease";

pages[index].style.opacity="1";

pages[index].style.transform="translateY(0) scale(1)";

},50);

currentPage=index;

window.scrollTo({

top:0,

behavior:"smooth"

});

},350);

}



/* =====================================
      REPLACE BUTTON EVENTS
===================================== */

nextButtons.forEach(btn=>{

btn.onclick=()=>{

if(currentPage<pages.length-1){

fadeToPage(currentPage+1);

}

};

});



prevButtons.forEach(btn=>{

btn.onclick=()=>{

if(currentPage>0){

fadeToPage(currentPage-1);

}

};

});




/* =====================================
      SECRET LOVE POPUP
===================================== */

function secretLovePopup(){

const box=document.createElement("div");

box.innerHTML=`
<div style="
position:fixed;
left:50%;
top:50%;
transform:translate(-50%,-50%);
background:rgba(255,255,255,.95);
padding:30px;
border-radius:25px;
box-shadow:0 0 35px pink;
font-size:24px;
text-align:center;
z-index:999999;
max-width:320px;
">
💖<br><br>

आपकी मुस्कान...<br>
मेरी सबसे प्यारी जगह है। ❤️

</div>
`;

document.body.appendChild(box);

setTimeout(()=>{

box.remove();

},4000);

}



/* =====================================
      SECRET DOUBLE HEART
===================================== */

let lastTap=0;

document.addEventListener("dblclick",()=>{

secretLovePopup();

});

