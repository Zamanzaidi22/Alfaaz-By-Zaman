// ==========================================
// Alfaaz By Zaman
// Search System
// ==========================================

function searchShayari(){

    const input = document.getElementById("searchInput");

    if(!input) return;

    const keyword = input.value.trim().toLowerCase();

    if(keyword === ""){
        ShowToast("🔍 Kuch search likhiye.");
        return;
    }

    for(const category in SHAYARI_DB){

        const list = SHAYARI_DB[category];

        for(let i=0;i<list.length;i++){

            if(list[i].toLowerCase().includes(keyword)){

                currentCategory = category;
                currentIndex = i;

                showCurrentShayari();

                return;

            }

        }

    }

    showToast("❌ Shayari nahi mili.");

}
