// ==========================================
// Alfaaz By Zaman
// Smart Category Wise Music System
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
// Audio Player
// ==========================================

let bgMusic = new Audio();

bgMusic.loop = true;
bgMusic.volume = 0.3;

let musicEnabled =
    localStorage.getItem("musicEnabled") === "true";

let currentMusicCategory = "";

// ==========================================
// Debug
// ==========================================

function musicDebug(message){

    console.log("🎵 " + message);

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

            padding:10px;

            background:#111;
            color:#fff;

            border:1px solid #d4af37;
            border-radius:10px;

            font-family:Arial,sans-serif;
            font-size:12px;

            max-height:120px;
            overflow:auto;
        `;

        document.body.appendChild(panel);
    }

    panel.innerHTML +=
        `<div>🎵 ${message}</div>`;
}


// ==========================================
// Play Category Music
// ==========================================

function playCategoryMusic(category){

    musicDebug(
        "Category requested: " + category
    );

    if(!musicEnabled){

        musicDebug("Music is OFF");

        return;
    }

    const musicPath =
        CATEGORY_MUSIC[category];

    if(!musicPath){

        musicDebug(
            "❌ Music path not found for " + category
        );

        return;
    }

    // Same music already playing
    if(
        currentMusicCategory === category &&
        !bgMusic.paused
    ){

        musicDebug(
            "Already playing: " + category
        );

        return;
    }

    musicDebug(
        "Loading: " + musicPath
    );

    bgMusic.pause();

    bgMusic.currentTime = 0;

    bgMusic.src = musicPath;

    currentMusicCategory = category;

    bgMusic.load();

    bgMusic.play()
        .then(() => {

            musicDebug(
                "✅ Playing: " + category
            );

        })
        .catch(error => {

            musicDebug(
                "❌ Play failed: " +
                error.name +
                " — " +
                error.message
            );

        });
}


// ==========================================
// Audio Error Detection
// ==========================================

bgMusic.addEventListener(
    "loadeddata",
    function(){

        musicDebug(
            "✅ Audio loaded successfully"
        );

    }
);

bgMusic.addEventListener(
    "canplay",
    function(){

        musicDebug(
            "▶️ Audio ready"
        );

    }
);

bgMusic.addEventListener(
    "error",
    function(){

        musicDebug(
            "❌ Audio file ERROR"
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

        let category =
            currentMusicCategory;

        // Try to get current category
        if(
            typeof currentCategory !== "undefined" &&
            currentCategory
        ){

            category = currentCategory;

        }

        // Default category
        if(!category){

            category = "love";

        }

        musicDebug(
            "🎵 Music ON"
        );

        playCategoryMusic(category);

        showToast("🎵 Music ON");

    }

    else{

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
// IMPORTANT:
// Category Click → Change Music
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        /*
        The category.js file loads before music.js.
        So we safely wrap openCategoryPage()
        and connect music to category clicks.
        */

        if(
            typeof window.openCategoryPage === "function"
        ){

            const originalOpenCategoryPage =
                window.openCategoryPage;

            window.openCategoryPage =
                function(category){

                    // Open category normally
                    originalOpenCategoryPage(category);

                    // Remember category
                    currentMusicCategory =
                        category;

                    // Change music automatically
                    if(musicEnabled){

                        playCategoryMusic(
                            category
                        );

                    }

                };

            musicDebug(
                "✅ Category music system connected"
            );

        }

        else{

            musicDebug(
                "⚠️ openCategoryPage not found"
            );

        }

    }
);


// ==========================================
// Music Button State
// ==========================================

function updateMusicButton(){

    const button =
        document.getElementById("music-toggle");

    if(!button) return;

    if(musicEnabled){

        button.innerText = "🎵";

    }

    else{

        button.innerText = "🔇";

    }

}


// ==========================================
// Initialize
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
