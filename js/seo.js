// ==========================================
// Alfaaz By Zaman
// Dynamic Category SEO
// ==========================================

const CATEGORY_SEO = {

    love: {
        title:
            "Love Shayari | Romantic Hindi & Urdu Shayari | Alfaaz By Zaman",

        description:
            "Dil ko chhoo lene wali Love Shayari padhein. Romantic Hindi, Urdu aur Roman Shayari ke khoobsurat alfaaz — Alfaaz By Zaman ke saath."
    },

    sad: {
        title:
            "Sad Shayari | Heart Touching Shayari | Alfaaz By Zaman",

        description:
            "Dard, tanhai aur udaasi ke ehsaas ko bayan karti Heart Touching Sad Shayari padhein — Hindi, Urdu aur Roman alfaazon mein."
    },

    bewafa: {
        title:
            "Bewafa Shayari | Dard Bhari Shayari | Alfaaz By Zaman",

        description:
            "Bewafai, toote dil aur adhuri mohabbat ke ehsaas se judi Bewafa aur Dard Bhari Shayari padhein — Alfaaz By Zaman."
    },

    islamic: {
        title:
            "Islamic Shayari | Dua & Spiritual Alfaaz | Alfaaz By Zaman",

        description:
            "Islamic Shayari, dua aur roohani ehsaas se bhare alfaaz padhein. Dil ko sukoon dene wali writings — Alfaaz By Zaman."
    },

    dosti: {
        title:
            "Dosti Shayari | Friendship Shayari | Alfaaz By Zaman",

        description:
            "Dosti aur yaari ke khoobsurat rishton ko bayan karti Hindi, Urdu aur Roman Dosti Shayari padhein — Alfaaz By Zaman."
    },

    "2line": {
        title:
            "2 Line Shayari | Short Hindi & Urdu Shayari | Alfaaz By Zaman",

        description:
            "Kam alfaazon mein gehre ehsaas. Love, Sad aur life par 2 Line Hindi, Urdu aur Roman Shayari padhein — Alfaaz By Zaman."
    },

    "zaman-writes": {
        title:
            "Zaman Writes | Original Shayari & Poetry | Alfaaz By Zaman",

        description:
            "Zaman ki original Shayari, poetry aur dil se likhe hue khaas alfaaz padhein — sirf Alfaaz By Zaman par."
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
