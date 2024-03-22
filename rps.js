const Choice = ["rock", "paper", "scissors"];


function getComputerChoice() {
	const computerChoice = Choice[Math.floor(Math.random() * Choice.length)];
	return computerChoice;
}


function getPlayerChoice() {
	const playerInput = prompt("Please enter either Rock or Paper or Scissors!").toLowerCase();
	if (playerInput === Choice[0] || playerInput === Choice[1] || playerInput === Choice[2]) {
		playerChoice = playerInput;
		return playerChoice;
		} else {
			alert("That's not a choice, enter a valid choice");
			getPlayerChoice();
			return playerChoice;
		}
}

function game() {

	let playerScore = 0;
	let computerScore = 0;
	let countTies = 0;
	let countValidRounds = 0;


	function playRound() {
		let playerChoice = getPlayerChoice();
		let computerChoice = getComputerChoice();
		console.log(`Player: ${playerChoice}\nComputer: ${computerChoice}`);
	
		if (playerChoice === computerChoice) {
			console.log("It's a tie!");
			countTies++;
			playRound();
			return;
		}	else if (playerChoice === "paper" && computerChoice === "rock") {
			console.log("You Win! Paper beats Rock");
			playerScore++;
			countValidRounds++;
			return;
		} else if (playerChoice === "rock" && computerChoice === "paper") {
			console.log("You Lose! Paper beats Rock");
			computerScore++;
			countValidRounds++;
			return;
		} else if (playerChoice === "rock" && computerChoice === "scissors"){
			console.log("You Win! Rock beats Scissors");
			playerScore++;
			countValidRounds++;
			return;
		} else if (playerChoice === "scissors" && computerChoice === "rock") {
			console.log("You Lose! Rock beats Scissors");
			computerScore++;
			countValidRounds++;
			return;
		} else if (playerChoice === "scissors" && computerChoice === "paper") {
			console.log("You Win! Scissors beats Paper");
			playerScore++;
			countValidRounds++;
			return;
		} else if (playerChoice === "paper" && computerChoice === "scissors") {
			console.log("You Lose! Scissors beats Paper");
			computerScore++;
			countValidRounds++;
			return;
		}	else
			return;
	}
	for (let i=0; i<5; i++) {
		playRound();
		console.log(`Player score: ${playerScore}, Computer score: ${computerScore}, Ties: ${countTies}`);
	};
	

	if (playerScore === 5 || playerScore > computerScore) {
	console.log("You won the game");
	}
	else {
		console.log("Computer won the game");
	} 
}
game();





