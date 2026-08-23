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


// ==========================================
// Play Category Music
// ==========================================

function playCategoryMusic(category) {

    if (!musicEnabled) {
        return;
    }

    const musicPath = CATEGORY_MUSIC[category];

    if (!musicPath) {
        console.log("❌ Music not found for:", category);
        return;
    }

    // Same track already playing?
    // To usko restart mat karo.
    const currentPath =
        bgMusic.getAttribute("src");

    if (
        currentPath === musicPath &&
        !bgMusic.paused
    ) {

        console.log(
            "🎵 Music already playing:",
            category
        );

        return;
    }

    // Category change hui ho tabhi
    // naya track load karo.
    if (currentPath !== musicPath) {

        bgMusic.pause();

        bgMusic.src = musicPath;

        bgMusic.load();

    }

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

    if (bgMusic.paused) {

        musicEnabled = true;

        localStorage.setItem(
            "musicEnabled",
            "true"
        );

        let category = "love";

        // Main page current category
        if (
            typeof currentCategory !== "undefined" &&
            currentCategory
        ) {

            category = currentCategory;

        }

        // Category page URL
        const params =
            new URLSearchParams(
                window.location.search
            );

        const urlCategory =
            params.get("category");

        if (urlCategory) {

            category = urlCategory;

        }

        playCategoryMusic(category);

        showToast("🎵 Music ON");

    }

    else {

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
// Category Page Music
// ==========================================

function startCategoryPageMusic() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const category =
        params.get("category");

    if (!category) {
        return;
    }

    console.log(
        "🎵 Category detected:",
        category
    );

    if (musicEnabled) {

        playCategoryMusic(category);

    }

}


// ==========================================
// Initialize
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Category page
        startCategoryPageMusic();

        // Music button
        const button =
            document.getElementById(
                "music-toggle"
            );

        if (button) {

            if (musicEnabled) {

                button.innerText = "🎵";

            }

            else {

                button.innerText = "🔇";

            }

        }

    }
);
