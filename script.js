// ===============================
// SETTINGS
// ===============================


// ===============================
// DAILY QUOTES
// ===============================


// ===============================
// SHAYARI DATABASE
// ===============================


// ===============================
// SEARCH FUNCTIONS
// ===============================


// ===============================
// CATEGORY FUNCTIONS
// ===============================


// ===============================
// FAVORITES
// ===============================


// ===============================
// DAILY QUOTE
// ===============================


// ===============================
// THEME
// ===============================


// ===============================
// LOADER
// ===============================


// ===============================
// SCROLL BUTTON
// ===============================


// ===============================
// SOCIAL
// ===============================
console.log("Alfaaz By Zaman Loaded");
const searchInput = document.querySelector("input");
const cards = document.querySelectorAll(".categories div");

searchInput.addEventListener("keyup", function () {
    let value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        if (card.innerText.toLowerCase().includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
const dailyQuotes = [

"✨ Har din ek nayi umeed lekar aata hai.",

"🌙 Allah par bharosa rakho, har mushkil aasaan hogi.",

"❤️ Mohabbat sirf alfaaz nahi, ehsaas ka naam hai.",

"🤝 Sacchi dosti zindagi ki sabse badi daulat hai.",

"💔 Har dard ek nayi taqat dekar jaata hai."

];
const shayari = {

love: [
"❤️ Mohabbat lafzon se nahi, ehsaason se hoti hai.",
"❤️ Teri muskurahat meri duniya hai.",
"❤️ Dil sirf tumhara naam leta hai.",
"❤️ Ishq wahi jo har dua me yaad aaye.",
"❤️ Tum meri zindagi ki sabse khoobsurat kahani ho.",
"❤️ Teri khamoshi bhi meri rooh tak baat kar jaati hai.",
"❤️ Mohabbat wahi hai jo waqt ke saath aur gehri ho jaaye.",
"❤️ Har dua me tera naam aata hai, shayad isi ko ishq kehte hain.",
"❤️ Tum paas ho ya door, dil sirf tumhara hi rehta hai.",
"❤️ Teri muskaan meri har udaasi ko chura leti hai.",
"❤️ Ishq me jeetna zaroori nahi, nibhana zaroori hota hai.",
"❤️ Tere saath guzra har lamha meri zindagi ka haseen safha hai.",
"❤️ Dil ko sukoon sirf teri yaadon ke saaye me milta hai.",
"❤️ Mohabbat kabhi alfaaz ki mohtaaj nahi hoti.",
"❤️ Tum meri kahani ka sabse khoobsurat ehsaas ho.",
"❤️ Tere bina har khushi adhoori si lagti hai.",
"❤️ Dil ki har dhadkan tera hi naam leti hai.",
"❤️ Mohabbat ka sabse khoobsurat ehsaas tum ho.",
"❤️ Teri yaadon se hi meri subah aur shaam hai.",
"❤️ Ishq me sirf dil nahi, rooh bhi jud jaati hai.",
"❤️ Tera zikr meri har muskurahat ki wajah hai.",
"❤️ Tere saath har lamha ek nayi kahani lagta hai.",
"❤️ Mohabbat me sabse khoobsurat cheez tera saath hai.",
"❤️ Dil ko sukoon tab milta hai jab tera khayal aata hai.",
"❤️ Teri ek muskaan meri duniya roshan kar deti hai.",
"❤️ Teri baaton me ek alag hi sukoon milta hai,\nHar lafz me jaise mera naam milta hai.\nMohabbat sirf ek ehsaas nahi,\nTujhme mujhe mera poora jahaan milta hai.",

"❤️ Teri aankhon me jo chamak hai,\nWo meri har dua ka asar lagti hai.\nTu paas ho to har lamha haseen,\nWarna zindagi adhoori si lagti hai.",

"❤️ Mohabbat ka rang kabhi feeka nahi padta,\nSaccha ishq waqt se nahi darta.\nHar din tera intezaar rehta hai,\nDil bas tera hi naam padhta hai.",

"❤️ Tu meri khamoshi ka jawab hai,\nMeri har muskurahat ka khwaab hai.\nRab se sirf itni si dua hai,\nHar janam me tu hi mera saath hai.",

"❤️ Teri yaadon ka diya har raat jalta hai,\nDil chup hokar bhi tera naam leta hai.\nIshq ka safar khoobsurat tab lagta hai,\nJab har mod par tera saaya milta hai.",

"❤️ Teri ek muskaan dil jeet leti hai,\nHar udaasi ko door kar deti hai.\nTu saath ho to lagta hai,\nZindagi har pal nayi si rehti hai.",

"❤️ Har dua me tera zikr rehta hai,\nHar khwaab me tera chehra rehta hai.\nMohabbat meri sirf alfaaz nahi,\nYe meri rooh ka hissa rehta hai.",

"❤️ Dil ki kitaab ka har safha tera hai,\nHar ehsaas sirf tera hai.\nMohabbat ka matlab jab samjha,\nTab pata chala sab kuch tera hai.",

"❤️ Teri hansi meri taqat ban jaati hai,\nHar mushkil aasaan ho jaati hai.\nTu agar saath chal de,\nHar manzil apni lag jaati hai.",

"❤️ Mohabbat me sirf paana zaroori nahi,\nNibhana bhi utna hi zaroori hota hai.\nDil jis par sacche dil se aa jaaye,\nWahi insaan zindagi ka noor hota hai.",
"❤️ Teri mohabbat ne meri duniya badal di,\nHar udaasi ko ek muskaan me badal di.\nJab bhi tera naam labon par aata hai,\nDil ki har dhadkan geet ban jaati hai.\nRab se bas itni si iltija rehti hai,\nHar dua me teri khushi shamil rehti hai.\nTu saath rahe to har safar aasaan lage,\nTere bina har manzil bhi veeran lage.",

"❤️ Ishq ki raahon me hum muskurate chale,\nHar gham ko tere naam se bhulate chale.\nTeri ek nazar ne ye asar kar diya,\nDil ko sirf tera hi ghar kar diya.\nNa daulat chahiye na shohrat ka nasha,\nBas tera saath hi meri sabse badi dua.\nHar subah tera khayal roshni ban jaaye,\nHar raat tera naam sukoon de jaaye.",

"❤️ Tere hone se har mausam haseen lagta hai,\nDil ka har kona roshan lagta hai.\nMohabbat ka matlab jab samjha,\nHar lafz tera hi lagta hai.\nTu meri dua bhi hai aur dua ka jawab bhi,\nTu meri khushi bhi hai aur mera khwaab bhi.\nZindagi agar ek kitaab hai,\nTo uska sabse khoobsurat safha tu hai.",

"❤️ Har dhadkan tera intezaar karti hai,\nHar saans tera aitbaar karti hai.\nMohabbat me sirf milna hi zaroori nahi,\nYaadon se bhi zindagi gulzaar rehti hai.\nTeri muskaan meri taqat ban jaati hai,\nHar mushkil ko aasaan bana jaati hai.\nRab kare ye rishta yunhi salaamat rahe,\nHar janam me tera hi saath rahe.",

"❤️ Teri aankhon me ek alag hi jahaan dikhta hai,\nHar khwaab wahan sach hota dikhta hai.\nDil jab bhi udaas hota hai,\nTera khayal use hasa deta hai.\nMohabbat ka sabse haseen ehsaas tu hai,\nMeri har dua ki aas tu hai.\nAgar zindagi dobara mile kabhi,\nTo har baar meri mohabbat sirf tu hi ho."
],

sad: [
"💔 Kuch log yaad ban kar reh jaate hain.",
"💔 Khamoshi bhi dard bayan karti hai.",
"💔 Har muskaan ke peeche ek kahani hoti hai.",
"💔 Dil tootne ki awaaz sirf mehsoos hoti hai.",
"💔 Waqt sab badal deta hai.",
"💔 Dil tootne ki awaaz sirf mehsoos hoti hai.",
"💔 Kuch yaadein kabhi purani nahi hoti.",
"💔 Jo apne hote hain wahi sabse zyada dard dete hain.",
"💔 Muskurahat ke peeche aksar aansu chhupe hote hain.",
"💔 Har bichhadna ek nayi tanhaai de jaata hai.",
"💔 Dil ko samjhana sabse mushkil kaam hota hai.",
"💔 Mohabbat adhuri ho to yaadein aur gehri ho jaati hain.",
"💔 Waqt bhar deta hai zakhm, nishaan nahi.",
"💔 Kuch log milkar bhi kabhi apne nahi hote.",
"💔 Tanha safar me yaadein hi humsafar ban jaati hain.",
"💔 Teri yaadon ka bojh dil se utarta hi nahi,\nHar guzarta lamha tujhe bhulata hi nahi.\nMuskurane ki wajah dhoondhta rehta hoon,\nPar tera gham saath chhodta hi nahi.",

"💔 Kuch khwaab adhure hi acche lagte hain,\nPoore hokar aksar toot jaate hain.\nJinhe hum dil se apna samajhte hain,\nWahi ek din door ho jaate hain.",

"💔 Dil ne jis par sab kuch luta diya,\nUsne hi hume tanha chhod diya.\nAb har muskaan adhuri si lagti hai,\nJaise waqt ne sab kuch tod diya.",

"💔 Mohabbat ka safar kitna ajeeb hota hai,\nShuru hansi se aur anjaam aansuon se hota hai.\nDil jitna saccha hota hai,\nUtna hi zyada toot jaata hai.",

"💔 Har raat teri yaadon me guzar jaati hai,\nNeend aankhon se rooth jaati hai.\nDil chahta hai sab bhool jaun,\nPar har subah teri yaad aa jaati hai.",

"💔 Waqt ne bahut kuch sikha diya,\nApno aur gairon ka farq dikha diya.\nJo kabhi saath chalne ki kasam khate the,\nUnhone hi raasta badal liya.",

"💔 Aaj bhi dil tujhe hi dhoondhta hai,\nHar chehre me tera aks dhoondhta hai.\nMaloom hai tu lautkar nahi aayega,\nPhir bhi ye dil umeed rakhta hai.",

"💔 Khamosh rehna bhi ek aadat ban gayi,\nHar baat dil me chhupane ki fitrat ban gayi.\nJo kabhi hans kar jeete the,\nAaj tanhaai hi zindagi ban gayi.",

"💔 Tere bina har khushi adhoori lagti hai,\nHar mehfil bhi suni si lagti hai.\nDil ko kitna bhi samjha loon,\nHar dhadkan bas teri hi lagti hai.",

"💔 Kuch rishte naam ke reh jaate hain,\nEhsaas dheere dheere kho jaate hain.\nInsaan jeeta to rehta hai,\nPar andar se toot jaata hai.",
"💔 Har raat teri yaadon ka pehra rehta hai,\nDil me bas tera hi chehra rehta hai.\nLog kehte hain waqt sab theek kar deta hai,\nPar ye dard har roz naya lagta hai.\nMuskurahat ab sirf ek aadat ban gayi,\nKhushi jaise mujhse rooth si gayi.\nTeri kami har pal mehsoos hoti hai,\nMeri zindagi bas yaadon me simat gayi.",

"💔 Mohabbat ki kitaab adhuri reh gayi,\nHar khushi jaise mujhse door ho gayi.\nDil ne jise apna jahaan maana,\nWahi ek din anjaan ho gayi.\nAb tanha safar hi humsafar hai,\nKhamoshi hi mera ghar hai.\nRab se bas itni si dua hai,\nKisi ka dil kabhi yun na toote.",

"💔 Kuch rishte waqt ke saath bikhar jaate hain,\nKuch vaade adhure hi reh jaate hain.\nDil chahe kitna bhi sambhal jaaye,\nKuch zakhm kabhi nahi bhar paate hain.\nHar aansu ek kahani kehta hai,\nHar khamoshi dard seh leti hai.\nMohabbat agar sacchi ho,\nTo judaai umr bhar yaad rehti hai.",

"💔 Tere bina har subah adhuri lagti hai,\nHar shaam tanha si lagti hai.\nDil ko kitna bhi samjha loon,\nHar dhadkan tera naam leti hai.\nNa shikayat hai na koi gila,\nBas naseeb ka likha maan liya.\nMohabbat aaj bhi utni hi hai,\nBas uska izhaar chhod diya.",

"💔 Waqt badla, log badal gaye,\nKhwaab the jo sab bikhar gaye.\nHum muskuraate rahe duniya ke liye,\nAndar hi andar toot gaye.\nHar yaad ek imtihaan ban gayi,\nHar khushi anjaan ban gayi.\nAb bas itni si dua hai,\nDil ko phir kisi se mohabbat na ho."
],

bewafa: [
"🥀 Wafa humne ki, yaadein tum de gaye.",
"🥀 Bewafai ka dard sabse gehra hota hai.",
"🥀 Tum badal gaye, waqt nahi.",
"🥀 Jis par yakeen tha wahi ajnabi nikla.",
"🥀 Yaadon ka bojh sabse bhaari hota hai.",
"🥀 Wafa ki umeed usse thi, jise mohabbat ki kadar hi na thi.",
"🥀 Dil toda usne, aur wajah bhi na batayi.",
"🥀 Bewafai ka dard lafzon me bayan nahi hota.",
"🥀 Jis par sabse zyada yakeen tha, wahi sabse door chala gaya.",
"🥀 Mohabbat sach thi meri, magar uske vaade jhoothe nikle.",
"🥀 Aaj bhi uska naam sunte hi dil khamosh ho jaata hai.",
"🥀 Kuch log mohabbat nahi, sirf waqt guzaarne aate hain.",
"🥀 Usne muskurakar alvida kaha, aur hum umr bhar rote rahe.",
"🥀 Bewafai ne hume itna badal diya, ki ab kisi par aitbaar nahi hota.",
"🥀 Dil ka zakhm dikhai nahi deta, bas mehsoos hota hai.",
"🥀 Wafa ka har vaada adhura reh gaya,\nJo apna tha wahi paraya ho gaya.\nHum dil se rishta nibhate rahe,\nAur wo har mod par badalta gaya.",

"🥀 Teri bewafai ne itna sikha diya,\nHar muskurahat ka matlab badal diya.\nAb kisi par jaldi aitbaar nahi hota,\nDil ne khud ko sambhalna sikha liya.",

"🥀 Mohabbat ka anjaam bhi ajeeb hota hai,\nKoi hamesha ke liye kareeb nahi hota.\nJis par sab kuch luta diya humne,\nWahi sabse bada naseeb ka dhokha hota hai.",

"🥀 Dil ne tujhe apni duniya maana,\nTune hume sirf ek afsana maana.\nHum aaj bhi wafadaar khade rahe,\nAur tune hume begaana maana.",

"🥀 Aaj bhi teri yaad sataati hai,\nHar khamoshi tera naam sunaati hai.\nBewafai ka dard shayad isi ko kehte hain,\nJab har dua adhuri reh jaati hai.",

"🥀 Waqt ne sachchai dikha di,\nHar jhoothi kasam yaad dila di.\nJo kehte the kabhi saath na chhodenge,\nUnhone hi sabse pehle raah badal li.",

"🥀 Teri yaadon ko bhulana aasaan nahi,\nDil ko samjhana itna aasaan nahi.\nBewafai ka dard sirf wahi samjhe,\nJiska apna kabhi apna raha nahi.",

"🥀 Humne har khushi tere naam likh di,\nApni har dua tere naam likh di.\nBadle me bas itna mila,\nTune meri mohabbat ko anjaam likh diya.",

"🥀 Khud se zyada tujhe chaha tha,\nHar khwaab me tujhe hi paaya tha.\nPar teri ek bewafai ne,\nSab kuch pal bhar me mita diya tha.",

"🥀 Dil tootne ki awaaz nahi aati,\nBas zindagi dheere dheere badal jaati hai.\nBewafa log aksar muskura dete hain,\nAur wafadaar aankhon se ro dete hain.",
"🥀 Wafa ki raahon me hum tanha reh gaye,\nJinhe apna maana wahi badal gaye.\nDil ne har dard chupchaap seh liya,\nAansuon ne bhi ab saath chhod diya.\nMohabbat ka ye kaisa sila mila,\nApna hi ghar ajnabi sa laga.\nAb kisi se koi shikayat nahi,\nBas khud se hi kuch gila raha.",

"🥀 Teri kasmon par hum aitbaar kar baithe,\nApni har khushi tere naam kar baithe.\nTune ek pal me sab kuch badal diya,\nHum zindagi bhar intezaar kar baithe.\nAaj bhi yaadon ka diya jalta hai,\nDil har raat chupke se rota hai.\nBewafai ka dard wahi samjhe,\nJisne saccha ishq khoya hai.",

"🥀 Har muskaan ke peeche dard chhupa tha,\nJo apna laga wahi bewafa tha.\nHumne to sirf mohabbat maangi thi,\nNaseeb me tanha safar likha tha.\nAb khamoshi hi meri zubaan hai,\nYaadein hi meri pehchaan hain.\nDil ab bhi dhadakta to hai,\nMagar jeene ki wajah kahaan hai.",

"🥀 Mohabbat ko ibadat samajh baithe,\nUski har baat ko haqeeqat samajh baithe.\nWaqt ne aaina dikhaya jab,\nHum apni hi galti samajh baithe.\nAb na koi vaada chahiye,\nNa jhooti tasalli ka sahaara.\nDil ne seekh liya hai,\nHar apna hamesha apna nahi hota.",

"🥀 Teri judaai ne mujhe badal diya,\nHanste chehre ko khamosh kar diya.\nHar din ek nayi kasak de gaya,\nHar khwaab adhura sa reh gaya.\nRab se ab sirf itni dua hai,\nKisi ko aisa dard na mile.\nMohabbat sabko naseeb ho,\nPar bewafai kisi ko na mile."
],

islamic: [
"🌙 Allah par bharosa rakho.",
"🌙 Dua kabhi bekaar nahi jaati.",
"🌙 Sabr karne walon ke saath Allah hai.",
"🌙 Har mushkil ke baad aasani hai.",
"🌙 Allah ki rehmat se kabhi mayoos mat ho.",
"🌙 Allah ki rehmat har andhere ke baad roshni laati hai.",
"🌙 Dua kabhi zaya nahi jaati, bas waqt ka intezaar karti hai.",
"🌙 Sabr karne walon ke liye Allah ki madad qareeb hoti hai.",
"🌙 Jo Allah par bharosa karta hai, woh kabhi tanha nahi hota.",
"🌙 Har mushkil Allah ki hikmat ka ek hissa hoti hai.",
"🌙 Dil ko sukoon sirf Allah ki yaad se milta hai.",
"🌙 Rizq ka waada Allah ka hai, fikr ka nahi.",
"🌙 Allah har tootey dil ki awaaz sunta hai.",
"🌙 Namaz rooh ko sukoon aur dil ko taqat deti hai.",
"🌙 Rehmat ka darwaza hamesha khula rehta hai.",
"🌙 Har dua ka ek behtareen waqt hota hai,\nAllah ka har faisla hikmat se bhara hota hai.\nDil ko mayoos kabhi mat hone do,\nUski rehmat ka dar hamesha khula hota hai.",

"🌙 Sabr karna aasaan nahi hota,\nMagar uska ajr bahut haseen hota hai.\nJo Allah par yaqeen rakhta hai,\nUska dil kabhi tanha nahi hota.",

"🌙 Musibat aaye to ghabrana mat,\nHar imtihaan me Allah ko bhulana mat.\nHar andheri raat ke baad,\nUski rehmat ka ujala zaroor aata hai.",

"🌙 Namaz sirf farz nahi,\nRooh ka sukoon bhi hai.\nJo sajde me jhukna seekh leta hai,\nWoh zindagi me uthna bhi seekh leta hai.",

"🌙 Rizq ki fikr se zyada,\nRab par bharosa rakho.\nJisne kal sambhala tha,\nWahi aaj bhi sambhalega.",

"🌙 Allah ki mohabbat sabse paak hai,\nUski rehmat be-hisaab hai.\nJo uske dar se jud jaata hai,\nUska har safar kamyaab hai.",

"🌙 Dua kabhi chhoti nahi hoti,\nAur Rab kabhi door nahi hota.\nDil se maango to,\nUska karam zaroor hota hai.",

"🌙 Gunahon se laut aana hi,\nSabse khoobsurat shuruaat hoti hai.\nAllah ki rehmat,\nHar tauba se bhi badi hoti hai.",

"🌙 Dil me Allah ki yaad basa lo,\nHar gham ko uske hawale kar do.\nJo us par bharosa karta hai,\nUski raahen aasaan ho jaati hain.",

"🌙 Zindagi ek safar hai,\nAur Allah sabse behtareen rehnuma hai.\nUski raza me raazi rehna hi,\nMomin ki asli kamyabi hai.",
"🌙 Jab dil par ghamon ka bojh badh jaaye,\nTo Allah ka naam sukoon ban jaaye.\nHar dua bekaar kabhi nahi hoti,\nBas uske qubool hone ka waqt alag hota hai.\nUski rehmat samundar se bhi gehri hai,\nUski mohabbat har kami se badi hai.\nJo us par bharosa kar leta hai,\nUski zindagi roshni se bhar jaati hai.",

"🌙 Sabr ka phal hamesha meetha hota hai,\nHar imtihaan me Rab saath hota hai.\nInsaan sirf koshish karta hai,\nKaamyabi dene wala Allah hota hai.\nDil ko mayoos kabhi mat hone do,\nUski rehmat par yaqeen rakhna.\nHar andheri raat ke baad,\nSubah ka ujala zaroor aata hai.",

"🌙 Namaz me jo sukoon milta hai,\nWo duniya ki kisi daulat me nahi.\nJab banda sajde me jhukta hai,\nTo Allah uske bahut qareeb hota hai.\nHar din uska shukr ada karo,\nHar saans uski ne'mat hai.\nUski raza me raazi rehna hi,\nEk momin ki asli daulat hai.",

"🌙 Gunahon se lautne wala kabhi der nahi karta,\nAllah apni rehmat ka dar kabhi band nahi karta.\nJo dil se tauba kar leta hai,\nUska Rab use mayoos nahi karta.\nHar aansu ko woh jaanta hai,\nHar dard ko woh pehchaanta hai.\nUski rehmat par yaqeen rakho,\nWahi har toote dil ko sambhalta hai.",

"🌙 Zindagi ek imtihaan hai,\nAur Allah sabse behtareen madadgaar."
],

dosti: [
"🤝 Saccha dost daulat se badhkar hota hai.",
"🤝 Dosti dilon ko jodti hai.",
"🤝 Mushkil waqt ka saathi hi asli dost hai.",
"🤝 Dost woh jo har haal me saath de.",
"🤝 Dosti ek khoobsurat ehsaas hai.",
"🤝 Dosti wo rishta hai jo dil se banta hai.",
"🤝 Saccha dost har mushkil me saath khada rehta hai.",
"🤝 Dosti me hisaab nahi, sirf ehsaas hote hain.",
"🤝 Jo dard samajh le, wahi asli dost hota hai.",
"🤝 Dosti zindagi ka sabse khoobsurat tohfa hai.",
"🤝 Sacchi dosti waqt ke saath aur mazboot hoti hai.",
"🤝 Dost wo hota hai jo khamoshi bhi samajh jaaye.",
"🤝 Har khushi adhuri hai agar dost saath na ho.",
"🤝 Dosti ka rishta khoon se nahi, yaqeen se banta hai.",
"🤝 Achhe dost naseeb walon ko milte hain.",
"🤝 Dosti sirf naam ka rishta nahi,\nDil se nibhaya jaane wala vaada hai.\nJo har haal me saath de,\nWahi zindagi ka asli sahaara hai.",

"🤝 Saccha dost wo nahi,\nJo sirf khushi me yaad aaye.\nAsli dost to woh hai,\nJo gham me sabse pehle nazar aaye.",

"🤝 Dosti ki koi keemat nahi hoti,\nYe har daulat se badhkar hoti hai.\nJo dil se saath nibhaye,\nWahi sabse badi khushi hoti hai.",

"🤝 Kuch rishte khoon se nahi bante,\nBas ek sachche ehsaas se bante hain.\nDosti unhi rishton me se hai,\nJo umr bhar saath chalte hain.",

"🤝 Dost ke saath har safar aasaan lagta hai,\nHar gham bhi halka lagta hai.\nMuskaan ki wajah mil jaati hai,\nJab saath ek saccha dost hota hai.",

"🤝 Dosti ka matlab sirf milna nahi,\nEk doosre ko samajhna bhi hota hai.\nJo bina kahe dil ki baat jaan le,\nWahi sabse kareebi dost hota hai.",

"🤝 Zindagi ki bheed me,\nSacche dost kam milte hain.\nJo mil jaaye unki qadr karo,\nKyuki woh baar-baar nahi milte hain.",

"🤝 Har yaad aur har kahani me,\nEk dost ka zikr zaroor hota hai.\nZindagi khoobsurat tab lagti hai,\nJab saath ek wafadaar dost hota hai.",

"🤝 Dosti me na faayda dekha jaata hai,\nNa nuksaan socha jaata hai.\nBas ek doosre ki khushi ke liye,\nDil se har kadam badhaya jaata hai.",

"🤝 Waqt badalta rehta hai,\nZindagi naye mod laati hai.\nPar sacchi dosti hamesha,\nDil me wahi jagah banaaye rakhti hai.",
"🤝 Sacchi dosti har imtihaan se guzar jaati hai,\nHar mushkil me muskaan ban jaati hai.\nNa daulat ka ghamand hota hai,\nNa matlab ka koi rishta hota hai.\nJo bina kahe dil samajh jaaye,\nWahi asli dost kehlata hai.\nZindagi me aise dost mil jaayein,\nTo har safar aasaan ho jaata hai.",

"🤝 Dost wo nahi jo sirf khushi me saath ho,\nAsli dost to gham me haath thaam leta hai.\nHar aansu ko muskaan me badal deta hai,\nHar haar ko hausle me badal deta hai.\nDosti ka rishta anmol hota hai,\nYe dil se dil ko jod deta hai.\nRab har kisi ko aisa dost de,\nJo umr bhar saath nibha de.",

"🤝 Har yaad me tera zikr rehta hai,\nHar hansi me tera asar rehta hai.\nDosti sirf mulaqat ka naam nahi,\nYe dil ke ehsaason ka paighaam hai.\nFaasle chahe kitne bhi ho jaayein,\nDil kabhi juda nahi hote.\nSacche dost hamesha,\nEk doosre ki duaon me rehte hain.",

"🤝 Zindagi ke safar me bahut log milte hain,\nPar har koi dost nahi hota.\nJo har mod par saath nibhaye,\nWahi asli humsafar hota hai.\nDosti ki khushboo kabhi kam nahi hoti,\nYe waqt ke saath aur gehri hoti hai.\nSaccha dost mil jaaye agar,\nTo zindagi aur bhi khoobsurat ho jaati hai.",

"🤝 Na rutba chahiye na shohrat chahiye,\nBas dost tera saath chahiye.\nHar khushi tere saath baantni hai,\nHar gham milkar sehna hai.\nYe rishta lafzon se bada hai,\nYe yaqeen aur mohabbat se juda hai.\nRab se bas itni si dua hai,\nHamari dosti hamesha salaamat rahe."
],

"2line":[
"✨ Alfaaz kam, ehsaas gehre.",
"✨ Muskaan me bhi dard hota hai.",
"✨ Har raat ke baad subah hoti hai.",
"✨ Khamoshi bhi kabhi kabhi bolti hai.",
"✨ Har dua ka ek sahi waqt hota hai.",
"✨ Har khamoshi ek kahani keh jaati hai.",
"✨ Muskurahat har dard chhupa nahi paati.",
"✨ Kuch yaadein waqt se bhi gehri hoti hain.",
"✨ Dil toot kar bhi dua dena jaanta hai.",
"✨ Mohabbat ka sabse khoobsurat roop wafa hai.",
"✨ Sabr har mushkil ki sabse badi taqat hai.",
"✨ Jo likha hai naseeb me, wahi milega.",
"✨ Har subah ek nayi umeed lekar aati hai.",
"✨ Khud par yaqeen sabse badi jeet hai.",
"✨ Har aansu ek nayi kahani likhta hai.",
"✨ Dil ki awaaz kabhi jhooth nahi bolti.",
"✨ Waqt sabko badalna sikha deta hai.",
"✨ Khush rehna bhi ek ibaadat hai.",
"✨ Har dua ka apna ek waqt hota hai.",
"✨ Zindagi har roz ek naya sabaq deti hai.",
"✨ Mohabbat dil se hoti hai, lafzon se nahi.",
"✨ Har muskaan ke peeche ek kahani hoti hai.",
"✨ Waqt sabka imtihaan leta hai.",
"✨ Jo khud se jeet gaya, wahi asli baadshah hai.",
"✨ Dil saaf ho to dua jaldi qubool hoti hai.",
"✨ Yaadein kabhi purani nahi hoti.",
"✨ Khamoshi aksar sabse gehra jawab hoti hai.",
"✨ Har safar ek nayi seekh de jaata hai.",
"✨ Dil ki daulat har daulat se badi hoti hai.",
"✨ Sacchi khushi baantne se badhti hai.",
"✨ Bharosa toot jaaye to alfaaz bekaar lagte hain.",
"✨ Har raat ke baad nayi subah zaroor aati hai.",
"✨ Aitbaar kamaya jaata hai, maanga nahi jaata.",
"✨ Insaniyat har mazhab se upar hai.",
"✨ Achhe alfaaz bhi ek dua ki tarah hote hain.",
"✨ Dil ki baat hamesha alfaazon ki mohtaaj nahi hoti.",
"✨ Har intezaar ka ek khoobsurat anjaam hota hai.",
"✨ Mohabbat se bada koi jazba nahi hota.",
"✨ Waqt ka sabse bada tohfa tajurba hota hai.",
"✨ Dua kabhi khaali haath nahi lautti.",
"✨ Khud ki qadr karna bhi zaroori hai.",
"✨ Har gham ek nayi taqat de jaata hai.",
"✨ Jo muskura deta hai, zaroori nahi woh khush bhi ho.",
"✨ Dil jitna saaf ho, zindagi utni haseen lagti hai.",
"✨ Har mulaqat ki apni ek kahani hoti hai.",
"✨ Alfaaz chhote ho sakte hain, ehsaas nahi.",
"✨ Mohabbat me sabse khoobsurat cheez wafa hai.",
"✨ Sabr se badi koi taqat nahi.",
"✨ Khamoshi kabhi kabhi sabse gehri zubaan hoti hai.",
"✨ Har naya din ek nayi shuruaat hai.",
"✨ Insaan ki pehchaan uske akhlaaq se hoti hai.",
"✨ Bharosa tootne me pal lagta hai, banne me saal.",
"✨ Zindagi ko muskurakar jeena bhi ek hunar hai.",
"✨ Yaadein kabhi dil se juda nahi hoti.",
"✨ Achhe alfaaz hamesha yaad rehte hain."
],

};
function saveRecentShayari(category, text){

    recentHistory = recentHistory.filter(item => item.text !== text);

    recentHistory.unshift({
        category: category,
        text: text
    });

    if(recentHistory.length > 20){

        recentHistory.pop();

    }

    localStorage.setItem(
        "recentHistory",
        JSON.stringify(recentHistory)
    );

    loadRecentHistory();

}
function loadRecentHistory(){

    const box = document.getElementById("recent-history");

    if(recentHistory.length === 0){

        box.innerHTML =
        "<p style='color:#aaa;'>Abhi koi Shayari nahi dekhi gayi.</p>";

        return;

    }

    box.innerHTML = "";

    recentHistory.forEach(item=>{

        box.innerHTML += `
        <div class="card">
            <h3>${item.category}</h3>
            <p>${item.text}</p>
        </div>
        `;

    });

}
function showCategory(category){

const list = shayari[category];

const random =
Math.floor(Math.random()*list.length);

document.getElementById("shayari-text").innerHTML =
list[random];

const names = {
love:"❤️ Love",
sad:"💔 Sad",
bewafa:"🥀 Bewafa",
islamic:"🌙 Islamic",
dosti:"🤝 Dosti",
"2line":"✨ 2 Line"
};

document.getElementById("category-name").innerHTML =
names[category];
saveRecentShayari(category, list[random]);
}
function showToast(){

const toast=document.getElementById("toast");

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

}
function copyShayari() {

    const category =
        document.getElementById("category-name").innerText;

    const shayari =
        document.getElementById("shayari-text").innerText;

    const text =
`🌙 Alfaaz By Zaman

${category}

${shayari}

━━━━━━━━━━━━━━━━━━

Har Lamha, Har Ehsaas...
Alfaaz By Zaman Ke Saath.`;

    navigator.clipboard.writeText(text);

    showToast();
}
function shareWhatsApp(){

const text =
document.getElementById("shayari-text").innerText;

const url =
"https://wa.me/?text=" + encodeURIComponent(text);

window.open(url, "_blank");

}
function randomShayari(){

const categories = Object.keys(shayari);

const randomCategory =
categories[Math.floor(Math.random()*categories.length)];

showCategory(randomCategory);

}
function searchShayari() {

    const value = searchInput.value.toLowerCase().trim();

    if (value === "") {
        return;
    }

    if (value.includes("love") || value.includes("mohabbat")) {
        showCategory("love");
        return;
    }

    if (value.includes("sad") || value.includes("dard")) {
        showCategory("sad");
        return;
    }

    if (value.includes("bewafa")) {
        showCategory("bewafa");
        return;
    }

    if (value.includes("islamic") || value.includes("allah") || value.includes("dua")) {
        showCategory("islamic");
        return;
    }

    if (value.includes("dosti") || value.includes("dost") || value.includes("friend")) {
        showCategory("dosti");
        return;
    }

    if (value.includes("2line") || value.includes("2 line")) {
        showCategory("2line");
        return;
    }
if (searchByKeyword(value)) {
    return;
}
    alert("❌ Koi matching category nahi mili.");
}
document.getElementById("shayari-text").innerHTML =
"❤️ Kisi bhi category par click kijiye...";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let recentHistory = JSON.parse(localStorage.getItem("recentHistory")) || [];
function removeFavorite(index) {

    favorites.splice(index, 1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

function addToFavorites() {

    const text = document.getElementById("shayari-text").innerHTML;

    if (!text || text.trim() === "") {
        alert("Pehle koi shayari select karo.");
        return;
    }

    if (favorites.includes(text)) {
        alert("Ye shayari pehle se Favorite hai.");
        return;
    }

    favorites.push(text);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

function displayFavorites() {

    const favBox = document.getElementById("favorites");

    if (!favBox) return;

    favBox.innerHTML = "";

    favorites.forEach((item, index) => {

        favBox.innerHTML += `
        <div class="card">
            <p>❤️ ${item}</p>

            <button class="delete-btn" onclick="removeFavorite(${index})">
                🗑 Delete
            </button>
        </div>
        `;

    });

}
function loadDailyQuote() {

    const quote =
    dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];

    const box = document.getElementById("daily-quote");

    if (box) {

        box.innerHTML = quote;

    }

}

loadDailyQuote();
function updateShayariCount() {

    let total = 0;

    for (let category in shayari) {
        total += shayari[category].length;
    }

    document.getElementById("shayari-count").innerText = total;
}

updateShayariCount();
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 2000);

});
function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const btn = document.getElementById("theme-toggle");

    if (document.body.classList.contains("light-mode")) {

        btn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");

    } else {

        btn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");

    }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");
    document.getElementById("theme-toggle").innerHTML = "☀️";

}
window.addEventListener("scroll", function () {

    const topBtn = document.getElementById("topBtn");

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const date = now.toLocaleDateString("en-IN", options);

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const box = document.getElementById("live-datetime");

    if (box) {
        box.innerHTML = `📅 ${date}<br>🕒 ${time}`;
    }

}

updateDateTime();

setInterval(updateDateTime, 1000);
const typingText = "Har Lamha, Har Ehsaas... Alfaaz By Zaman Ke Saath.";

let index = 0;

function typeEffect() {

    const element = document.getElementById("typing-text");

    if (!element) return;

    if (index < typingText.length) {

        element.innerHTML += typingText.charAt(index);

        index++;

        setTimeout(typeEffect, 70);

    }

}

typeEffect();
function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[❤️💔🥀🌙🤝✨📿]/g, "")
        .trim();
}
function searchByKeyword(keyword) {

    keyword = normalizeText(keyword.trim());

    let found = false;
let totalMatches = 0;
    for (const category in shayari) {

        const list = shayari[category];

        for (let i = 0; i < list.length; i++) {

            const current = normalizeText(list[i]);

            if (current.includes(keyword)) {
totalMatches++;
                showSpecificShayari(category, list[i]);
console.log("Total Matches:", totalMatches);
                found = true;

                return found;

            }

        }

    }

    return found;

}
function showSpecificShayari(category, text) {

    document.getElementById("shayari-text").innerHTML = text;

    const names = {
        love: "❤️ Love",
        sad: "💔 Sad",
        bewafa: "🥀 Bewafa",
        islamic: "🌙 Islamic",
        dosti: "🤝 Dosti",
        "2line": "✨ 2 Line"
    };

    document.getElementById("category-name").innerHTML =
    names[category];
saveRecentShayari(category, text);
}
function downloadShayariImage() {

    const card = document.getElementById("download-card");
    const text = document.getElementById("download-text");

    text.innerText = document.getElementById("shayari-text").innerText;

    card.style.display = "block";

    html2canvas(card, {
        backgroundColor: "#111",
        scale: 2
    }).then(canvas => {

        const link = document.createElement("a");

        link.download = "Alfaaz-By-Zaman.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        card.style.display = "none";

    });

}
loadRecentHistory();
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", liveSearch);

function liveSearch() {

    const keyword = normalizeText(searchInput.value.trim());

    const box = document.getElementById("search-suggestions");

    box.innerHTML = "";

    if (keyword === "") {

        box.style.display = "none";
        return;

    }

    let total = 0;

    for (const category in shayari) {

        for (const text of shayari[category]) {

            if (normalizeText(text).includes(keyword)) {

                const div = document.createElement("div");

                div.className = "suggestion-item";

                div.innerHTML =
                text.substring(0,60) + "...";

                div.onclick = () => {

                    showSpecificShayari(category, text);

                    box.style.display = "none";

                    searchInput.value = "";

                };

                box.appendChild(div);

                total++;

                if (total >= 6) break;

            }

        }

    }

    box.style.display =
    total ? "block" : "none";

}
