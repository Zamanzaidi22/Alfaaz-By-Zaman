console.log("FAVORITE.JS LOADED");
// ==========================================
// Alfaaz By Zaman
// Favorite + Like System
// ==========================================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let likes = JSON.parse(localStorage.getItem("likes")) || {};

function addToFavorites(){
console.log("Favorite Button Clicked");
    if(!currentCategory) return;

    const shayari = SHAYARI_DB[currentCategory][currentIndex];

    if(favorites.includes(shayari)){
        showToast("❤️ Already in Favorites");
        return;
    }

    favorites.push(shayari);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    updateFavoriteUI();

    showToast("❤️ Added to Favorites");

}

function likeCurrentShayari(){

    if(!currentCategory) return;

    const shayari = SHAYARI_DB[currentCategory][currentIndex];

    if(!likes[shayari]){
        likes[shayari]=0;
    }

    likes[shayari]++;

    localStorage.setItem("likes",JSON.stringify(likes));

    updateFavoriteUI();

    showToast("👍 Liked ❤️");

}
function updateFavoriteUI(){

    const favBox = document.getElementById("favorites");

    const favCount = document.getElementById("total-favorites");

    const likeCount = document.getElementById("total-likes");

    if(favCount)
        favCount.innerText = favorites.length;

    const totalLikes = Object.values(likes).reduce((sum, count) => sum + count, 0);

if(likeCount){
    likeCount.innerText = totalLikes;
}

    if(!favBox) return;

    if(favorites.length===0){

        favBox.innerHTML =
        "<p style='color:#aaa;'>Abhi koi Favorite Shayari nahi hai.</p>";

        return;

    }

    favBox.innerHTML="";

    favorites.forEach(function(item){

        favBox.innerHTML += `
        <div class="shayari-card">
            <p>${item}</p>
        </div>
        `;

    });

}
const mostLoved =
document.getElementById("most-loved");

if(mostLoved){

    const sorted =
    Object.entries(likes)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5);

    if(sorted.length===0){

        mostLoved.innerHTML =
        "<p style='color:#aaa;'>Abhi tak kisi Shayari ko Like nahi mila.</p>";

    }else{

        mostLoved.innerHTML="";

        sorted.forEach(function(item){

            mostLoved.innerHTML += `
            <div class="card">
            ❤️ ${item[1]} Likes
            <br><br>
            ${item[0]}
            </div>
            `;

        });

    }

}
function showToast(message){

    console.log("Toast:", message);
    const toast = document.getElementById("toast");

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
document.addEventListener("DOMContentLoaded",updateFavoriteUI);
