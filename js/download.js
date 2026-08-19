// ==========================================
// Alfaaz By Zaman
// UNIFIED DOWNLOAD SYSTEM 3.0
// Home + Category Shayari Page
// ==========================================

let selectedBackground = "night";


// ==========================================
// Background Classes
// ==========================================

const DOWNLOAD_BACKGROUNDS = [
    "night",
    "romantic",
    "dark",
    "golden",
    "galaxy",
    "islamic",
    "minimal"
];


// ==========================================
// Get Current Shayari
// ==========================================

function getCurrentDownloadShayari() {

    // ------------------------------
    // Category Page
    // ------------------------------

    if (
        typeof currentCategory !== "undefined" &&
        currentCategory &&
        typeof SHAYARI_DB !== "undefined"
    ) {

        const categoryData =
            SHAYARI_DB[currentCategory];

        if (
            categoryData &&
            categoryData[currentIndex]
        ) {

            return categoryData[currentIndex];

        }

    }


    // ------------------------------
    // Home Page
    // ------------------------------

    const shayariText =
        document.getElementById("shayari-text");

    if (
        shayariText &&
        shayariText.innerText.trim()
    ) {

        return shayariText.innerText.trim();

    }


    // ------------------------------
    // Category Page Text
    // ------------------------------

    const categoryText =
        document.getElementById("shayariText");

    if (
        categoryText &&
        categoryText.innerText.trim()
    ) {

        return categoryText.innerText.trim();

    }


    return "";
}


// ==========================================
// Open Download Panel
// ==========================================

function downloadShayariImage() {

    openDownloadPanel();

}


// ==========================================
// Category Page Compatibility
// ==========================================

function downloadCurrentShayari() {

    openDownloadPanel();

}


// ==========================================
// Open Panel
// ==========================================

function openDownloadPanel() {

    const panel =
        document.getElementById("download-panel");

    const preview =
        document.getElementById("preview-shayari");

    const downloadPreview =
        document.getElementById("download-preview");


    // ----------------------------------
    // Shayari Text
    // ----------------------------------

    const shayari =
        getCurrentDownloadShayari();


    if (preview) {

        preview.innerText =
            shayari ||
            "✨ Pehle koi Shayari select karein.";

    }


    if (downloadPreview) {

        const previewText =
            downloadPreview.querySelector(
                ".download-shayari-text"
            );

        if (previewText) {

            previewText.innerText =
                shayari ||
                "✨ Pehle koi Shayari select karein.";

        }

    }


    // ----------------------------------
    // Show Panel
    // ----------------------------------

    if (panel) {

        panel.style.display = "block";

        // Re-apply selected background
        selectBackground(
            selectedBackground
        );

        return;

    }


    // ----------------------------------
    // If panel doesn't exist
    // ----------------------------------

    showToast(
        "⚠️ Download panel available nahi hai."
    );

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

    if (
        !DOWNLOAD_BACKGROUNDS.includes(
            background
        )
    ) {

        background = "night";

    }


    selectedBackground =
        background;


    const preview =
        document.getElementById(
            "download-preview"
        );


    if (!preview) return;


    // Remove old backgrounds

    DOWNLOAD_BACKGROUNDS.forEach(
        function(bg) {

            preview.classList.remove(
                "bg-" + bg
            );

        }
    );


    // Add selected background

    preview.classList.add(
        "bg-" + selectedBackground
    );


    // Active background button

    document
        .querySelectorAll(
            ".background-option"
        )
        .forEach(
            function(option) {

                option.classList.remove(
                    "active"
                );

            }
        );


    const selected =
        document.querySelector(
            '.background-option[data-bg="' +
            selectedBackground +
            '"]'
        );


    if (selected) {

        selected.classList.add(
            "active"
        );

    }

}


// ==========================================
// Generate & Download Image
// ==========================================

async function generateShayariImage() {

    const preview =
        document.getElementById(
            "download-preview"
        );


    if (!preview) {

        showToast(
            "❌ Download preview nahi mila."
        );

        return;

    }


    // ======================================
    // Check html2canvas
    // ======================================

    if (
        typeof html2canvas ===
        "undefined"
    ) {

        showToast(
            "❌ Image system load nahi hua."
        );

        console.error(
            "html2canvas library missing."
        );

        return;

    }


    // ======================================
    // Shayari Text
    // ======================================

    const shayari =
        getCurrentDownloadShayari();


    if (!shayari) {

        showToast(
            "⚠️ Pehle Shayari select karein."
        );

        return;

    }


    // ======================================
    // Update Preview
    // ======================================

    const previewText =
        preview.querySelector(
            ".download-shayari-text"
        );


    if (previewText) {

        previewText.innerText =
            shayari;

    }


    // ======================================
    // Download Button
    // ======================================

    const button =
        document.querySelector(
            ".generate-download-btn"
        );


    if (button) {

        button.innerText =
            "⏳ Creating Image...";

        button.disabled = true;

    }


    try {

        // Small delay so browser renders
        await new Promise(
            resolve =>
                setTimeout(
                    resolve,
                    150
                )
        );


        // ==================================
        // Create Canvas
        // ==================================

        const canvas =
            await html2canvas(
                preview,
                {

                    scale: 2,

                    useCORS: true,

                    allowTaint: false,

                    backgroundColor: null,

                    logging: false

                }
            );


        // ==================================
        // Convert to PNG
        // ==================================

        const image =
            canvas.toDataURL(
                "image/png"
            );


        // ==================================
        // Create Download
        // ==================================

        const link =
            document.createElement(
                "a"
            );


        link.download =
            "Alfaaz-By-Zaman-Shayari.png";


        link.href =
            image;


        document.body.appendChild(
            link
        );


        link.click();


        document.body.removeChild(
            link
        );


        showToast(
            "✅ Shayari Image Downloaded!"
        );

    }


    catch (error) {

        console.error(
            "❌ Download Error:",
            error
        );


        showToast(
            "❌ Image create nahi ho saki."
        );

    }


    finally {

        if (button) {

            button.innerText =
                "⬇️ Download Shayari";

            button.disabled =
                false;

        }

    }

}


// ==========================================
// Close Panel On ESC
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeDownloadPanel();

        }

    }
);
