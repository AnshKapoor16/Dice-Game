let randomNum1 = Math.ceil(Math.random()*6);
let randomNum2 = Math.ceil(Math.random()*6);
let randomDice = "images/dice" + randomNum1 + ".png"
let randomDice2 = "images/dice" + randomNum2 + ".png"
document.querySelector(".img1").setAttribute("src",randomDice);
document.querySelector(".img2").setAttribute("src",randomDice2);

if(randomNum1>randomNum2)
document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
else if(randomNum1<randomNum2)
document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
else
document.querySelector("h1").innerHTML = "It's a Tie!🎌";
