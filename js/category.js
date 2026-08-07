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

    if(
    !SHAYARI_DB[currentCategory] ||
    !SHAYARI_DB[currentCategory][currentIndex]
){
    return;
    }

    document.getElementById("category-title").innerText =
        currentCategory.toUpperCase();

    document.getElementById("shayari-text").innerText =
        SHAYARI_DB[currentCategory][currentIndex];
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
