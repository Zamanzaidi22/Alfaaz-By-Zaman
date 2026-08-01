// ==========================================
// Alfaaz By Zaman
// Music System
// ==========================================

let bgMusic = new Audio("assets/music.mp3");

bgMusic.loop = true;
bgMusic.volume = 0.3;

function toggleMusic(){

    if(bgMusic.paused){

        bgMusic.play();

        showToast("🎵 Music ON");

    }else{

        bgMusic.pause();

        showToast("🔇 Music OFF");

    }

}
