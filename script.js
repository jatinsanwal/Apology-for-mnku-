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
