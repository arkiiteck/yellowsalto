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