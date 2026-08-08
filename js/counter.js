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

    // ------------------------------------------
    // Total Shayari
    // ------------------------------------------

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


    // ------------------------------------------
    // Total Views
    // ------------------------------------------

    const totalViews =
        Number(localStorage.getItem("totalViews")) || 0;

    const viewsElement =
        document.getElementById("total-views");

    if(viewsElement){

        viewsElement.innerText =
            totalViews;

    }
    // ------------------------------------------
    // Recently Viewed
    // ------------------------------------------

    const recentCount =
        document.getElementById("recent-count");

    if(recentCount){

        recentCount.innerText =
            recentlyViewed.length;

    }
}


// Load Statistics
document.addEventListener(
    "DOMContentLoaded",
    function(){

        updateStatsUI();

    }
);
