console.log("CATEGORY.JS LOADED");
// ==========================================
// Alfaaz By Zaman
// Category System
// ==========================================

let currentCategory = "";
let currentIndex = 0;

function openCategory(category){

    currentCategory = category;
    currentIndex = 0;

    showCurrentShayari();

}

function showCurrentShayari(){

    if(!SHAYARI_DB[currentCategory]) return;

    document.getElementById("category-title").innerText =
        currentCategory.toUpperCase();

    document.getElementById("shayari-text").innerText =
        SHAYARI_DB[currentCategory][currentIndex];

}

function randomShayari(){

    if(!currentCategory){

        alert("Pehle koi category select karein.");

        return;

    }

    currentIndex = Math.floor(
        Math.random() * SHAYARI_DB[currentCategory].length
    );

    showCurrentShayari();

}
