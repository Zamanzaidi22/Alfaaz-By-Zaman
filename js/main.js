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


