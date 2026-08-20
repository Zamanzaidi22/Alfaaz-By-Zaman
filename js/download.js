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
        document.getElementById("shayari-Text")

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
                    
                    <button
    class="background-option"
    onclick="openCustomBackground()">

    🖼️
    <span>My Photo</span>

</button>

<input
    type="file"
    id="custom-background-input"
    accept="image/*"
    style="display:none;"
    onchange="useCustomBackground(this)">
                </div>

<!-- ==========================
     BACKGROUND DARKNESS
=========================== -->

<div class="download-darkness-control">

    <div class="darkness-header">

        <span>🌗 Background Darkness</span>

        <span id="darkness-value">35%</span>

    </div>

    <input
        type="range"
        id="darkness-slider"
        min="0"
        max="80"
        value="35"
        step="5"
        oninput="changeBackgroundDarkness(this.value)"
    >

</div>

<!-- ==========================
     TEXT SIZE CONTROL
=========================== -->

<div class="download-text-size-control">

    <span class="text-control-title">
        🔠 Text Size
    </span>

    <div class="text-size-options">

        <button
            type="button"
            class="text-size-btn"
            onclick="changeDownloadTextSize('small', this)">
            Small
        </button>

        <button
            type="button"
            class="text-size-btn active"
            onclick="changeDownloadTextSize('medium', this)">
            Medium
        </button>

        <button
            type="button"
            class="text-size-btn"
            onclick="changeDownloadTextSize('large', this)">
            Large
        </button>

    </div>

</div>

<!-- ==========================
     TEXT ALIGNMENT CONTROL
=========================== -->

<div class="download-text-align-control">

    <span class="text-control-title">
        ↔️ Text Alignment
    </span>

    <div class="text-align-options">

        <button
            type="button"
            class="text-align-btn"
            onclick="changeDownloadTextAlign('left', this)">
            ◀ Left
        </button>

        <button
            type="button"
            class="text-align-btn active"
            onclick="changeDownloadTextAlign('center', this)">
            Center
        </button>

        <button
            type="button"
            class="text-align-btn"
            onclick="changeDownloadTextAlign('right', this)">
            Right ▶
        </button>

    </div>

</div>

<!-- ==========================
     TEXT COLOR CONTROL
=========================== -->

<div class="download-text-color-control">

    <span class="text-control-title">
        🎨 Text Color
    </span>

    <div class="text-color-options">

        <button
            type="button"
            class="text-color-btn active"
            onclick="changeDownloadTextColor('white', this)">

            ⚪ White

        </button>

        <button
            type="button"
            class="text-color-btn"
            onclick="changeDownloadTextColor('gold', this)">

            🟡 Gold

        </button>

        <button
            type="button"
            class="text-color-btn"
            onclick="changeDownloadTextColor('black', this)">

            ⚫ Black

        </button>

    </div>

</div>

<!-- ==========================
     FONT STYLE CONTROL
=========================== -->

<div class="download-font-control">

    <span class="text-control-title">
        ✍️ Font Style
    </span>

    <div class="font-style-options">

        <button
            type="button"
            class="font-style-btn active"
            onclick="changeDownloadFont('classic', this)">
            Classic
        </button>

        <button
            type="button"
            class="font-style-btn"
            onclick="changeDownloadFont('elegant', this)">
            Elegant
        </button>

        <button
            type="button"
            class="font-style-btn"
            onclick="changeDownloadFont('bold', this)">
            Bold
        </button>

        <button
            type="button"
            class="font-style-btn"
            onclick="changeDownloadFont('handwritten', this)">
            Handwritten
        </button>

    </div>

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
        document.getElementById("final-download-shayari-text");


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
        document.getElementById("final-download-preview");


    if(!preview) return;


// Custom gallery background clear karo

preview.style.backgroundImage = "";
preview.style.backgroundSize = "";
preview.style.backgroundPosition = "";
preview.style.backgroundRepeat = "";

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
        document.getElementById("final-download-preview");


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
        document.getElementById("final-download-shayari-text");


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

// ==========================================
// CUSTOM GALLERY BACKGROUND
// ==========================================

function openCustomBackground(){

    const input =
        document.getElementById(
            "custom-background-input"
        );

    if(input){

        input.click();

    }

}


// ==========================================
// Use Selected Gallery Image
// ==========================================

