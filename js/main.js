// ==========================================
// Alfaaz By Zaman
// Main File
// ==========================================

console.log("🌙 Alfaaz By Zaman V2 Loaded");

function initWebsite(){

    console.log("Website Initialized");

}

document.addEventListener("DOMContentLoaded", initWebsite);
document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded");

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if(loader){

            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            },800);

        }

    },1500);

});
function saveUsername(){

    const input = document.getElementById("name-input");

    if(input.value.trim()==""){
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("username", input.value.trim());

    document.getElementById("name-modal").style.display="none";

    document.getElementById("welcome-user").innerHTML =
    "👋 Welcome, " + input.value + "!";
}

// ==========================================
// Copy Shayari
// ==========================================

function copyShayari(){

    if(!currentCategory) return;

    const text = SHAYARI_DB[currentCategory][currentIndex];

    navigator.clipboard.writeText(text);

    showToast("📋 Shayari Copied");

}

// ==========================================
// WhatsApp Share
// ==========================================

function shareWhatsApp(){

    if(!currentCategory) return;

    const text = SHAYARI_DB[currentCategory][currentIndex];

    const url =
    "https://wa.me/?text=" + encodeURIComponent(text);

    window.open(url,"_blank");

    showToast("📤 Opening WhatsApp");

}
console.log("MAIN.JS FINISHED");

// ==========================================
// HOME PAGE DEFAULT SHAYARI
// ==========================================

document.addEventListener("DOMContentLoaded", function(){

    // Agar Home page par koi category selected nahi hai
    if(!currentCategory){

        currentCategory = "love";
        currentIndex = 0;

        showCurrentShayari();

        console.log(
            "🏠 Default Shayari Loaded:",
            currentCategory,
            currentIndex
        );

    }

});

// ==========================================
// PWA Service Worker Registration
// ==========================================

if("serviceWorker" in navigator){

    window.addEventListener(
        "load",
        function(){

            navigator.serviceWorker
                .register("./service-worker.js")

                .then(function(registration){

                    console.log(
                        "✅ Service Worker Registered:",
                        registration.scope
                    );

                })

                .catch(function(error){

                    console.log(
                        "❌ Service Worker Registration Failed:",
                        error
                    );

                });

        }
    );

}

// ==========================================
// PWA Diagnostic
// ==========================================

window.addEventListener("load", async function(){

    const result =
        document.createElement("div");

    result.id = "pwa-debug";

    result.style.cssText = `
        position:fixed;
        left:10px;
        right:10px;
        bottom:10px;
        z-index:99999999;
        background:#111;
        color:#FFD700;
        border:1px solid #FFD700;
        padding:10px;
        border-radius:10px;
        font-size:12px;
        text-align:center;
    `;


    if(!("serviceWorker" in navigator)){

        result.innerText =
            "❌ Service Worker NOT supported";

    }

    else{

        const registration =
            await navigator.serviceWorker
                .getRegistration();

        if(!registration){

            result.innerText =
                "❌ Service Worker NOT registered";

        }

        else if(registration.active){

            result.innerText =
                "✅ Service Worker ACTIVE";

        }

        else if(registration.installing){

            result.innerText =
                "⏳ Service Worker INSTALLING";

        }

        else if(registration.waiting){

            result.innerText =
                "⚠️ Service Worker WAITING";

        }

        else{

            result.innerText =
                "⚠️ Service Worker registered but inactive";

        }

    }


    document.body.appendChild(result);

});
