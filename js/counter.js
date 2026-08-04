// ==========================================
// Alfaaz By Zaman
// Animated Counter
// ==========================================

function animateCounter(id, target, suffix = "") {

    const el = document.getElementById(id);

    if (!el) return;

    let count = 0;

    const speed = Math.max(1, Math.ceil(target / 50));

    const timer = setInterval(function () {

        count += speed;

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        el.innerText = count + suffix;

    }, 25);

}

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        animateCounter("count-shayari", 300, "+");

        animateCounter("count-category", 6);

        animateCounter("count-original", 100, "%");

    }, 700);

});
