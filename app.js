const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0,
};

//Play Game
function play(e) {
  //   console.log(e.target.id);
  restart.style.display = "inline-block";
  var playerChoice = e.target.id;

  const computerChoice = getComputerChoice();

  // console.log(playerChoice, computerChoice);
  const winner = getWinner(playerChoice, computerChoice);
  // console.log(playerChoice, computerChoice, winner);
  showWinner(winner, computerChoice);
}

//Get Computer choice
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 10);
  console.log(rand);
  if (rand <= 4) {
    return "rock";
  } else if (rand > 5 && rand <= 7) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    if (computer === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (player === "paper") {
    if (computer === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (player === "scissors") {
    if (computer == "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //increment player score
    scoreboard.player++;
    //showmodal
    result.innerHTML = `<h1 class="text-win">You Win</h1>
    <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  } else if (winner == "computer") {
    //increment player score
    scoreboard.computer++;
    //showmodal
    result.innerHTML = `<h1 class="text-lose">You Lose</h1>
     <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
     <p>Computer Chose <strong>${
       computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
     }</strong></p>`;
  } else {
    result.innerHTML = `<h1>Its A Draw</h1>
    <i class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  }
  //show score
  score.innerHTML = `<p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>`;

  modal.style.display = "block";
}

function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `<p>Player: 0</p>
  <p>Player: 0</p>`;
}

choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
