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

// Get All Elements We Need :
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');

const play = (playerSelection) => {
  const computerSelection = getComputerChoice();

  if (playerSelection.id == 'rock') {
    if (computerSelection.toLowerCase() == 'scissors') {
      playerScore++;
      playerScorePara.textContent = `Player : ${playerScore}`;
      console.log('winner');
    } else if (computerSelection.toLowerCase() == 'paper') {
      ComputerScore++;
      computerScorePara.textContent = `Computer : ${ComputerScore}`;
      console.log('loser');
    } else if (computerSelection.toLowerCase() == 'rock') {
      console.log('Draw!');
    }
  } else if (playerSelection.id == 'paper') {
    if (computerSelection.toLowerCase() == 'scissors') {
      ComputerScore++;
      computerScorePara.textContent = `Computer : ${ComputerScore}`;
      console.log('loser');
    } else if (computerSelection.toLowerCase() == 'paper') {
      console.log(`Draw!`);
    } else if (computerSelection.toLowerCase() == 'rock') {
      playerScore++;
      playerScorePara.textContent = `Player : ${playerScore}`;
      console.log('winner');
    }
  } else if (playerSelection.id == 'scissors') {
    if (computerSelection.toLowerCase() == 'scissors') {
      console.log(`Draw!`);
    } else if (computerSelection.toLowerCase() == 'paper') {
      playerScore++;
      playerScorePara.textContent = `Player : ${playerScore}`;
      console.log('winner');
    } else if (computerSelection.toLowerCase() == 'rock') {
      ComputerScore++;
      computerScorePara.textContent = `Computer : ${ComputerScore}`;
      console.log('loser');
    }
  }
};

const choicesHTML = document.querySelectorAll('.choice');

rock.addEventListener('click', (e) => play(e.target));
paper.addEventListener('click', (e) => play(e.target));
scissors.addEventListener('click', (e) => play(e.target));
