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
function showCategory(category){

const shayari = {
love:
`❤️ Mohabbat bhi ajeeb si cheez hai,
Jitni sachchi ho utna dard deti hai.`,

sad:
`💔 Kuch log sirf yaad bankar reh jaate hain,
Aur zindagi bhar rulaya karte hain.`,

bewafa:
`🥀 Wafa ki umeed unse thi,
Jo bewafa nikle.`,

islamic:
`🌙 Allah par bharosa rakho,
Har mushkil ke baad aasani hai.`,

dosti:
`🤝 Dost woh jo mushkil waqt me saath de.`,

"2line":
`✨ Alfaaz kam hain,
Ehsaas bahut gehre hain.`
};

document.querySelector(".shayari p").innerHTML =
shayari[category];
}
