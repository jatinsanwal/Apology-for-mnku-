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
