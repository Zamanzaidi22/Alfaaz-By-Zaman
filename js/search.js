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

// ==========================================
// Smart Search 2.0
// Main Search Function
// ==========================================

function searchShayari(){

    const input =
        document.getElementById("searchInput");

    if(!input) return;

    const keyword =
        input.value
        .trim()
        .toLowerCase();


    if(keyword === ""){

        showToast(
            "🔍 Kuch search likhiye."
        );

        return;

    }


    // ======================================
    // 1. Exact Shayari Text Match
    // ======================================

    for(const category in SHAYARI_DB){

        const list =
            SHAYARI_DB[category];

        for(let i = 0; i < list.length; i++){

            const shayari =
                list[i].toLowerCase();

            if(
                shayari.includes(keyword)
            ){

                currentCategory =
                    category;

                currentIndex =
                    i;

                showCurrentShayari();

                showToast(
                    "✨ Shayari mil gayi"
                );

                return;

            }

        }

    }


    // ======================================
    // 2. Smart Category Keyword Match
    // ======================================

    let matchedCategory = "";


    for(
        const category in SEARCH_KEYWORDS
    ){

        const words =
            SEARCH_KEYWORDS[category];


        const matched =
            words.some(function(word){

                return (
                    keyword === word ||
                    keyword.includes(word) ||
                    word.includes(keyword)
                );

            });


        if(matched){

            matchedCategory =
                category;

            break;

        }

    }


    // ======================================
    // 3. Open Smart Result
    // ======================================

    if(
        matchedCategory &&
        SHAYARI_DB[matchedCategory]
    ){

        currentCategory =
            matchedCategory;


        // Random relevant Shayari
        currentIndex =
            Math.floor(
                Math.random() *
                SHAYARI_DB[
                    matchedCategory
                ].length
            );


        showCurrentShayari();


        showToast(
            "✨ " +
            matchedCategory
                .replace("-", " ")
                .toUpperCase() +
            " Shayari"
        );


        // Scroll to Aaj Ki Shayari

        const today =
            document.getElementById(
                "today"
            );


        if(today){

            today.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }


        return;

    }


    // ======================================
    // Nothing Found
    // ======================================

    showToast(
        "❌ Shayari nahi mili."
    );

}
