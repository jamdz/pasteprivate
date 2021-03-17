let tab1;
let content1;
let tab2;
let content2;
let tab3;
let content3;
let tab4;
let content4;

tab1 = document.querySelector('body > section > div.paste_setting_tabs > div > ul > li:nth-child(1)');
tab2 = document.querySelector('body > section > div.paste_setting_tabs > div > ul > li:nth-child(2)');
tab3 = document.querySelector('body > section > div.paste_setting_tabs > div > ul > li:nth-child(3)');
tab4 = document.querySelector('body > section > div.paste_setting_tabs > div > ul > li:nth-child(4)');
content1 = document.getElementsByClassName('site_settings');

tab1.addEventListener("click", () => {
    // Do something
});

tab2.addEventListener("click", () => {
    // Do something
});

tab3.addEventListener("click", () => {
    // Do something
});

tab4.addEventListener("click", () => {
    // Do something
});


let collectMedium = document.querySelector(".body-details-heads-112 h5");
let cooletMedium2 = document.querySelector(".body-details-heads-113 h5");
let imageContent = document.querySelector(".body-div-details-img");
let textContent = document.querySelector(".body-div-tetxtes11");

cooletMedium2.addEventListener("click", () => {
    cooletMedium2.classList.add("active-tab");
    collectMedium.classList.remove("active-tab");
    imageContent.style.display = "none";
    textContent.style.display = "block";
});

collectMedium.addEventListener("click", () => {
    collectMedium.classList.add("active-tab");
    cooletMedium2.classList.remove("active-tab");
    imageContent.style.display = "block";
    textContent.style.display = "none";
});

let aboutContent = document.querySelector("div.body-details-heads>div.body-details-heads-112");
let makeCotent = document.querySelector("div.body-details-heads>div.body-details-heads-113");

aboutContent.addEventListener("click", () => {
    aboutContent.classList.add("active-hands");
    makeCotent.classList.remove("active-hands");
});

makeCotent.addEventListener("click", () => {
    makeCotent.classList.add("active-hands");
    aboutContent.classList.remove("active-hands");
});