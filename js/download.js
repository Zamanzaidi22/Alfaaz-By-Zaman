// ==========================================
// Alfaaz By Zaman
// Download Shayari Image
// ==========================================

function downloadShayariImage() {

    if (!currentCategory) {
        alert("Pehle koi category select karein.");
        return;
    }

    const card = document.getElementById("download-card");
    const text = document.getElementById("download-text");

    text.innerText = SHAYARI_DB[currentCategory][currentIndex];

    card.style.display = "block";

    html2canvas(card).then(function(canvas){

        const link = document.createElement("a");

        link.download = "Alfaaz-By-Zaman.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        card.style.display = "none";

    });

}
