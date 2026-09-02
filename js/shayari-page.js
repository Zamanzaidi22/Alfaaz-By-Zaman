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
// Individual Shayari SEO
// ==========================================

function getSEOCategoryName(category){

    const names = {
        love: "Love",
        sad: "Sad",
        bewafa: "Bewafa",
        islamic: "Islamic",
        dosti: "Dosti",
        "2line": "2 Line",
        "zaman-writes": "Zaman Writes"
    };

    return names[category] || "Shayari";

}


function setShayariMeta(selector, attribute, value){

    let tag =
        document.querySelector(selector);

    if(!tag){

        tag =
            document.createElement("meta");

        const match =
            selector.match(
                /\[(name|property)="(.+?)"\]/
            );

        if(match){

            tag.setAttribute(
                match[1],
                match[2]
            );

        }

        document.head.appendChild(tag);

    }

    tag.setAttribute(
        attribute,
        value
    );

}


function setShayariCanonical(url){

    let canonical =
        document.querySelector(
            'link[rel="canonical"]'
        );

    if(!canonical){

        canonical =
            document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(
            canonical
        );

    }

    canonical.href = url;

}


function applyShayariSEO(shayari){

    const categoryName =
        getSEOCategoryName(
            shayariCategory
        );


    // Remove line breaks / extra spaces

    const cleanText =
        shayari
            .replace(/\s+/g, " ")
            .trim();


    // Short text for page title

    const titleText =
        cleanText.length > 55
            ? cleanText.substring(0, 55) + "..."
            : cleanText;


    // Description around 155 characters

    const descriptionText =
        cleanText.length > 150
            ? cleanText.substring(0, 150) + "..."
            : cleanText;


    const pageTitle =
        titleText +
        " | " +
        categoryName +
        " Shayari | Alfaaz By Zaman";


    const description =
        descriptionText +
        " — Alfaaz By Zaman";


    const canonicalURL =
        "https://alfaazbyzaman.com/shayari.html?category=" +
        encodeURIComponent(
            shayariCategory
        ) +
        "&index=" +
        shayariIndex;


    // Page Title

    document.title =
        pageTitle;


    // Basic SEO

    setShayariMeta(
        'meta[name="description"]',
        "content",
        description
    );

    setShayariMeta(
        'meta[name="robots"]',
        "content",
        "index, follow"
    );


    // Canonical

    setShayariCanonical(
        canonicalURL
    );


    // Open Graph

    setShayariMeta(
        'meta[property="og:title"]',
        "content",
        pageTitle
    );

    setShayariMeta(
        'meta[property="og:description"]',
        "content",
        description
    );

    setShayariMeta(
        'meta[property="og:url"]',
        "content",
        canonicalURL
    );

    setShayariMeta(
        'meta[property="og:type"]',
        "content",
        "article"
    );

    setShayariMeta(
        'meta[property="og:image"]',
        "content",
        "https://alfaazbyzaman.com/assets/social-preview.png?v=2"
    );


    // Twitter / X

    setShayariMeta(
        'meta[name="twitter:card"]',
        "content",
        "summary_large_image"
    );

    setShayariMeta(
        'meta[name="twitter:title"]',
        "content",
        pageTitle
    );

    setShayariMeta(
        'meta[name="twitter:description"]',
        "content",
        description
    );

    setShayariMeta(
        'meta[name="twitter:image"]',
        "content",
        "https://alfaazbyzaman.com/assets/social-preview.png?v=2"
    );


    console.log(
        "🔎 Shayari SEO Applied:",
        shayariCategory,
        shayariIndex
    );

}

// ==========================================
// Individual Shayari Structured Data
// ==========================================

function applyShayariStructuredData(shayari){

    const categoryName =
        getSEOCategoryName(
            shayariCategory
        );

    const cleanText =
        shayari
            .replace(/\s+/g, " ")
            .trim();

    const canonicalURL =
        "https://alfaazbyzaman.com/shayari.html?category=" +
        encodeURIComponent(shayariCategory) +
        "&index=" +
        shayariIndex;


    // Purana dynamic schema remove
    let oldSchema =
        document.getElementById(
            "shayariStructuredData"
        );

    if(oldSchema){
        oldSchema.remove();
    }


    const schema =
        document.createElement("script");

    schema.type =
        "application/ld+json";

    schema.id =
        "shayariStructuredData";


    schema.textContent =
        JSON.stringify({

            "@context":
                "https://schema.org",

            "@type":
                "CreativeWork",

            "name":
                categoryName +
                " Shayari #" +
                (shayariIndex + 1),

            "text":
                cleanText,

            "description":
                cleanText,

            "genre":
                categoryName +
                " Shayari",

            "inLanguage":
                "hi-Latn",

            "url":
                canonicalURL,

            "author": {
                "@type": "Person",
                "name": "Zaman"
            },

            "publisher": {
                "@type": "Organization",
                "name": "Alfaaz By Zaman",
                "url":
                    "https://alfaazbyzaman.com/"
            },

            "isPartOf": {
                "@type": "WebSite",
                "name":
                    "Alfaaz By Zaman",
                "url":
                    "https://alfaazbyzaman.com/"
            }

        });


    document.head.appendChild(
        schema
    );


    console.log(
        "📚 Structured Data Applied:",
        shayariCategory,
        shayariIndex
    );

}

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
// Dynamic SEO
// ======================================

applyShayariSEO(shayari);
applyShayariStructuredData(shayari);

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
