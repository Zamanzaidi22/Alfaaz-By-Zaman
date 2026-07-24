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
"❤️ Dil sirf tumhara naam leta hai."
],

sad: [
"💔 Kuch log yaad ban kar reh jaate hain.",
"💔 Khamoshi bhi dard bayan karti hai.",
"💔 Har muskaan ke peeche ek kahani hoti hai."
],

bewafa: [
"🥀 Wafa humne ki, yaadein tum de gaye.",
"🥀 Bewafai ka dard sabse gehra hota hai.",
"🥀 Tum badal gaye, waqt nahi."
],

islamic: [
"🌙 Allah par bharosa rakho.",
"🌙 Dua kabhi bekaar nahi jaati.",
"🌙 Sabr karne walon ke saath Allah hai."
],

dosti: [
"🤝 Saccha dost daulat se badhkar hota hai.",
"🤝 Dosti dilon ko jodti hai.",
"🤝 Mushkil waqt ka saathi hi asli dost hai."
],

"2line":[
"✨ Alfaaz kam, ehsaas gehre.",
"✨ Muskaan me bhi dard hota hai.",
"✨ Har raat ke baad subah hoti hai."
]
};

function showCategory(category){

const list = shayari[category];

const random =
Math.floor(Math.random()*list.length);

document.getElementById("shayari-text").innerHTML =
list[random];
}
