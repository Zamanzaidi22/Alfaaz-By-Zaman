// ==========================================
// Alfaaz By Zaman
// Download System 2.0
// Step 1 - Background Selector
// ==========================================

let selectedBackground = "night";


// ==========================================
// Open Download Panel
// ==========================================

function downloadShayariImage() {

    const panel =
        document.getElementById("download-panel");

    const preview =
        document.getElementById("preview-shayari");

    if (!panel || !preview) {
        return;
    }

    // Current Shayari
    if (
        typeof currentCategory !== "undefined" &&
        currentCategory &&
        typeof SHAYARI_DB !== "undefined"
    ) {

        const shayari =
            SHAYARI_DB[currentCategory][currentIndex];

        preview.innerText = shayari;

    }

    else {

        preview.innerText =
            "✨ Pehle koi Shayari select karein.";

    }

    panel.style.display = "block";

}


// ==========================================
// Close Download Panel
// ==========================================

function closeDownloadPanel() {

    const panel =
        document.getElementById("download-panel");

    if (panel) {

        panel.style.display = "none";

    }

}


// ==========================================
// Select Background
// ==========================================

function selectBackground(background) {

    selectedBackground = background;

    const preview =
        document.getElementById("download-preview");

    if (!preview) return;


    // Remove old backgrounds

    preview.classList.remove(
        "bg-night",
        "bg-romantic",
        "bg-dark",
        "bg-golden",
        "bg-galaxy",
        "bg-islamic",
        "bg-minimal"
    );


    // Add selected background

    preview.classList.add(
        "bg-" + background
    );


    // Active option

    document
        .querySelectorAll(".background-option")
        .forEach(function(option) {

            option.classList.remove("active");

        });


    const selected =
        document.querySelector(
            '.background-option[data-bg="' +
            background +
            '"]'
        );


    if (selected) {

        selected.classList.add("active");

    }

}
