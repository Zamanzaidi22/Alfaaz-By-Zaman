// ==========================================
// Alfaaz By Zaman
// UNIFIED DOWNLOAD SYSTEM 4.0
// Home + Category Page
// ==========================================

let selectedBackground = "night";


// ==========================================
// Backgrounds
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

    // Category page
    if (
        typeof currentCategory !== "undefined" &&
        currentCategory &&
        typeof SHAYARI_DB !== "undefined"
    ) {

        const data =
            SHAYARI_DB[currentCategory];

        if (
            data &&
            data[currentIndex]
        ) {

            return data[currentIndex];

        }

    }


    // Home page
    const homeText =
        document.getElementById("shayari-text");

    if (
        homeText &&
        homeText.innerText.trim()
    ) {

        return homeText.innerText.trim();

    }


    // Category page text
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
// Load html2canvas Automatically
// ==========================================

function loadHtml2Canvas() {

    return new Promise(function(resolve, reject) {

        if (
            typeof html2canvas !==
            "undefined"
        ) {

            resolve();

            return;

        }


        const script =
            document.createElement("script");

        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

        script.onload = function() {

            console.log(
                "✅ html2canvas loaded"
            );

            resolve();

        };


        script.onerror = function() {

            console.error(
                "❌ html2canvas failed"
            );

            reject(
                new Error(
                    "html2canvas load failed"
                )
            );

        };


        document.head.appendChild(
            script
        );

    });

}


// ==========================================
// Create Download Panel
// ==========================================

function createDownloadPanel() {

    // Already exists
    if (
        document.getElementById(
            "download-panel"
        )
    ) {

        return;

    }


    const panel =
        document.createElement("div");

    panel.id =
        "download-panel";


    panel.innerHTML = `

        <div class="download-overlay">

            <div class="download-box">

                <button
                    class="download-close"
                    onclick="closeDownloadPanel()">

                    ✕

                </button>


                <h2>
                    📥 Create Your Shayari
                </h2>

                <p class="download-subtitle">
                    Apni pasand ka background choose karein
                </p>


                <div class="download-backgrounds">

                    <button
                        class="background-option active"
                        data-bg="night"
                        onclick="selectBackground('night')">

                        🌙
                        <span>Night</span>

                    </button>


                    <button
                        class="background-option"
                        data-bg="romantic"
                        onclick="selectBackground('romantic')">

                        🌹
                        <span>Romantic</span>

                    </button>


                    <button
                        class="background-option"
                        data-bg="dark"
                        onclick="selectBackground('dark')">

                        🖤
                        <span>Dark</span>

                    </button>


                    <button
                        class="background-option"
                        data-bg="golden"
                        onclick="selectBackground('golden')">

                        ✨
                        <span>Golden</span>

                    </button>


                    <button
                        class="background-option"
                        data-bg="galaxy"
                        onclick="selectBackground('galaxy')">

                        🌌
                        <span>Galaxy</span>

                    </button>


                    <button
                        class="background-option"
                        data-bg="islamic"
                        onclick="selectBackground('islamic')">

                        🕌
                        <span>Islamic</span>

                    </button>


                    <button
                        class="background-option"
                        data-bg="minimal"
                        onclick="selectBackground('minimal')">

                        📝
                        <span>Minimal</span>

                    </button>

                </div>


                <div
                    id="download-preview"
                    class="download-preview bg-night">

                    <div class="download-brand">
                        🌙 Alfaaz By Zaman
                    </div>


                    <div
                        class="download-shayari-text">

                    </div>


                    <div class="download-footer">

                        Har Lamha... Har Ehsaas...

                    </div>

                </div>


                <button
                    class="generate-download-btn"
                    onclick="generateShayariImage()">

                    ⬇️ Download Shayari

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        panel
    );

}


// ==========================================
// Open Download
// ==========================================

async function openDownloadPanel() {

    const shayari =
        getCurrentDownloadShayari();


    if (!shayari) {

        showToast(
            "⚠️ Pehle Shayari select karein."
        );

        return;

    }


    createDownloadPanel();


    const panel =
        document.getElementById(
            "download-panel"
        );


    const text =
        panel.querySelector(
            ".download-shayari-text"
        );


    if (text) {

        text.innerText =
            shayari;

    }


    panel.style.display =
        "flex";


    selectBackground(
        selectedBackground
    );

}


// ==========================================
// Both Download Buttons
// ==========================================

function downloadShayariImage() {

    openDownloadPanel();

}


function downloadCurrentShayari() {

    openDownloadPanel();

}


// ==========================================
// Close
// ==========================================

function closeDownloadPanel() {

    const panel =
        document.getElementById(
            "download-panel"
        );


    if (panel) {

        panel.style.display =
            "none";

    }

}


// ==========================================
// Background Selection
// ==========================================

function selectBackground(background) {

    if (
        !DOWNLOAD_BACKGROUNDS.includes(
            background
        )
    ) {

        background =
            "night";

    }


    selectedBackground =
        background;


    const preview =
        document.getElementById(
            "download-preview"
        );


    if (!preview) return;


    DOWNLOAD_BACKGROUNDS.forEach(
        function(bg) {

            preview.classList.remove(
                "bg-" + bg
            );

        }
    );


    preview.classList.add(
        "bg-" + background
    );


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


    const active =
        document.querySelector(
            '[data-bg="' +
            background +
            '"]'
        );


    if (active) {

        active.classList.add(
            "active"
        );

    }

}


// ==========================================
// Generate Image
// ==========================================

async function generateShayariImage() {

    const preview =
        document.getElementById(
            "download-preview"
        );


    if (!preview) {

        showToast(
            "❌ Preview nahi mila."
        );

        return;

    }


    const button =
        document.querySelector(
            ".generate-download-btn"
        );


    try {

        if (button) {

            button.disabled =
                true;

            button.innerText =
                "⏳ Creating Image...";

        }


        // Load html2canvas
        await loadHtml2Canvas();


        // Make sure browser renders preview
        await new Promise(
            resolve =>
                setTimeout(
                    resolve,
                    300
                )
        );


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


        const image =
            canvas.toDataURL(
                "image/png"
            );


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
            "✅ Shayari Downloaded!"
        );


    }

    catch (error) {

        console.error(
            "Download Error:",
            error
        );


        showToast(
            "❌ Download nahi ho saka."
        );

    }


    finally {

        if (button) {

            button.disabled =
                false;

            button.innerText =
                "⬇️ Download Shayari";

        }

    }

}


// ==========================================
// ESC Close
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
