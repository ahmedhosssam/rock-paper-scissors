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

choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const whoWinner = (playerSelection) => {
  const computerSelection = getComputerChoice();
  const winner = `You Win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
  const loser = `You Lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;

  if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection.toLowerCase() == 'scissors') {
      return winner;
    } else if (computerSelection.toLowerCase() == 'paper') {
      return loser;
    } else if (computerSelection.toLowerCase() == 'rock') {
      return 'Draw!';
    }
  } else if (playerSelection.toLowerCase() == 'paper') {
    if (computerSelection.toLowerCase() == 'scissors') {
      return loser;
    } else if (computerSelection.toLowerCase() == 'paper') {
      return `Draw!`;
    } else if (computerSelection.toLowerCase() == 'rock') {
      return winner;
    }
  } else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerSelection.toLowerCase() == 'scissors') {
      return `Draw!`;
    } else if (computerSelection.toLowerCase() == 'paper') {
      return winner;
    } else if (computerSelection.toLowerCase() == 'rock') {
      return loser;
    }
  }
};

console.log(whoWinner('paper'));
