var dice1 = document.querySelectorAll(".img1")[0];
var dice2 = document.querySelectorAll(".img2")[0];
var header = document.querySelector("h1");

var randomDice1 = Math.floor(Math.random() * 6) + 1;
var dice1Image = "./images/dice" + randomDice1 + ".png";
var selectedDice1 = dice1.setAttribute("src", dice1Image);

var randomDice2 = Math.floor(Math.random() * 6) + 1;
var dice2Image = "./images/dice" + randomDice2 + ".png";
var selectedDice2 = dice2.setAttribute("src", dice2Image);

if (randomDice1 > randomDice2) {
	header.innerHTML = "Player 1 Wins! 🚩 ";
} else if (randomDice2 > randomDice1) {
	header.innerHTML = "Player 2 Wins! 🚩";
} else {
	header.innerHTML = "Player 1 and 2 Draw!";
}
