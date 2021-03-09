
// FUNCTION TO GENERATE CARD
function generateCard(){
    let icon = ["♦", "♥", "♠", "♣"];
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomIcon = Math.floor(Math.random() * icon.length);
    let randomNumber = Math.floor(Math.random() * number.length);
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
    document.querySelector(".number").style.color = "black";
    if(randomIcon == 0 || randomIcon == 1) {
        document.querySelector(".top").style.color = "red";
        document.querySelector(".bottom").style.color = "red";
        document.querySelector(".number").style.color = "red";
    };
    document.querySelector(".top").innerHTML = icon[randomIcon];
    document.querySelector(".bottom").innerHTML = icon[randomIcon];
    document.querySelector(".number").innerHTML = number[randomNumber];
};

// CALL TO FUNCTION
generateCard();

// BUTTON THAT GENERATES A NEW CARD WHEN CLICKED
let btn = document.querySelector(".button");
btn.addEventListener("click",generateCard); 

// TIMER THAT GENERATES A NEW CARD EVERY 10s
setInterval(generateCard, 10000);

//INPUT TO SPECIFY WIDTH AND HEIGHT
let inputHeight = document.querySelector(".height");
inputHeight.addEventListener("change", (e) => {
    document.querySelector(".card").style.height = `${e.target.value}px`;
});
let inputWidth = document.querySelector(".width");
inputWidth.addEventListener("change", (e) => {
    document.querySelector(".card").style.width = `${e.target.value}px`;
});