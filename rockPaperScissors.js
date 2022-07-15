function computerPlay(){
    const ranNum = Math.floor(Math.random() * 3);
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[ranNum];
};

const button1 = document.querySelector('.Rock'); 
button1.addEventListener('click', playerPlay);

const button2 = document.querySelector('.Paper'); 
button2.addEventListener('click', playerPlay);

const button3 = document.querySelector('.Scissors'); 
button3.addEventListener('click', playerPlay);


function playerPlay(event){
   console.log('working');
}


function playRound(playerSelection, computerSelection)  {
    
    computerSelection = computerPlay();
    playerSelection = playerPlay();
 
    if (computerSelection === "Rock" && playerSelection === "Scissors"){
        return "You Lose! Rock beats Scissors!";
    }  else if (computerSelection === "Rock" && playerSelection === "Paper"){
        return "You Win! Paper beats Rock!";
    }  else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        return "You lose! Scissors beats Paper!";
    }  else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        return "You Win! Rock beats Scissors!";
    }  else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        return "You Win! Scissors beats Paper!";
    }  else if (computerSelection === "Paper" && playerSelection === "Rock"){
        return "You lose! Rock beats paper!";
    }  else if (computerSelection === playerSelection)
        return "Draw!";
}