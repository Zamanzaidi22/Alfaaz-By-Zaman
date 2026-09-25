// ==========================================
// Alfaaz By Zaman
// Animated Counter
// ==========================================

function animateCounter(id, target, suffix = "") {

    const el = document.getElementById(id);

    if (!el) return;

    let count = 0;

    const speed = Math.max(1, Math.ceil(target / 50));

    const timer = setInterval(function () {

        count += speed;

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        el.innerText = count + suffix;

    }, 25);

}

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        if(typeof SHAYARI_DB === "undefined"){
            return;
        }

        const totalShayari =
            Object.values(SHAYARI_DB)
                .reduce(function(total, category){

                    return total + category.length;

                }, 0);


        const totalCategories =
            Object.keys(SHAYARI_DB).length;


        animateCounter(
            "count-shayari",
            totalShayari,
            "+"
        );

        animateCounter(
            "count-category",
            totalCategories
        );

        animateCounter(
            "count-original",
            100,
            "%"
        );

    }, 700);

});

// ==========================================
// Website Statistics
// ==========================================

function updateStatsUI(){

    // ==========================================
    // Total Shayari
    // ==========================================

    let totalShayari = 0;

    for(const category in SHAYARI_DB){

        totalShayari += SHAYARI_DB[category].length;

    }

    const shayariCount =
        document.getElementById("shayari-count");

    if(shayariCount){

        shayariCount.innerText =
            totalShayari;

    }


    // ==========================================
    // Total Views
    // ==========================================

    const totalViews =
        Number(localStorage.getItem("totalViews")) || 0;

    const viewsElement =
        document.getElementById("total-views");

    if(viewsElement){

        viewsElement.innerText =
            totalViews;

    }


    // ==========================================
    // Total Likes
    // ==========================================

    const likes =
        JSON.parse(
            localStorage.getItem("likes")
        ) || {};

    const totalLikes =
        Object.values(likes)
        .reduce(
            (sum, count) => sum + count,
            0
        );

    const likesElement =
        document.getElementById("total-likes");

    if(likesElement){

        likesElement.innerText =
            totalLikes;

    }


    // ==========================================
    // Total Favorites
    // ==========================================

    const favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    const favoritesElement =
        document.getElementById("total-favorites");

    if(favoritesElement){

        favoritesElement.innerText =
            favorites.length;

    }


    // ==========================================
    // Recently Viewed Count
    // ==========================================

    const recentlyViewed =
        JSON.parse(
            localStorage.getItem("recentlyViewed")
        ) || [];

    const recentElement =
        document.getElementById("recent-count");

    if(recentElement){

        recentElement.innerText =
            recentlyViewed.length;

    }

}

// ==========================================
// Dynamic Shayari Counts
// ==========================================

function updateShayariCounts(){

    if(typeof SHAYARI_DB === "undefined"){
        console.log("SHAYARI_DB not loaded");
        return;
    }


    // Category counts
    const categoryCounters =
        document.querySelectorAll(
            "[data-category-count]"
        );


    categoryCounters.forEach(function(counter){

        const category =
            counter.getAttribute(
                "data-category-count"
            );


        if(SHAYARI_DB[category]){

            counter.textContent =
                SHAYARI_DB[category].length;

        }

    });


    // Total Shayari
    const totalShayari =
        Object.values(SHAYARI_DB)
            .reduce(function(total, category){

                return total + category.length;

            }, 0);


    // Statistics section
    const totalCounter =
        document.getElementById(
            "shayari-count"
        );

    if(totalCounter){

        totalCounter.textContent =
            totalShayari;

    }


    // Homepage hero counter
    const heroCounter =
        document.getElementById(
            "hero-shayari-count"
        );

    if(heroCounter){

        heroCounter.textContent =
            totalShayari + "+";

    }


    console.log(
        "📚 Total Shayari:",
        totalShayari
    );

}


document.addEventListener(
    "DOMContentLoaded",
    updateShayariCounts
);
