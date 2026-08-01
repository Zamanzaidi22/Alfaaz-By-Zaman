// ==========================================
// Alfaaz By Zaman
// Theme System
// ==========================================

function toggleTheme(){

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    const btn = document.getElementById("theme-toggle");

    if(btn){
        btn.innerHTML = isLight ? "☀️" : "🌙";
    }

}

document.addEventListener("DOMContentLoaded", function(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-mode");

        const btn = document.getElementById("theme-toggle");

        if(btn){
            btn.innerHTML = "☀️";
        }

    }

});
