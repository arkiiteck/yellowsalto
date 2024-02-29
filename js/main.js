let favicon=document.querySelector('link[rel="icon"]');
let faviconList=[
    "./assets/images/favicon1.png",
    "./assets/images/favicon2.png",
    "./assets/images/favicon3.png",
    "./assets/images/favicon4.png",
    "./assets/images/favicon5.png",
    "./assets/images/favicon6.png"
]
let number=0
function runFunction(intervalo) {
    setInterval(()=>{
        if(number>=faviconList.length){
            number=0;
        }
        favicon.href=faviconList[number];
        number++;
    }, intervalo*1000);
}
runFunction(2);

let mainImage =document.querySelector("#main-image")
let brand1 =document.querySelector("#brand-1")
let brand2 =document.querySelector("#brand-2")
let button1 =document.querySelector("#button-1")
let button2 =document.querySelector("#button-2")
let button3 =document.querySelector("#button-3")
let button4 =document.querySelector("#button-4")
let brandContainer1 =document.querySelector("#brand-container-1")
let brandContainer2 =document.querySelector("#brand-container-2")

function buttonsListener(butt, image, b1, b2){
    button1.classList.remove("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
    button4.classList.remove("active")
    butt.classList.add("active")
    mainImage.classList.add('image-animation');
    brandContainer1.classList.add('brand-animation');
    brandContainer2.classList.add('brand-animation')
    setTimeout(()=>{
        mainImage.src=`${image}`
        brand1.src=`${b1}`
        brand2.src=`${b2}`
        setTimeout(()=>{
            mainImage.classList.remove('image-animation');
            brandContainer1.classList.remove('brand-animation');
            brandContainer2.classList.remove('brand-animation');
        },250)
    },250)
}

button1.addEventListener("click", ()=>{buttonsListener(button1, "./assets/images/Artboard – 1.png", "../assets/images/rockenseing.svg", "../assets/images/francolux-logo-black.svg")})
button2.addEventListener("click", ()=>{buttonsListener(button2, "./assets/images/Artboard – 2.png", "../assets/images/umof.svg", "../assets/images/yo-logo.svg")})
button3.addEventListener("click", ()=>{buttonsListener(button3, "./assets/images/Artboard – 3.png", "../assets/images/rwc2023-horizontal-noir.svg", "../assets/images/yo-logo.svg")})
button4.addEventListener("click", ()=>{buttonsListener(button4, "./assets/images/Artboard – 4.png", "../assets/images/nuitdesfestivals-logo-black.svg", "../assets/images/yo-logo.svg")})