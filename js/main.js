8// ==========================================
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
