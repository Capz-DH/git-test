function computerPlay(){
    const ranNum = Math.floor(Math.random() * 3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[ranNum];
};

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.input')

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection, computerSelection)  {
    
    computerSelection = computerPlay();
    console.log(computerSelection);
    

 
 
    if (computerSelection === "Rock" && playerSelection === "Scissors"){
        document.getElementById("result").innerHTML = "You Lose! Rock beats Scissors!";
        computerScore += 1;
        document.getElementById("scoreC").innerHTML = computerScore;
        if (computerScore === 5) {
            document.getElementById("finalscore").innerHTML = "I Win! Idiot!";
            disableButtons()
    }}  else if (computerSelection === "Rock" && playerSelection === "Paper"){
        document.getElementById("result").innerHTML = "You Win! Paper beats Rock!";
        playerScore += 1;
        document.getElementById("scoreP").innerHTML = playerScore;
        if (playerScore === 5) {
            document.getElementById("finalscore").innerHTML = "You Win... Lucky!";
            disableButtons()
    }}  else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        document.getElementById("result").innerHTML = "You lose! Scissors beats Paper!";
        computerScore += 1;
        document.getElementById("scoreC").innerHTML = computerScore;
        if (computerScore === 5) {
            document.getElementById("finalscore").innerHTML = "I Win! Idiot!";
            disableButtons()
    }}  else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        document.getElementById("result").innerHTML = "You Win! Rock beats Scissors!";
        playerScore += 1;
        document.getElementById("scoreP").innerHTML = playerScore;
        if (playerScore === 5) {
            document.getElementById("finalscore").innerHTML = "You Win... Lucky!";
            disableButtons()
    }}  else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        document.getElementById("result").innerHTML = "You Win! Scissors beats Paper!";
        playerScore += 1;
        document.getElementById("scoreP").innerHTML = playerScore;
        if (playerScore === 5) {
            document.getElementById("finalscore").innerHTML = "You Win... Lucky!";
            disableButtons()
    }}  else if (computerSelection === "Paper" && playerSelection === "Rock"){
        document.getElementById("result").innerHTML = "You lose! Paper beats Rock!";
        computerScore += 1;
        document.getElementById("scoreC").innerHTML = computerScore;
        if (computerScore === 5) {
            document.getElementById("finalscore").innerHTML = "I Win! Idiot!";
            disableButtons()
     } }  else if (computerSelection === playerSelection) 
        document.getElementById("result").innerHTML = "Draw!";
        
    
}

