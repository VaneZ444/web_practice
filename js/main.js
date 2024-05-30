//тема
let theme = localStorage.getItem('theme');

const themeToggle = document.querySelector('.theme-btn')
const enableLightTheme = () => {
    document.body.classList.add('lightstyle');
    localStorage.setItem('theme', 'light');
    document.querySelector(".theme-btn").innerHTML = "Светлая";
}
const removeLightTheme = () => {
    document.body.classList.remove('lightstyle');
    localStorage.setItem('theme', null);
    document.querySelector(".theme-btn").innerHTML = "Темная";
}
themeToggle.addEventListener('click', () => {
    theme = localStorage.getItem('theme');
    if(theme !== 'light'){
        enableLightTheme();
    } else {
        removeLightTheme();
    }
});
if(theme === 'light'){
    enableLightTheme();
}

//меню настроек
let menu = document.querySelector('.settings-bar-wrapper');
let display = 1;
function hideShowSettings(){
    if(display == 1){
        menu.style.display = 'flex';
        display = 0;
    } else {
        menu.style.display = 'none';
        display = 1;
    }
}

//шрифт
let fontSize = localStorage.getItem('fontSize');

const fontHuge = document.querySelector('.fontbtn-huge');
const fontDef = document.querySelector('.fontbtn-def');

const enableHugeFont = () => {
    document.body.classList.add('huge');
    localStorage.setItem('fontSize', 'huge');
}
const disableHugeFont = () => {
    document.body.classList.remove('huge');
    localStorage.setItem('fontSize', null);
}

fontHuge.addEventListener('click', () => {
    enableHugeFont();
});
fontDef.addEventListener('click', () => {
    disableHugeFont();
});
if(fontSize === 'huge'){
    enableHugeFont();
}
//картинки
let images = localStorage.getItem('images');
let imagesArr = document.getElementsByTagName("img");
let all_elements = document.querySelectorAll("*");
const imagesToggle = document.querySelector('.img-btn')

const enableImages = () => {
    for (var i = 0; i < imagesArr.length; i++){
    imagesArr[i].style.display = "";
    }
    for(let i = 0 ; i < all_elements.length ; i++){
        all_elements[i].style.removeProperty("background-image","unset","important");
    }
    localStorage.setItem('images', null);
    document.querySelector(".img-btn").innerHTML = "Вкл";
}
const disableImages = () => {
    for (var i = 0; i < imagesArr.length; i++){
    imagesArr[i].style.display = "none";
    }
    for(let i = 0 ; i < all_elements.length ; i++){
        if ((all_elements[i].classList.contains('nav-btn'))||(all_elements[i].classList.contains('ef-button'))){
            continue;
        } else {
        all_elements[i].style.setProperty("background-image","unset","important");
        }
    }
    localStorage.setItem('images', 'off');
    document.querySelector(".img-btn").innerHTML = "Выкл";
}

imagesToggle.addEventListener('click', () => {
    images = localStorage.getItem('images');
    if(images !== 'off'){
        disableImages();
    } else {
        enableImages();
    }
});
if(images === 'off'){
    disableImages();
}
