// ==========================================
// Alfaaz By Zaman
// Category Wise Music System + Debug Mode
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
// DEBUG PANEL
// ==========================================

function musicDebug(message){

    console.log("🎵", message);

    let panel =
        document.getElementById("music-debug");

    if(!panel){

        panel = document.createElement("div");

        panel.id = "music-debug";

        panel.style.cssText = `
            position:fixed;
            left:10px;
            right:10px;
            bottom:10px;
            z-index:99999;

            padding:12px;

            background:#111;
            color:#fff;

            border:1px solid #d4af37;
            border-radius:10px;

            font-family:Arial,sans-serif;
            font-size:12px;

            box-shadow:0 0 15px rgba(0,0,0,.5);
        `;

        document.body.appendChild(panel);

    }

    panel.innerHTML +=
        "<div>🎵 " + message + "</div>";
}

// ==========================================
// Change Category Music
// ==========================================

function playCategoryMusic(category){

    musicDebug(
        "Category requested: " + category
    );

    if(!musicEnabled){

        musicDebug(
            "Music is OFF"
        );

        return;

    }

    if(!CATEGORY_MUSIC[category]){

        musicDebug(
            "❌ No music path for: " + category
        );

        return;

    }

    if(
        currentMusicCategory === category &&
        !bgMusic.paused
    ){

        musicDebug(
            "Already playing: " + category
        );

        return;

    }

    const musicPath =
        CATEGORY_MUSIC[category];

    musicDebug(
        "Loading: " + musicPath
    );

    bgMusic.pause();

    bgMusic.currentTime = 0;

    bgMusic.src = musicPath;

    currentMusicCategory = category;

    bgMusic.load();

    bgMusic.play()
        .then(function(){

            musicDebug(
                "✅ Playing: " + category
            );

        })
        .catch(function(error){

            musicDebug(
                "❌ Play failed: " +
                error.name +
                " — " +
                error.message
            );

        });

}

// ==========================================
// Audio Events
// ==========================================

bgMusic.addEventListener(
    "loadeddata",
    function(){

        musicDebug(
            "✅ Audio file loaded successfully"
        );

    }
);

bgMusic.addEventListener(
    "error",
    function(){

        musicDebug(
            "❌ Audio ERROR — File/path problem"
        );

    }
);

bgMusic.addEventListener(
    "canplay",
    function(){

        musicDebug(
            "▶️ Audio ready to play"
        );

    }
);

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

        musicDebug(
            "🎵 Music ON"
        );

        if(
            typeof currentCategory !== "undefined" &&
            currentCategory
        ){

            playCategoryMusic(
                currentCategory
            );

        }else{

            playCategoryMusic("love");

        }

        showToast("🎵 Music ON");

    }else{

        musicEnabled = false;

        localStorage.setItem(
            "musicEnabled",
            "false"
        );

        bgMusic.pause();

        musicDebug(
            "🔇 Music OFF"
        );

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

        musicDebug(
            "Music system initialized"
        );

        musicDebug(
            "Music enabled: " +
            musicEnabled
        );

    }
);
