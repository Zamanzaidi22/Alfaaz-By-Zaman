console.log("Alfaaz By Zaman Loaded");
const searchInput = document.querySelector("input");
const cards = document.querySelectorAll(".categories div");

searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
const shayari = {

love: [
"❤️ Mohabbat lafzon se nahi, ehsaason se hoti hai.",
"❤️ Teri muskurahat meri duniya hai.",
"❤️ Dil sirf tumhara naam leta hai.",
"❤️ Ishq wahi jo har dua me yaad aaye.",
"❤️ Tum meri zindagi ki sabse khoobsurat kahani ho."
],

sad: [
"💔 Kuch log yaad ban kar reh jaate hain.",
"💔 Khamoshi bhi dard bayan karti hai.",
"💔 Har muskaan ke peeche ek kahani hoti hai.",
"💔 Dil tootne ki awaaz sirf mehsoos hoti hai.",
"💔 Waqt sab badal deta hai."
],

bewafa: [
"🥀 Wafa humne ki, yaadein tum de gaye.",
"🥀 Bewafai ka dard sabse gehra hota hai.",
"🥀 Tum badal gaye, waqt nahi.",
"🥀 Jis par yakeen tha wahi ajnabi nikla.",
"🥀 Yaadon ka bojh sabse bhaari hota hai."
],

islamic: [
"🌙 Allah par bharosa rakho.",
"🌙 Dua kabhi bekaar nahi jaati.",
"🌙 Sabr karne walon ke saath Allah hai.",
"🌙 Har mushkil ke baad aasani hai.",
"🌙 Allah ki rehmat se kabhi mayoos mat ho."
],

dosti: [
"🤝 Saccha dost daulat se badhkar hota hai.",
"🤝 Dosti dilon ko jodti hai.",
"🤝 Mushkil waqt ka saathi hi asli dost hai.",
"🤝 Dost woh jo har haal me saath de.",
"🤝 Dosti ek khoobsurat ehsaas hai."
],

"2line":[
"✨ Alfaaz kam, ehsaas gehre.",
"✨ Muskaan me bhi dard hota hai.",
"✨ Har raat ke baad subah hoti hai.",
"✨ Khamoshi bhi kabhi kabhi bolti hai.",
"✨ Har dua ka ek sahi waqt hota hai."
]

};

function showCategory(category){

const list = shayari[category];

const random =
Math.floor(Math.random()*list.length);

document.getElementById("shayari-text").innerHTML =
list[random];

const names = {
love:"❤️ Love",
sad:"💔 Sad",
bewafa:"🥀 Bewafa",
islamic:"🌙 Islamic",
dosti:"🤝 Dosti",
"2line":"✨ 2 Line"
};

document.getElementById("category-name").innerHTML =
names[category];

}
function copyShayari(){

const text =
document.getElementById("shayari-text").innerText;

navigator.clipboard.writeText(text);

alert("✅ Shayari Copied!");
}
function shareWhatsApp(){

const text =
document.getElementById("shayari-text").innerText;

const url =
"https://wa.me/?text=" + encodeURIComponent(text);

window.open(url, "_blank");

}
function randomShayari(){

const categories = Object.keys(shayari);

const randomCategory =
categories[Math.floor(Math.random()*categories.length)];

showCategory(randomCategory);

}
document.getElementById("shayari-text").innerHTML =
"❤️ Kisi bhi category par click kijiye...";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

displayFavorites();
function removeFavorite(index){

    favorites.splice(index,1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();

function removeFavorite(index) {

    favorites.splice(index, 1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

function addToFavorites() {

    const text = document.getElementById("shayari-text").innerHTML;

    if (!text || text.trim() === "") {
        alert("Pehle koi shayari select karo.");
        return;
    }

    if (favorites.includes(text)) {
        alert("Ye shayari pehle se Favorite hai.");
        return;
    }

    favorites.push(text);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

function displayFavorites() {

    const favBox = document.getElementById("favorites");

    if (!favBox) return;

    favBox.innerHTML = "";

    favorites.forEach((item, index) => {

        favBox.innerHTML += `
        <div class="card">
            <p>❤️ ${item}</p>

            <button class="delete-btn" onclick="removeFavorite(${index})">
                🗑 Delete
            </button>
        </div>
        `;

    });

}
