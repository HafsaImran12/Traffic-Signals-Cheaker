let btnRed = document.querySelector(".btnRed");
let btnYellow = document.querySelector(".btnYellow");
let btnGreen = document.querySelector(".btnGreen");

btnRed.addEventListener("click", () => {
    document.body.className= "red"
});

btnYellow.addEventListener("click", () => {
    document.body.className= "yellow"
});

btnGreen.addEventListener("click", () => {
    document.body.className= "green"
});
