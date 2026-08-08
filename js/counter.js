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

        animateCounter("count-shayari", 300, "+");

        animateCounter("count-category", 6);

        animateCounter("count-original", 100, "%");

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
