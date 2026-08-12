console.log("FAVORITE.JS LOADED");

// ==========================================
// Alfaaz By Zaman
// Favorite + Like System
// ==========================================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let likes = JSON.parse(localStorage.getItem("likes")) || {};
let likeActivity = JSON.parse(localStorage.getItem("likeActivity")) || [];

// ==========================================
// Add To Favorites
// ==========================================

function addToFavorites(){

    console.log("Favorite Button Clicked");

    if(!currentCategory) return;

    const shayari =
        SHAYARI_DB[currentCategory][currentIndex];

    if(favorites.includes(shayari)){

        showToast("❤️ Already in Favorites");

        return;
    }

    favorites.push(shayari);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    updateFavoriteUI();

    showToast("❤️ Added to Favorites");

}


// ==========================================
// Like Current Shayari
// ==========================================

function likeCurrentShayari(){

    if(!currentCategory) return;

    const shayari =
        SHAYARI_DB[currentCategory][currentIndex];

    // Lifetime Likes
    if(!likes[shayari]){
        likes[shayari] = 0;
    }

    likes[shayari]++;

    localStorage.setItem(
        "likes",
        JSON.stringify(likes)
    );

    // Recent Like Activity
    likeActivity.push({

        shayari: shayari,

        time: Date.now()

    });

    localStorage.setItem(
        "likeActivity",
        JSON.stringify(likeActivity)
    );

    updateFavoriteUI();
updateShayariLikeCount();

showToast("👍 Liked ❤️");

}


// ==========================================
// Update Favorite + Like UI
// ==========================================

function updateFavoriteUI(){

    const favBox =
        document.getElementById("favorites");

    const favCount =
        document.getElementById("total-favorites");

    const likeCount =
        document.getElementById("total-likes");

    const mostLoved =
        document.getElementById("most-loved");


    // ------------------------------------------
    // Favorite Count
    // ------------------------------------------

    if(favCount){

        favCount.innerText =
            favorites.length;

    }


    // ------------------------------------------
    // Total Likes
    // ------------------------------------------

    const totalLikes =
        Object.values(likes)
        .reduce(
            (sum, count) => sum + count,
            0
        );

    if(likeCount){

        likeCount.innerText =
            totalLikes;

    }


    // ------------------------------------------
    // Favorite Shayari List
    // ------------------------------------------

    if(favBox){

        if(favorites.length === 0){

            favBox.innerHTML =
                "<p style='color:#aaa;'>Abhi koi Favorite Shayari nahi hai.</p>";

        }else{

            favBox.innerHTML = "";

            favorites.forEach(function(item){

                favBox.innerHTML += `
                    <div class="shayari-card">

                        <p>${item}</p>

                    </div>
                `;

            });

        }

    }


    // ------------------------------------------
    // Most Loved Shayari
    // ------------------------------------------

    if(mostLoved){

        const sorted =
            Object.entries(likes)
            .sort(
                (a,b) => b[1] - a[1]
            )
            .slice(0,5);


        if(sorted.length === 0){

            mostLoved.innerHTML =
                "<p style='color:#aaa;'>Abhi tak kisi Shayari ko Like nahi mila.</p>";

        }else{

            mostLoved.innerHTML = "";

            sorted.forEach(function(item){

                mostLoved.innerHTML += `
                    <div class="shayari-card">

                        <p>
                            ❤️ ${item[1]} Likes
                        </p>

                        <p>
                            ${item[0]}
                        </p>

                    </div>
                `;

            });

        }

    }

}


// ==========================================
// Toast Notification
// ==========================================

function showToast(message){

    console.log("Toast:", message);

    const toast =
        document.getElementById("toast");

    if(!toast){

        console.log("Toast div not found");

        return;
    }

    toast.textContent = message;

    toast.classList.remove("show");

    void toast.offsetWidth;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },2000);

}


// ==========================================
// Load UI
// ==========================================

document.addEventListener("DOMContentLoaded",function(){

    updateFavoriteUI();

    displayTrendingShayari();

});

// ==========================================
// Trending Shayari System
// ==========================================

function displayTrendingShayari(){

    const trendingBox =
        document.getElementById("trending-shayari");

    if(!trendingBox) return;

    // Last 24 hours
    const now = Date.now();

    const oneDay =
        24 * 60 * 60 * 1000;

    const recentActivity =
        likeActivity.filter(function(item){

            return (now - item.time) <= oneDay;

        });


    // Count recent likes
    const trendingLikes = {};

    recentActivity.forEach(function(item){

        if(!trendingLikes[item.shayari]){

            trendingLikes[item.shayari] = 0;

        }

        trendingLikes[item.shayari]++;

    });


    // Sort recent likes
    const sorted =
        Object.entries(trendingLikes)
        .sort(function(a,b){

            return b[1] - a[1];

        })
        .slice(0,5);


    // No trending shayari
    if(sorted.length === 0){

        trendingBox.innerHTML =
            "<p style='color:#aaa;'>Abhi koi Trending Shayari nahi hai.</p>";

        return;

    }


    trendingBox.innerHTML = "";


    sorted.forEach(function(item,index){

        const shayari =
            item[0];

        const recentLikes =
            item[1];

        const lifetimeLikes =
            likes[shayari] || 0;


        trendingBox.innerHTML += `

            <div class="card trending-card">

                <div class="trending-rank">

                    🔥 #${index + 1}

                </div>

                <p>

                    ${shayari}

                </p>

                <span class="trending-likes">

                    🔥 ${recentLikes} Recent Likes
                    &nbsp; • &nbsp;
                    ❤️ ${lifetimeLikes} Total Likes

                </span>

            </div>

        `;

    });

}
// ==========================================
// Update Current Shayari Like Count
// ==========================================

function updateShayariLikeCount(){

    if(!currentCategory) return;

    const shayari =
        SHAYARI_DB[currentCategory][currentIndex];

    const likeCount =
        document.getElementById("shayariLikeCount");

    if(likeCount){

        likeCount.innerText =
            likes[shayari] || 0;

    }

}
