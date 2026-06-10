let result = document.querySelector(".result")
let red = document.querySelector("#red")
let yellow = document.querySelector("#yellow")
let green = document.querySelector("#green")

red.addEventListener("click", () => {
    result.innerHTML = "Stop"
    redColor.classList.add ("redLight")
    yellowColor.classList.remove ("yellowLight")
    greenColor.classList.remove ("greenLight")
    
})
yellow.addEventListener("click", () => {
    result.innerHTML = "Start"
    redColor.classList.remove ("redLight")
    yellowColor.classList.add ("yellowLight")
    greenColor.classList.remove ("greenLight")
})
green.addEventListener("click", () => {
    result.innerHTML = "Go"
    redColor.classList.remove ("redLight")
    yellowColor.classList.remove ("yellowLight")
    greenColor.classList.add ("greenLight")
})