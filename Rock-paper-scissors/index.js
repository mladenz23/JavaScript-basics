const getComputedChoice = function() {
  const randNr = Math.trunc(Math.random() * 3);
  
  if (randNr === 0) return 'rock';
  if (randNr === 1) return 'paper';
  if (randNr === 2) return 'scissors';
}

const getHumanChoice = function() {
  let choice;
  while (!['rock', 'paper', 'scissors'].includes(choice))
    choice = prompt('Pick ROCK, PAPER or SCISSORS: ').toLowerCase();
  
  if (choice === 'rock') return 'rock';
  else if (choice === 'paper') return 'paper';
  else if (choice === 'scissors') return 'scissors';
  else return alert('Wrong input, try again!');
}

const humanScore = getHumanChoice();
const computerScore = getComputedChoice();
console.log(humanScore, computerScore);

const playRound = function(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) console.log(`Both picked ${humanChoice}. It's a draw.`);
  else if (humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'rock') console.log(`You picked ${humanChoice}, computer picked ${computerChoice}. You lose!`);
  else console.log(`You picked ${humanChoice}, computer picked ${computerChoice}. You win!`);
}

playRound(humanScore, computerScore);