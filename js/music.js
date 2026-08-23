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


// User ki saved Music preference
let musicEnabled =
    localStorage.getItem("musicEnabled") === "true";


// Current loaded category
let loadedMusicCategory = "";


// ==========================================
// Get Current Page Category
// ==========================================

function getMusicCategory() {

    // URL category ko priority
    // category.html aur shayari.html dono ke liye
    const params =
        new URLSearchParams(
            window.location.search
        );

    const urlCategory =
        params.get("category");

    if (
        urlCategory &&
        CATEGORY_MUSIC[urlCategory]
    ) {

        return urlCategory;

    }


    // Home page current category
    if (
        typeof currentCategory !== "undefined" &&
        currentCategory &&
        CATEGORY_MUSIC[currentCategory]
    ) {

        return currentCategory;

    }


    // Default
    return "love";

}


// ==========================================
// Save Current Music Position
// ==========================================

function saveMusicPosition() {

    if (
        !musicEnabled ||
        !loadedMusicCategory ||
        !bgMusic ||
        isNaN(bgMusic.currentTime)
    ) {

        return;

    }


    localStorage.setItem(
        "musicCurrentTime",
        String(bgMusic.currentTime)
    );


    localStorage.setItem(
        "musicCurrentCategory",
        loadedMusicCategory
    );

}


// ==========================================
// Play Category Music
// ==========================================

function playCategoryMusic(category) {

    if (!musicEnabled) {
        return;
    }


    const musicPath =
        CATEGORY_MUSIC[category];


    if (!musicPath) {

        console.log(
            "❌ Music not found for:",
            category
        );

        return;

    }


    // ======================================
    // Same track already playing
    // ======================================

    if (
        loadedMusicCategory === category &&
        bgMusic.src &&
        !bgMusic.paused
    ) {

        console.log(
            "🎵 Music already playing:",
            category
        );

        return;

    }


    // ======================================
    // Saved Position Check
    // ======================================

    const savedCategory =
        localStorage.getItem(
            "musicCurrentCategory"
        );


    const savedTime =
        Number(
            localStorage.getItem(
                "musicCurrentTime"
            )
        ) || 0;


    // Same category hai to resume
    // warna new category 0:00 se
    let resumeTime = 0;


    if (savedCategory === category) {

        resumeTime = savedTime;

    }

    else {

        localStorage.removeItem(
            "musicCurrentTime"
        );

        localStorage.setItem(
            "musicCurrentCategory",
            category
        );

    }


    // ======================================
    // Load New Track
    // ======================================

    bgMusic.pause();

    loadedMusicCategory =
        category;

    bgMusic.src =
        musicPath;


    // Metadata load hone ke baad
    // saved position restore karo

    bgMusic.addEventListener(
        "loadedmetadata",
        function restoreMusicPosition() {

            if (
                resumeTime > 0 &&
                isFinite(bgMusic.duration) &&
                resumeTime < bgMusic.duration
            ) {

                bgMusic.currentTime =
                    resumeTime;

                console.log(
                    "⏯️ Music resumed at:",
                    resumeTime
                );

            }


            bgMusic.removeEventListener(
                "loadedmetadata",
                restoreMusicPosition
            );

        }
    );


    bgMusic.load();


    bgMusic.play()

        .then(function () {

            console.log(
                "✅ Playing category music:",
                category
            );

        })

        .catch(function (error) {

            console.log(
                "⚠️ Music waiting for user interaction:",
                error
            );

        });

}


// ==========================================
// Music ON / OFF
// ==========================================

function toggleMusic() {

    if (!musicEnabled || bgMusic.paused) {

        musicEnabled = true;


        localStorage.setItem(
            "musicEnabled",
            "true"
        );


        const category =
            getMusicCategory();


        playCategoryMusic(
            category
        );


        const button =
            document.getElementById(
                "music-toggle"
            );


        if (button) {

            button.innerText =
                "🎵";

        }


        showToast(
            "🎵 Music ON"
        );

    }

    else {

        // Position save before pause
        saveMusicPosition();


        musicEnabled = false;


        localStorage.setItem(
            "musicEnabled",
            "false"
        );


        bgMusic.pause();


        const button =
            document.getElementById(
                "music-toggle"
            );


        if (button) {

            button.innerText =
                "🔇";

        }


        showToast(
            "🔇 Music OFF"
        );

    }

}


// ==========================================
// Start Current Page Music
// ==========================================

function startPageMusic() {

    if (!musicEnabled) {
        return;
    }


    const category =
        getMusicCategory();


    console.log(
        "🎵 Page category detected:",
        category
    );


    playCategoryMusic(
        category
    );

}


// ==========================================
// Save Position Regularly
// ==========================================

// Har second current position save hogi.
// Isse page click/navigation ke waqt
// accurate resume position milegi.

setInterval(
    function () {

        if (
            musicEnabled &&
            !bgMusic.paused
        ) {

            saveMusicPosition();

        }

    },
    1000
);


// ==========================================
// Save Before Leaving Page
// ==========================================

window.addEventListener(
    "pagehide",
    function () {

        saveMusicPosition();

    }
);


window.addEventListener(
    "beforeunload",
    function () {

        saveMusicPosition();

    }
);


// ==========================================
// Initialize
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Music button
        const button =
            document.getElementById(
                "music-toggle"
            );


        if (button) {

            if (musicEnabled) {

                button.innerText =
                    "🎵";

            }

            else {

                button.innerText =
                    "🔇";

            }

        }


        // Category / Shayari page par
        // saved music resume attempt
        startPageMusic();

    }
);
