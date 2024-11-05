const getComputerChoice = function () {
  const randNr = Math.trunc(Math.random() * 3);

  if (randNr === 0) return 'rock';
  if (randNr === 1) return 'paper';
  if (randNr === 2) return 'scissors';
};

const getHumanChoice = function () {
  let choice;
  while (!['rock', 'paper', 'scissors'].includes(choice))
    choice = prompt('Pick ROCK, PAPER or SCISSORS: ').toLowerCase();

  if (choice === 'rock') return 'rock';
  else if (choice === 'paper') return 'paper';
  else if (choice === 'scissors') return 'scissors';
  else return alert('Wrong input, try again!');
};

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Both picked ${humanChoice}. It's a draw.`);
    return 0;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    console.log(
      `You picked ${humanChoice}, computer picked ${computerChoice}. You lose!`
    );
    return 2;
  } else {
    console.log(
      `You picked ${humanChoice}, computer picked ${computerChoice}. You win!`
    );
    return 1;
  }
};

const playGame = function () {
  let hScore = 0;
  let cScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = playRound(getHumanChoice(), getComputerChoice());

    if (round === 1) hScore++;
    else if (round === 2) cScore++;
  }

  if (hScore > cScore)
    console.log(
      `Total score is ${hScore} : ${cScore} in favor of player. YOU WIN!!`
    );
  else if (hScore < cScore)
    console.log(
      `Total score is ${cScore} : ${hScore} in favor of computer. You lose.. :(`
    );
  else console.log("It's a draw.");
};

playGame();
