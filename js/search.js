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
// Smart Search Result Helpers
// ==========================================

function clearSmartSearchResults(){

    const box =
        document.getElementById(
            "smart-search-results"
        );

    const list =
        document.getElementById(
            "search-results-list"
        );

    if(box){
        box.style.display = "none";
    }

    if(list){

        list.innerHTML = `
            <p class="search-results-empty">
                Search karne ke baad relevant Shayari yahan dikhengi.
            </p>
        `;

    }

}


function openSmartSearchResult(category, index){

    currentCategory = category;
    currentIndex = index;

    showCurrentShayari();

    const today =
        document.getElementById("today");

    if(today){

        today.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }

}

// ==========================================
// Smart Search 2.0
// Multiple Ranked Results
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


    const results = [];

    const added = new Set();


    // ======================================
    // 1. Exact Shayari Text Matches
    // ======================================

    for(const category in SHAYARI_DB){

        const list =
            SHAYARI_DB[category];

        for(let i = 0; i < list.length; i++){

            const text =
                list[i].toLowerCase();

            if(text.includes(keyword)){

                const key =
                    category + "-" + i;

                if(!added.has(key)){

                    results.push({
                        category: category,
                        index: i,
                        text: list[i],
                        score: 100
                    });

                    added.add(key);

                }

            }

        }

    }


    // ======================================
    // 2. Smart Category Match
    // ======================================

    let smartCategory = "";


    for(const category in SEARCH_KEYWORDS){

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

            smartCategory =
                category;

            break;

        }

    }


    // ======================================
    // 3. Add Category Results
    // ======================================

    if(
        smartCategory &&
        SHAYARI_DB[smartCategory]
    ){

        SHAYARI_DB[smartCategory]
            .forEach(function(shayari, index){

                const key =
                    smartCategory +
                    "-" +
                    index;

                if(!added.has(key)){

                    results.push({
                        category:
                            smartCategory,

                        index:
                            index,

                        text:
                            shayari,

                        score:
                            50
                    });

                    added.add(key);

                }

            });

    }


    // ======================================
    // 4. Sort + Limit
    // ======================================

    results.sort(function(a,b){

        return b.score - a.score;

    });


    const finalResults =
        results.slice(0,8);


    // ======================================
    // 5. Display Panel
    // ======================================

    displaySmartSearchResults(
        finalResults,
        keyword
    );

}

// ==========================================
// Display Smart Search Results
// ==========================================

function displaySmartSearchResults(
    results,
    keyword
){

    const box =
        document.getElementById(
            "smart-search-results"
        );

    const list =
        document.getElementById(
            "search-results-list"
        );


    if(!box || !list) return;


    box.style.display =
        "block";


    // No results
    if(results.length === 0){

        list.innerHTML = `

            <p class="search-results-empty">

                ❌ "${keyword}" ke liye
                koi Shayari nahi mili.

            </p>

        `;

        showToast(
            "❌ Shayari nahi mili."
        );

        return;

    }


    list.innerHTML = "";


    results.forEach(function(item){

        const safeText =
            item.text
            .replace(/&/g,"&amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;");


        list.innerHTML += `

            <div class="search-result-card">

                <span class="search-result-category">

                    ${item.category
                        .replace("-", " ")
                        .toUpperCase()}

                </span>


                <p class="search-result-text">

                    ${safeText}

                </p>


                <button
                    class="search-result-open"

                    onclick="
                        openSmartSearchResult(
                            '${item.category}',
                            ${item.index}
                        )
                    ">

                    📖 Open Shayari

                </button>

            </div>

        `;

    });


    showToast(
        "✨ " +
        results.length +
        " Shayari mili"
    );


    // Scroll to results
    box.scrollIntoView({
        behavior:"smooth",
        block:"nearest"
    });

}
