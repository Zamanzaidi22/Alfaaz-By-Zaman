console.log("CATEGORY-PAGE.JS LOADED");

// ==========================================
// Alfaaz By Zaman
// Dedicated Category Page System
// ==========================================
let category = "";
function loadCategoryPage(){

    // URL se category read karo
    const params =
        new URLSearchParams(window.location.search);

    category =
        params.get("category");

    console.log("Category:", category);

    // Category missing ho
    if(!category){

        document.getElementById("categoryTitle").innerText =
            "Category Not Found";

        return;
    }

    // Database me category check karo
    if(!SHAYARI_DB[category]){

        document.getElementById("categoryTitle").innerText =
            "Category Not Found";

        return;
    }

    // Category title
    const title =
        document.getElementById("categoryTitle");

    if(title){

    if(category === "zaman-writes"){

        title.innerHTML =
            "✍️ Zaman Writes" +
            "<small>Original Alfaaz by Zaman</small>";

    } else {

        title.innerText =
            category.toUpperCase() + " SHAYARI";

    }

    }
    
    // Shayari container
    const box =
        document.getElementById("allShayari");

    if(!box) return;

    // Purana content clear
    box.innerHTML = "";

    // Saari Shayari load karo
    SHAYARI_DB[category].forEach(function(shayari, index){

    const shayariURL =
        "shayari.html?category=" +
        encodeURIComponent(category) +
        "&index=" +
        index;

    box.innerHTML += `

    <a
        class="shayari-card shayari-card-link"
        href="${shayariURL}"
    >

        <div class="category-shayari-number">
            #${index + 1}
        </div>

        <p class="category-shayari-text">
            ${shayari}
        </p>

        <div class="category-open-hint">
            📖 Open Shayari
        </div>

    </a>

`;

});
}

// ==========================================
// Open Shayari Reader
// ==========================================

function openShayari(index){

    if(!category){

        console.log("Category not found");

        return;

    }

    const url =
        "shayari.html?category=" +
        encodeURIComponent(category) +
        "&index=" +
        index;

    window.location.href = url;

}

// ==========================================
// Page Load
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    loadCategoryPage
);
