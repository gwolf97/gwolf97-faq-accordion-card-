var accordions = document.querySelectorAll(".accordion")
var panels = document.querySelectorAll(".panel")


accordions.forEach((accordion) =>{ 
accordion.addEventListener("click", function(){
    const panel = accordion.nextElementSibling

    accordion.classList.toggle("active")
    panel.classList.toggle("active")
})})