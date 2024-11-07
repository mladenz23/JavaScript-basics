const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const results = document.createElement('div');
const scores = document.createElement('div');

results.classList.add('results');
scores.classList.add('scores');

body.appendChild(results);
body.appendChild(scores);

let hScore = 0;
let cScore = 0;

const getComputerChoice = function () {
  const randNr = Math.trunc(Math.random() * 3);
  if (randNr === 0) return 'rock';
  if (randNr === 1) return 'paper';
  if (randNr === 2) return 'scissors';
};

const playRound = function (humanChoice, computerChoice) {
  let resultMessage = '';

  if (humanChoice === computerChoice) {
    results.textContent = `Both picked ${humanChoice}. It's a draw.`;
    return 0;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    results.textContent = `You picked ${humanChoice}, computer picked ${computerChoice}. You lose!`;
    return 2;
  } else {
    results.textContent = `You picked ${humanChoice}, computer picked ${computerChoice}. You win!`;
    return 1;
  }
};

const playGame = function () {
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const hChoice = btn.dataset.choice || btn.textContent.toLowerCase();
      const cChoice = getComputerChoice();
      const roundResult = playRound(hChoice, cChoice);

      if (roundResult === 1) hScore++;
      if (roundResult === 2) cScore++;

      scores.textContent = `Current score - Player: ${hScore} | Computer: ${cScore}`;

      if (hScore === 3 || cScore === 3) {
        if (hScore > cScore) {
          results.innerHTML += `<p>Final Score - You: ${hScore} | Computer: ${cScore}. YOU WIN THE GAME!</p>`;
        } else {
          results.innerHTML += `<p>Final Score - You: ${hScore} | Computer: ${cScore}. You lose the game.. :(</p>`;
        }

        hScore = 0;
        cScore = 0;
        results.innerHTML += '<p>New game started. Best of 5!</p>';
        scores.innerHTML = `<p>Current Score - Player: ${hScore} | Computer: ${cScore}</p>`;
      }
    });
  });
};

playGame();
