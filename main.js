/* 
p = rock :
  c = scissors ==> win ..
  c = paper ==> lose ..
  c = rock ==> draw ..

p = paper :
  c = scissors ==> lose
  c = paper ==> draw
  c = rock ==> win

p = scissors :
  c = scissors ==> draw
  c = paper ==> win
  c = rock ==> lose
*/

const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let playerScore = 0;
let ComputerScore = 0;

const play = (playerSelection) => {
  const computerSelection = getComputerChoice();
  const winner = `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
  const loser = `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;

  if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection.toLowerCase() == 'scissors') {
      playerScore++;
      console.log(winner);
    } else if (computerSelection.toLowerCase() == 'paper') {
      ComputerScore++;
      console.log(loser);
    } else if (computerSelection.toLowerCase() == 'rock') {
      console.log('Draw!');
    }
  } else if (playerSelection.toLowerCase() == 'paper') {
    if (computerSelection.toLowerCase() == 'scissors') {
      ComputerScore++;
      console.log(loser);
    } else if (computerSelection.toLowerCase() == 'paper') {
      console.log(`Draw!`);
    } else if (computerSelection.toLowerCase() == 'rock') {
      playerScore++;
      console.log(winner);
    }
  } else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerSelection.toLowerCase() == 'scissors') {
      console.log(`Draw!`);
    } else if (computerSelection.toLowerCase() == 'paper') {
      playerScore++;
      console.log(winner);
    } else if (computerSelection.toLowerCase() == 'rock') {
      ComputerScore++;
      console.log(loser);
    }
  }
};

for (let i = 0; i <= 5; i++) {
  let choice = prompt('Rock , Paper , Scissors ?');
  console.log(play(choice));
}

console.log(`Result : Player ${playerScore} - ${ComputerScore} Computer`);
