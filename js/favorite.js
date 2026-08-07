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

    console.log("Like Button Clicked");

    if(!currentCategory) return;

    const shayari =
        SHAYARI_DB[currentCategory][currentIndex];

    if(!likes[shayari]){

        likes[shayari] = 0;

    }

    likes[shayari]++;

    localStorage.setItem(
        "likes",
        JSON.stringify(likes)
    );

    updateFavoriteUI();
 displayTrendingShayari();
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

    const sorted =
        Object.entries(likes)
        .sort((a,b) => b[1] - a[1])
        .slice(0,5);

    if(sorted.length === 0){

        trendingBox.innerHTML =
        "<p style='color:#aaa;'>Abhi koi Trending Shayari nahi hai.</p>";

        return;
    }

    trendingBox.innerHTML = "";

    sorted.forEach(function(item){

        trendingBox.innerHTML += `
            <div class="card trending-card">

                <div class="trending-rank">
                    🔥 #${sorted.indexOf(item) + 1}
                </div>

                <p>${item[0]}</p>

                <span class="trending-likes">
                    ❤️ ${item[1]} Likes
                </span>

            </div>
        `;

    });

}
