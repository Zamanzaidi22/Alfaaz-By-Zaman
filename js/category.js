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


    // ==========================================
    // Total Views
    // ==========================================

    let totalViews =
        Number(localStorage.getItem("totalViews")) || 0;

    totalViews++;

    localStorage.setItem(
    "totalViews",
    totalViews
);

updateStatsUI();

// Recently Viewed me save karo
saveRecentlyViewed();

}

function randomShayari(){

    if(!currentCategory){

        showToast("📂 Pehle koi category select karein.");

        return;

    }

    currentIndex = Math.floor(
        Math.random() * SHAYARI_DB[currentCategory].length
    );

    showCurrentShayari();

}

// ==========================================
// Next Shayari
// ==========================================

function nextShayari(){

    if(!currentCategory){

        showToast("📂 Pehle koi category select karein.");

        return;
    }

    const total =
        SHAYARI_DB[currentCategory].length;

    currentIndex++;

    if(currentIndex >= total){

        currentIndex = 0;

    }

    showCurrentShayari();

}

// ==========================================
// Previous Shayari
// ==========================================

function previousShayari(){

    if(!currentCategory){

        showToast("📂 Pehle koi category select karein.");

        return;
    }

    const total =
        SHAYARI_DB[currentCategory].length;

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = total - 1;

    }

    showCurrentShayari();

}

// ==========================================
// Recently Viewed System
// ==========================================

let recentlyViewed =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];

function saveRecentlyViewed(){

    if(!currentCategory) return;

    const shayari =
        SHAYARI_DB[currentCategory][currentIndex];

    const item = {
        category: currentCategory,
        index: currentIndex,
        text: shayari,
        time: Date.now()
    };

    // Same Shayari ko duplicate hone se bachao
    recentlyViewed =
        recentlyViewed.filter(function(oldItem){

            return oldItem.text !== shayari;

        });

    // Latest Shayari sabse upar
    recentlyViewed.unshift(item);

    // Sirf latest 10 rakho
    recentlyViewed =
        recentlyViewed.slice(0,10);

    localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(recentlyViewed)
    );

    displayRecentlyViewed();

}

function displayRecentlyViewed(){

    const box = document.getElementById("recent-history");

    if(!box) return;

    if(recentlyViewed.length === 0){

        box.innerHTML =
        "<p style='color:#aaa;'>Abhi koi Shayari nahi dekhi gayi.</p>";

        return;

    }

    box.innerHTML = "";

    recentlyViewed.forEach(function(item){

        box.innerHTML += `
            <div class="card">
                <h3>🌙 ${item.category.toUpperCase()}</h3>

                <p>
                    ${item.text}
                </p>

                <button
                    onclick="openRecentShayari('${item.category}', ${item.index})">
                    📖 Open
                </button>
            </div>
        `;

    });

}

function openRecentShayari(category, index){

    currentCategory = category;
    currentIndex = index;

    showCurrentShayari();

    // Main Shayari section par le jao
    const shayariSection = document.getElementById("today");

    if(shayariSection){

        shayariSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}
// ==========================================
// Clear Recently Viewed
// ==========================================

function clearRecentlyViewed(){

    if(recentlyViewed.length === 0){

        showToast("🕘 History already empty");

        return;
    }

    recentlyViewed = [];

    localStorage.removeItem("recentlyViewed");

    displayRecentlyViewed();

    showToast("🗑️ Recently Viewed Cleared");

}

// ==========================================
// Load Recently Viewed on Page Load
// ==========================================

document.addEventListener("DOMContentLoaded", function(){

    displayRecentlyViewed();

});

// ==========================================
// Open Dedicated Category Page
// ==========================================

function openCategoryPage(category){

    window.location.href =
        "category.html?category=" + category;

}
