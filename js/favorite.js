console.log("FAVORITE.JS LOADED");
// ==========================================
// Alfaaz By Zaman
// Favorite + Like System
// ==========================================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let totalLikes = Number(localStorage.getItem("totalLikes")) || 0;

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
console.log("Like Button Clicked");
    showToast("Test");
    totalLikes++;

    localStorage.setItem("totalLikes", totalLikes);

    updateFavoriteUI();

    showToast("👍 Liked");

}

function updateFavoriteUI(){

    const favBox = document.getElementById("favorites");

    const favCount = document.getElementById("total-favorites");

    const likeCount = document.getElementById("total-likes");

    if(favCount)
        favCount.innerText = favorites.length;

    if(likeCount)
        likeCount.innerText = totalLikes;

    if(!favBox) return;

    if(favorites.length===0){

        favBox.innerHTML =
        "<p style='color:#aaa;'>Abhi koi Favorite Shayari nahi hai.</p>";

        return;

    }

    favBox.innerHTML="";

    favorites.forEach(function(item){

        favBox.innerHTML += `
        <div class="card">
            <p>${item}</p>
        </div>
        `;

    });

}

function showToast(message){

    const toast = document.getElementById("toast");

    if(!toast){
        console.log("Toast div not found");
        return;
    }

    toast.textContent = message;

    toast.classList.remove("show");

    setTimeout(function(){

        toast.classList.add("show");

    },10);

    setTimeout(function(){

        toast.classList.remove("show");

    },2000);

}
document.addEventListener("DOMContentLoaded",updateFavoriteUI);
