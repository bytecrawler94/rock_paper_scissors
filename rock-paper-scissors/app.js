// console.log("Hello, this is Avinash Bawane");

// first, cache the DOM, like below
// meaning storing something for future

let userScore = 0;
let computerScore = 0;
// all below are divs variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	// console.log(Math.floor(Math.random()*3));
	const randomNumber = Math.floor(Math.random()*3);  
	// Math.random() gives a random number between 0 and 1

	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r")
		return "Rock";
	else if (letter === "p")
		return "Paper";
	return "Scissor";
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub(); // subscript method in string class
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);

	// result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " . You win! "; // this is ES5
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`; // this is ES6
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 200); // ES6 format style
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub(); // subscript method in string class
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	// result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " . You lose! "; // this is ES5
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You win!`; // this is ES6
	userChoice_div.classList.add('red-glow');
	setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 200); // ES5 format style
}

function draw(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sub(); // subscript method in string class
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	// result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " . You lose! "; // this is ES5
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`; // this is ES6
	userChoice_div.classList.add('gray-glow');
	setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 200);
}



function game(userChoice) {
	const conmputerChoice = getComputerChoice();
	// console.log("user Choice : " + userChoice);
	// console.log("computer Choice : " + conmputerChoice);

	switch (userChoice + conmputerChoice) {
		case "rs":
		case "pr":
		case "sp":
			// console.log("User wins!!!");
			win(userChoice, conmputerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			// console.log("Computer wins !!!");
			lose(userChoice, conmputerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			// console.log("It's a draw !!!");
			draw(userChoice, conmputerChoice);
			break;
	}

}

function main() {
	rock_div.addEventListener('click', function() {
		// console.log("Hey, you clicked the rock button");
		game("r");
	})

	paper_div.addEventListener('click', function() {
		// console.log("Hey, you clicked the paper button");
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		// console.log("Hey, you clicked the scissors button");
		game("s");
	})
}

main();

console.log(getComputerChoice());