function useCustomBackground(input){

    if(
        !input.files ||
        !input.files[0]
    ){

        return;

    }


    const file =
        input.files[0];


    // Sirf image allow
    if(
        !file.type.startsWith("image/")
    ){

        showToast(
            "❌ Please image select karein."
        );

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(event){

            const preview =
                document.getElementById(
                    "final-download-preview"
                );


            if(!preview){

                return;

            }


            // Purane theme classes remove
            DOWNLOAD_BACKGROUNDS.forEach(
                function(bg){

                    preview.classList.remove(
                        "bg-" + bg
                    );

                }
            );


            // Gallery image apply
            preview.style.backgroundImage =
                `linear-gradient(
                    rgba(0,0,0,.42),
                    rgba(0,0,0,.55)
                ),
                url("${event.target.result}")`;


            preview.style.backgroundSize =
                "cover";

            preview.style.backgroundPosition =
                "center";

            preview.style.backgroundRepeat =
                "no-repeat";


            selectedBackground =
                "custom";


            // Old active buttons remove
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


            showToast(
                "🖼️ Custom Background Applied"
            );

        };


    reader.readAsDataURL(file);

}

// ==========================================
// Background Darkness Control
// ==========================================

function changeBackgroundDarkness(value){

    const preview =
        document.getElementById(
            "final-download-preview"
        );

    const valueText =
        document.getElementById(
            "darkness-value"
        );

    if(valueText){

        valueText.innerText =
            value + "%";

    }

    if(!preview) return;


    preview.style.setProperty(
        "--download-darkness",
        value / 100
    );

}

// ==========================================
// Download Shayari Text Size
// ==========================================

function changeDownloadTextSize(size, button){

    const text =
        document.getElementById(
            "final-download-shayari-text"
        );

    if(!text) return;


    if(size === "small"){

        text.style.fontSize = "17px";

    }
    else if(size === "large"){

        text.style.fontSize = "26px";

    }
    else{

        text.style.fontSize = "21px";

    }


    document
        .querySelectorAll(".text-size-btn")
        .forEach(function(btn){

            btn.classList.remove("active");

        });


    if(button){

        button.classList.add("active");

    }

}

// ==========================================
// Download Shayari Text Alignment
// ==========================================

function changeDownloadTextAlign(align, button){

    const text =
        document.getElementById(
            "final-download-shayari-text"
        );

    if(!text) return;


    // Apply Alignment
    text.style.textAlign = align;


    // Remove old active state
    document
        .querySelectorAll(".text-align-btn")
        .forEach(function(btn){

            btn.classList.remove("active");

        });


    // Current button active
    if(button){

        button.classList.add("active");

    }

}

// ==========================================
// Download Shayari Text Color
// ==========================================

function changeDownloadTextColor(color, button){

    const text =
        document.getElementById(
            "final-download-shayari-text"
        );

    if(!text) return;


    if(color === "gold"){

        text.style.color = "#FFD700";

    }

    else if(color === "black"){

        text.style.color = "#111111";

    }

    else{

        text.style.color = "#FFFFFF";

    }


    document
        .querySelectorAll(".text-color-btn")
        .forEach(function(btn){

            btn.classList.remove("active");

        });


    if(button){

        button.classList.add("active");

    }

}

// ==========================================
// Download Shayari Font Style
// ==========================================

function changeDownloadFont(font, button){

    const text =
        document.getElementById(
            "final-download-shayari-text"
        );

    if(!text) return;


    // ==========================
    // CLASSIC
    // ==========================

    if(font === "classic"){

        text.style.fontFamily =
            "'Poppins', sans-serif";

        text.style.fontWeight =
            "500";

        text.style.letterSpacing =
            "0px";

    }


    // ==========================
    // ELEGANT
    // ==========================

    else if(font === "elegant"){

        text.style.fontFamily =
            "Georgia, 'Times New Roman', serif";

        text.style.fontWeight =
            "500";

        text.style.letterSpacing =
            "0px";

    }


    // ==========================
    // BOLD
    // ==========================

    else if(font === "bold"){

        text.style.fontFamily =
            "Arial Black, 'Poppins', sans-serif";

        text.style.fontWeight =
            "900";

        text.style.letterSpacing =
            "0.6px";

    }


    // ==========================
    // HANDWRITTEN
    // ==========================

    else if(font === "handwritten"){

        text.style.fontFamily =
            "'Brush Script MT', 'Segoe Script', cursive";

        text.style.fontWeight =
            "400";

        text.style.letterSpacing =
            "0px";

    }


    // ==========================
    // FALLBACK
    // ==========================

    else{

        text.style.fontFamily =
            "'Poppins', sans-serif";

        text.style.fontWeight =
            "500";

        text.style.letterSpacing =
            "0px";

    }


    // Active Button
    document
        .querySelectorAll(".font-style-btn")
        .forEach(function(btn){

            btn.classList.remove("active");

        });


    if(button){

        button.classList.add("active");

    }

}
