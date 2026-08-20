// ==========================================
// Alfaaz By Zaman
// UNIFIED DOWNLOAD SYSTEM 5.0
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
// Get Actual Shayari
// ==========================================

function getCurrentDownloadShayari() {

    // --------------------------------------
    // 1. Category / Shayari Reader
    // --------------------------------------

    const categoryText =
        document.getElementById("shayari-text")

    if(categoryText){

        const text =
            categoryText.innerText.trim();

        if(
            text &&
            text !== "Shayari Loading..." &&
            text !== "Shayari Not Found"
        ){

            console.log(
                "✅ Shayari found from #shayariText"
            );

            return text;

        }

    }


    // --------------------------------------
    // 2. Home - Aaj Ki Shayari
    // --------------------------------------

    const homeText =
        document.getElementById("shayari-text");

    if(homeText){

        const text =
            homeText.innerText.trim();

        if(
            text &&
            !text.includes(
                "Kisi bhi category par click"
            )
        ){

            console.log(
                "✅ Shayari found from #shayari-text"
            );

            return text;

        }

    }


    // --------------------------------------
    // 3. Database fallback
    // --------------------------------------

    if(
        typeof SHAYARI_DB !== "undefined" &&
        typeof currentCategory !== "undefined" &&
        currentCategory
    ){

        const data =
            SHAYARI_DB[currentCategory];

        if(
            data &&
            typeof currentIndex !== "undefined" &&
            data[currentIndex]
        ){

            console.log(
                "✅ Shayari found from database"
            );

            return data[currentIndex];

        }

    }


    // --------------------------------------
    // Nothing found
    // --------------------------------------

    console.log(
        "❌ No Shayari found"
    );

    return "";

}


// ==========================================
// Load html2canvas
// ==========================================

function loadHtml2Canvas(){

    return new Promise(
        function(resolve, reject){

            if(
                typeof html2canvas !==
                "undefined"
            ){

                resolve();

                return;

            }


            const script =
                document.createElement(
                    "script"
                );


            script.src =
                "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";


            script.onload =
                function(){

                    console.log(
                        "✅ html2canvas loaded"
                    );

                    resolve();

                };


            script.onerror =
                function(){

                    reject(
                        new Error(
                            "html2canvas load failed"
                        )
                    );

                };


            document.head.appendChild(
                script
            );

        }
    );

}


// ==========================================
// Create Download Panel
// ==========================================

function createDownloadPanel(){

    if(
        document.getElementById(
            "download-panel"
        )
    ){

        return;

    }


    const panel =
        document.createElement(
            "div"
        );


    panel.id =
        "download-panel";
panel.className =
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


                <div class="background-options">

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


                <!-- ==========================
                     DOWNLOAD PREVIEW
                =========================== -->

                <div
                     id="final-download-preview"
                     class="download-preview bg-night">

                    <div class="download-brand">
                        🌙 Alfaaz By Zaman
                    </div>


                    <div
                         class="download-shayari-text"
                         id="final-download-shayari-text">

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
// Open Download Panel
// ==========================================

function openDownloadPanel(){

    const shayari =
        getCurrentDownloadShayari();


    if(!shayari){

        showToast(
            "⚠️ Shayari select nahi hui."
        );

        return;

    }


    createDownloadPanel();


    const panel =
        document.getElementById(
            "download-panel"
        );


    const text =
        document.getElementById("final-download-shayari-text")
        );


    if(text){

        // IMPORTANT
        // Actual Shayari yahan inject hogi

        text.innerText =
            shayari;

    }


    panel.style.display =
        "flex";


    selectBackground(
        selectedBackground
    );


    console.log(
        "📥 Download Preview:",
        shayari
    );

}


// ==========================================
// Both Download Buttons
// ==========================================

function downloadShayariImage(){

    openDownloadPanel();

}


function downloadCurrentShayari(){

    openDownloadPanel();

}


// ==========================================
// Close Panel
// ==========================================

function closeDownloadPanel(){

    const panel =
        document.getElementById(
            "download-panel"
        );


    if(panel){

        panel.style.display =
            "none";

    }

}


// ==========================================
// Background Selection
// ==========================================

function selectBackground(background){

    if(
        !DOWNLOAD_BACKGROUNDS.includes(
            background
        )
    ){

        background =
            "night";

    }


    selectedBackground =
        background;


    const preview =
        document.getElementById("final-download-preview")
        );


    if(!preview) return;


    DOWNLOAD_BACKGROUNDS.forEach(
        function(bg){

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
            function(option){

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


    if(active){

        active.classList.add(
            "active"
        );

    }

}


// ==========================================
// Generate Image
// ==========================================

async function generateShayariImage(){

    const preview =
        document.getElementById("final-download-preview")
        );


    if(!preview){

        showToast(
            "❌ Preview nahi mila."
        );

        return;

    }


    // --------------------------------------
    // Make absolutely sure Shayari exists
    // --------------------------------------

    const shayari =
        getCurrentDownloadShayari();


    if(!shayari){

        showToast(
            "❌ Shayari nahi mili."
        );

        return;

    }


    const shayariText =
        document.getElementById("final-download-shayari-text")
        );


    if(shayariText){

        shayariText.innerText =
            shayari;

    }


    const button =
        document.querySelector(
            ".generate-download-btn"
        );


    try{

        if(button){

            button.disabled =
                true;

            button.innerText =
                "⏳ Creating Image...";

        }


        await loadHtml2Canvas();


        // Allow DOM to render actual text
        await new Promise(
            function(resolve){

                requestAnimationFrame(
                    function(){

                        requestAnimationFrame(
                            resolve
                        );

                    }
                );

            }
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

    catch(error){

        console.error(
            "Download Error:",
            error
        );


        showToast(
            "❌ Download nahi ho saka."
        );

    }


    finally{

        if(button){

            button.disabled =
                false;

            button.innerText =
                "⬇️ Download Shayari";

        }

    }

}


// ==========================================
// ESC → Close
// ==========================================

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Escape"
        ){

            closeDownloadPanel();

        }

    }
);
