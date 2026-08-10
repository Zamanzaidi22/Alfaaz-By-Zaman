console.log("CATEGORY-PAGE.JS LOADED");

// ==========================================
// Alfaaz By Zaman
// Dedicated Category Page System
// ==========================================

function loadCategoryPage(){

    // URL se category read karo
    const params =
        new URLSearchParams(window.location.search);

    const category =
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

        title.innerText =
            category.toUpperCase() + " SHAYARI";

    }

    // Shayari container
    const box =
        document.getElementById("allShayari");

    if(!box) return;

    // Purana content clear
    box.innerHTML = "";

    // Saari Shayari load karo
    SHAYARI_DB[category].forEach(function(shayari, index){

        box.innerHTML += `

            <div class="shayari-card">

                <div class="category-shayari-number">
                    #${index + 1}
                </div>

                <p class="category-shayari-text">
                    ${shayari}
                </p>

            </div>

        `;

    });

}


// ==========================================
// Page Load
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    loadCategoryPage
);
