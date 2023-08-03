// toggle style switcher
const styleswitchertoggle=document.querySelector(".style-switcher-toggler");
styleswitchertoggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hidden style switcher on scroll
window.addEventListener("scroll",()=>{
if(document.querySelector(".style-switcher").classList.contains("open")){
    document.querySelector(".style-switcher").classList.remove("open");
}
})
//theme colors
const alter=document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alter.forEach((style)=>{
        if(color===style.getAttribute("title")){
style.removeAttribute("disabled");
        }
        else{
           style.setAttribute("disabled","true"); 
        }
    })
}
// theme light and dark mode
const dn=document.querySelector(".day-night");
dn.addEventListener("click",()=>{
    dn.querySelector("i").classList.toggle("fa-sun");
    dn.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dn.querySelector("i").classList.add("fa-sun");
    }
    else{
        dn.querySelector("i").classList.add("fa-moon");
    }
})



