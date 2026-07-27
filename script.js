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
const dailyQuotes = [

"✨ Har din ek nayi umeed lekar aata hai.",

"🌙 Allah par bharosa rakho, har mushkil aasaan hogi.",

"❤️ Mohabbat sirf alfaaz nahi, ehsaas ka naam hai.",

"🤝 Sacchi dosti zindagi ki sabse badi daulat hai.",

"💔 Har dard ek nayi taqat dekar jaata hai."

];
const shayari = {

love: [
"❤️ Mohabbat lafzon se nahi, ehsaason se hoti hai.",
"❤️ Teri muskurahat meri duniya hai.",
"❤️ Dil sirf tumhara naam leta hai.",
"❤️ Ishq wahi jo har dua me yaad aaye.",
"❤️ Tum meri zindagi ki sabse khoobsurat kahani ho.",
"❤️ Teri khamoshi bhi meri rooh tak baat kar jaati hai.",
"❤️ Mohabbat wahi hai jo waqt ke saath aur gehri ho jaaye.",
"❤️ Har dua me tera naam aata hai, shayad isi ko ishq kehte hain.",
"❤️ Tum paas ho ya door, dil sirf tumhara hi rehta hai.",
"❤️ Teri muskaan meri har udaasi ko chura leti hai.",
"❤️ Ishq me jeetna zaroori nahi, nibhana zaroori hota hai.",
"❤️ Tere saath guzra har lamha meri zindagi ka haseen safha hai.",
"❤️ Dil ko sukoon sirf teri yaadon ke saaye me milta hai.",
"❤️ Mohabbat kabhi alfaaz ki mohtaaj nahi hoti.",
"❤️ Tum meri kahani ka sabse khoobsurat ehsaas ho."
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
function searchShayari() {

    const value = searchInput.value.toLowerCase().trim();

    if (value === "") {
        return;
    }

    if (value.includes("love") || value.includes("mohabbat")) {
        showCategory("love");
        return;
    }

    if (value.includes("sad") || value.includes("dard")) {
        showCategory("sad");
        return;
    }

    if (value.includes("bewafa")) {
        showCategory("bewafa");
        return;
    }

    if (value.includes("islamic") || value.includes("allah") || value.includes("dua")) {
        showCategory("islamic");
        return;
    }

    if (value.includes("dosti") || value.includes("dost") || value.includes("friend")) {
        showCategory("dosti");
        return;
    }

    if (value.includes("2line") || value.includes("2 line")) {
        showCategory("2line");
        return;
    }

    alert("❌ Koi matching category nahi mili.");
}
document.getElementById("shayari-text").innerHTML =
"❤️ Kisi bhi category par click kijiye...";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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
function loadDailyQuote() {

    const quote =
    dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];

    const box = document.getElementById("daily-quote");

    if (box) {

        box.innerHTML = quote;

    }

}

loadDailyQuote();
function updateShayariCount() {

    let total = 0;

    for (let category in shayari) {
        total += shayari[category].length;
    }

    document.getElementById("shayari-count").innerText = total;
}

updateShayariCount();
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 2000);

});
function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const btn = document.getElementById("theme-toggle");

    if (document.body.classList.contains("light-mode")) {

        btn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");

    } else {

        btn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");

    }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");
    document.getElementById("theme-toggle").innerHTML = "☀️";

}
