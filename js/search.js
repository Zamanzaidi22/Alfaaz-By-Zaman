// ==========================================
// Alfaaz By Zaman
// Search System
// ==========================================

// ==========================================
// Smart Search 2.0
// Category Keyword Map
// ==========================================

const SEARCH_KEYWORDS = {

    love: [
        "love",
        "pyar",
        "pyaar",
        "mohabbat",
        "ishq",
        "romantic",
        "romance",
        "dil",
        "lover",
        "jaan",
        "chahat"
    ],

    sad: [
        "sad",
        "dard",
        "dukh",
        "tanhai",
        "tanha",
        "akelapan",
        "alone",
        "broken",
        "broken heart",
        "aansu",
        "rona",
        "judai",
        "judaai"
    ],

    bewafa: [
        "bewafa",
        "bewafai",
        "dhokha",
        "dhoka",
        "cheat",
        "cheating",
        "wafa",
        "fareb",
        "betrayal"
    ],

    islamic: [
        "islamic",
        "islam",
        "allah",
        "dua",
        "sabr",
        "sukoon",
        "namaz",
        "imaan",
        "iman",
        "khuda",
        "rab",
        "deen"
    ],

    dosti: [
        "dosti",
        "dost",
        "yaar",
        "friend",
        "friends",
        "friendship",
        "yaari"
    ],

    "2line": [
        "2 line",
        "2line",
        "two line",
        "short",
        "short shayari",
        "do line",
        "2 lines"
    ],

    "zaman-writes": [
        "zaman",
        "zaman writes",
        "original",
        "original shayari",
        "original writing",
        "zaman shayari"
    ]

};

function searchShayari(){

    const input = document.getElementById("searchInput");

    if(!input) return;

    const keyword = input.value.trim().toLowerCase();

    if(keyword === ""){
        showToast("🔍 Kuch search likhiye.");
        return;
    }

    for(const category in SHAYARI_DB){

        const list = SHAYARI_DB[category];

        for(let i=0;i<list.length;i++){

            if(list[i].toLowerCase().includes(keyword)){

                currentCategory = category;
                currentIndex = i;

                showCurrentShayari();

                return;

            }

        }

    }

    showToast("❌ Shayari nahi mili.");

}
