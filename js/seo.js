// ==========================================
// Alfaaz By Zaman
// Dynamic Category SEO
// ==========================================

const CATEGORY_SEO = {

    love: {
        title:
            "Love Shayari | Romantic Hindi & Urdu Shayari | Alfaaz By Zaman",

        description:
            "Dil ko chhoo lene wali Love Shayari padhein. Romantic Hindi, Urdu aur Roman Shayari ke khoobsurat alfaaz — Alfaaz By Zaman ke saath.",

        intro:
            "Mohabbat, ishq aur dil ke khoobsurat ehsaas ko alfaazon mein mehsoos kijiye. Yahan Hindi, Urdu aur Roman Love Shayari ka khaas collection padhein."
    },

    sad: {
        title:
            "Sad Shayari | Heart Touching Shayari | Alfaaz By Zaman",

        description:
            "Dard, tanhai aur udaasi ke ehsaas ko bayan karti Heart Touching Sad Shayari padhein — Hindi, Urdu aur Roman alfaazon mein.",

        intro:
            "Dard, tanhai, judaai aur dil ke chupe hue ehsaas ko bayan karti Sad Shayari ka collection. Kabhi kabhi jo dil nahi keh pata, alfaaz keh dete hain."
    },

    bewafa: {
        title:
            "Bewafa Shayari | Dard Bhari Shayari | Alfaaz By Zaman",

        description:
            "Bewafai, toote dil aur adhuri mohabbat ke ehsaas se judi Bewafa aur Dard Bhari Shayari padhein — Alfaaz By Zaman.",

        intro:
            "Bewafai, toote hue bharose aur adhuri mohabbat ke dard ko alfaazon mein mehsoos kijiye. Dil se judi Bewafa Shayari yahan padhein."
    },

    islamic: {
        title:
            "Islamic Shayari | Dua & Spiritual Alfaaz | Alfaaz By Zaman",

        description:
            "Islamic Shayari, dua aur roohani ehsaas se bhare alfaaz padhein. Dil ko sukoon dene wali writings — Alfaaz By Zaman.",

        intro:
            "Imaan, dua, mohabbat aur roohani ehsaas se bhare alfaaz. Dil ko sukoon dene wali Islamic Shayari aur spiritual writings yahan padhein."
    },

    dosti: {
        title:
            "Dosti Shayari | Friendship Shayari | Alfaaz By Zaman",

        description:
            "Dosti aur yaari ke khoobsurat rishton ko bayan karti Hindi, Urdu aur Roman Dosti Shayari padhein — Alfaaz By Zaman.",

        intro:
            "Dosti sirf ek rishta nahi, bahut si yaadon ka naam hai. Yaari aur doston ke liye dil se likhi Dosti Shayari ka collection padhein."
    },

    "2line": {
        title:
            "2 Line Shayari | Short Hindi & Urdu Shayari | Alfaaz By Zaman",

        description:
            "Kam alfaazon mein gehre ehsaas. Love, Sad aur life par 2 Line Hindi, Urdu aur Roman Shayari padhein — Alfaaz By Zaman.",

        intro:
            "Kabhi sirf do lines hi poori kahani keh deti hain. Mohabbat, dard aur zindagi ke gehre ehsaas wali 2 Line Shayari yahan padhein."
    },

    "zaman-writes": {
        title:
            "Zaman Writes | Original Shayari & Poetry | Alfaaz By Zaman",

        description:
            "Zaman ki original Shayari, poetry aur dil se likhe hue khaas alfaaz padhein — sirf Alfaaz By Zaman par.",

        intro:
            "Dil se nikle aur Zaman ke alfaazon mein dhal gaye kuch khaas ehsaas. Yahan original Shayari, nazm aur poetry ka collection padhein."
    }

};


// ==========================================
// Create / Update Meta Tag
// ==========================================

function setMeta(selector, attribute, value) {

    let tag =
        document.querySelector(selector);

    if (!tag) {

        tag = document.createElement("meta");

        const parts =
            selector.match(
                /\[(name|property)="(.+?)"\]/
            );

        if (parts) {
            tag.setAttribute(
                parts[1],
                parts[2]
            );
        }

        document.head.appendChild(tag);
    }

    tag.setAttribute(
        attribute,
        value
    );
}


// ==========================================
// Create / Update Canonical
// ==========================================

function setCanonical(url) {

    let canonical =
        document.querySelector(
            'link[rel="canonical"]'
        );

    if (!canonical) {

        canonical =
            document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(
            canonical
        );
    }

    canonical.href = url;
}


// ==========================================
// Apply Category SEO
// ==========================================

function applyCategorySEO() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const category =
        params.get("category");

    if (
        !category ||
        !CATEGORY_SEO[category]
    ) {
        return;
    }

    const seo =
        CATEGORY_SEO[category];
    const categoryIntro =
    document.getElementById("categoryIntro");

if (categoryIntro) {
    categoryIntro.textContent =
        seo.intro;
}
    const canonicalURL =
        "https://alfaazbyzaman.com/category.html?category=" +
        encodeURIComponent(category);


    // Page Title

    document.title =
        seo.title;


    // Description

    setMeta(
        'meta[name="description"]',
        "content",
        seo.description
    );


    // Robots

    setMeta(
        'meta[name="robots"]',
        "content",
        "index, follow"
    );


    // Canonical URL

    setCanonical(
        canonicalURL
    );


    // Open Graph

    setMeta(
        'meta[property="og:title"]',
        "content",
        seo.title
    );

    setMeta(
        'meta[property="og:description"]',
        "content",
        seo.description
    );

    setMeta(
        'meta[property="og:url"]',
        "content",
        canonicalURL
    );

    setMeta(
        'meta[property="og:type"]',
        "content",
        "website"
    );

    setMeta(
        'meta[property="og:image"]',
        "content",
        "https://alfaazbyzaman.com/assets/social-preview.png?v=2"
    );


    // Twitter / X

    setMeta(
        'meta[name="twitter:card"]',
        "content",
        "summary_large_image"
    );

    setMeta(
        'meta[name="twitter:title"]',
        "content",
        seo.title
    );

    setMeta(
        'meta[name="twitter:description"]',
        "content",
        seo.description
    );

    setMeta(
        'meta[name="twitter:image"]',
        "content",
        "https://alfaazbyzaman.com/assets/social-preview.png?v=2"
    );


    console.log(
        "🔎 SEO Applied:",
        category
    );

}


// ==========================================
// Initialize
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    applyCategorySEO
);
