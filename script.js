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
