// ==========================================
// Alfaaz By Zaman
// Category Wise Music System
// ==========================================

console.log("🎵 MUSIC.JS LOADED");

// ==========================================
// Music Database
// ==========================================

const CATEGORY_MUSIC = {

    love: "assets/music/love.mp3",

    sad: "assets/music/sad.mp3",

    bewafa: "assets/music/bewafa.mp3",

    islamic: "assets/music/islamic.mp3",

    dosti: "assets/music/dosti.mp3",

    "2line": "assets/music/2line.mp3",

    "zaman-writes": "assets/music/zaman-writes.mp3"

};

// ==========================================
// Music Player
// ==========================================

let bgMusic = new Audio();

bgMusic.loop = true;
bgMusic.volume = 0.3;

let musicEnabled =
    localStorage.getItem("musicEnabled") === "true";

let currentMusicCategory = "";

// ==========================================
// Change Category Music
// ==========================================

function playCategoryMusic(category){

    if(!musicEnabled){

        return;

    }

    if(!CATEGORY_MUSIC[category]){

        console.log(
            "🎵 Music not found for:",
            category
        );

        return;

    }

    // Same category already playing
    if(
        currentMusicCategory === category &&
        !bgMusic.paused
    ){

        return;

    }

    const musicPath =
        CATEGORY_MUSIC[category];

    // Stop previous music
    bgMusic.pause();

    bgMusic.currentTime = 0;

    // New music
    bgMusic.src = musicPath;

    currentMusicCategory = category;

    bgMusic.play()
        .then(function(){

            console.log(
                "🎵 Playing:",
                category
            );

        })
        .catch(function(error){

            console.log(
                "Music playback blocked:",
                error
            );

        });

}

// ==========================================
// Music ON / OFF
// ==========================================

function toggleMusic(){

    if(bgMusic.paused){

        musicEnabled = true;

        localStorage.setItem(
            "musicEnabled",
            "true"
        );

        // Agar category selected hai
        if(
            typeof currentCategory !== "undefined" &&
            currentCategory
        ){

            playCategoryMusic(
                currentCategory
            );

        }else{

            // Default music
            bgMusic.src =
                "assets/music/love.mp3";

            currentMusicCategory = "love";

            bgMusic.play()
                .catch(function(error){

                    console.log(
                        "Music playback blocked:",
                        error
                    );

                });

        }

        showToast("🎵 Music ON");

    }else{

        musicEnabled = false;

        localStorage.setItem(
            "musicEnabled",
            "false"
        );

        bgMusic.pause();

        showToast("🔇 Music OFF");

    }

}

// ==========================================
// Music Button State
// ==========================================

function updateMusicButton(){

    const button =
        document.getElementById("music-toggle");

    if(!button) return;

    if(musicEnabled){

        button.innerText = "🎵";

    }else{

        button.innerText = "🔇";

    }

}

// ==========================================
// Page Load
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateMusicButton();

        console.log(
            "🎵 Music Enabled:",
            musicEnabled
        );

    }
);
