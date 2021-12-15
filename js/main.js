var accordion = document.querySelector(".accordion")
var panel = document.querySelector(".panel")
var question = document.querySelector("h2")

accordion.addEventListener("click", function(){
    question.classList.toggle("active")
    panel.classList.toggle("active")
})