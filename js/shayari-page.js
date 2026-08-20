console.log("SHAYARI-PAGE.JS LOADED");

// ==========================================
// Alfaaz By Zaman
// Single Shayari Page System
// ==========================================

let shayariCategory = "";
let shayariIndex = 0;

let currentCategory = "";
let currentIndex = 0;


// ==========================================
// Load Shayari From URL
// ==========================================

function loadShayariPage(){

    const params =
        new URLSearchParams(window.location.search);

    shayariCategory =
        params.get("category");

    shayariIndex =
        Number(params.get("index")) || 0;


    // Global current values
    currentCategory =
        shayariCategory;

    currentIndex =
        shayariIndex;


    console.log(
        "Category:",
        shayariCategory,
        "Index:",
        shayariIndex
    );


    // ======================================
    // Category Check
    // ======================================

    if(
        !shayariCategory ||
        !SHAYARI_DB[shayariCategory]
    ){

        showPageError("Shayari Not Found");

        return;
    }


    // ======================================
    // Index Check
    // ======================================

    if(
        shayariIndex < 0 ||
        shayariIndex >=
        SHAYARI_DB[shayariCategory].length
    ){

        shayariIndex = 0;

        currentIndex = 0;

    }


    displayCurrentShayari();

}


// ==========================================
// Display Current Shayari
// ==========================================

function displayCurrentShayari(){

    const shayari =
        SHAYARI_DB[shayariCategory][shayariIndex];


    // Keep global values synchronized
    currentCategory =
        shayariCategory;

    currentIndex =
        shayariIndex;


    const categoryTitle =
        document.getElementById("shayariCategory");


    const shayariNumber =
        document.getElementById("shayariNumber");


    const shayariText =
        document.getElementById("shayariText");


    // ======================================
    // Category Title
    // ======================================

    if(categoryTitle){

        categoryTitle.innerText =
            shayariCategory.toUpperCase();

    }


    // ======================================
    // Shayari Number
    // ======================================

    if(shayariNumber){

        shayariNumber.innerText =
            "#" + (shayariIndex + 1);

    }


    // ======================================
    // Actual Shayari
    // ======================================

    if(shayariText){

        shayariText.innerText =
            shayari;

    }


    // ======================================
    // Like Count
    // ======================================

    if(
        typeof likes !== "undefined"
    ){

        const likeCount =
            document.getElementById(
                "shayariLikeCount"
            );


        if(likeCount){

            const totalLikes =
                likes[shayari] || 0;

            likeCount.innerText =
                totalLikes;

        }

    }


    // ======================================
    // Favorite Button
    // ======================================

    if(
        typeof updateFavoriteButton ===
        "function"
    ){

        updateFavoriteButton();

    }


    console.log(
        "✅ Shayari Displayed:",
        shayariCategory,
        shayariIndex
    );

}


// ==========================================
// Next Shayari
// ==========================================

function nextShayari(){

    if(!shayariCategory) return;


    const total =
        SHAYARI_DB[shayariCategory].length;


    shayariIndex++;


    if(shayariIndex >= total){

        shayariIndex = 0;

    }


    currentCategory =
        shayariCategory;

    currentIndex =
        shayariIndex;


    updateURL();

    displayCurrentShayari();

}


// ==========================================
// Previous Shayari
// ==========================================

function previousShayari(){

    if(!shayariCategory) return;


    const total =
        SHAYARI_DB[shayariCategory].length;


    shayariIndex--;


    if(shayariIndex < 0){

        shayariIndex =
            total - 1;

    }


    currentCategory =
        shayariCategory;

    currentIndex =
        shayariIndex;


    updateURL();

    displayCurrentShayari();

}


// ==========================================
// Update Browser URL
// ==========================================

function updateURL(){

    const newURL =
        "shayari.html?category=" +
        encodeURIComponent(
            shayariCategory
        ) +
        "&index=" +
        shayariIndex;


    window.history.replaceState(
        {},
        "",
        newURL
    );

}


// ==========================================
// Page Error
// ==========================================

function showPageError(message){

    const categoryTitle =
        document.getElementById(
            "shayariCategory"
        );


    const shayariText =
        document.getElementById(
            "shayariText"
        );


    if(categoryTitle){

        categoryTitle.innerText =
            "ERROR";

    }


    if(shayariText){

        shayariText.innerText =
            message;

    }

}


// ==========================================
// Page Load
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        loadShayariPage();

    }
);
