// rock paper & scissor game
let userSelected = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let btns = document.querySelectorAll(".image-btn");
let reusltGame = document.querySelector(".result");
let resetBtn = document.querySelector(".btn-reset");
let scorePlayerOne = document.querySelector(".score-player-one");
let scorePlayerTwo = document.querySelector(".score-player-two");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    userSelected = btn.id;
    console.log(userSelected);
    checkWinner();
  });
});

let checkWinner = () => {
  let randomInt = getRandomInt(1, 4);

  if (randomInt == userSelected) {
    reusltGame.innerText = `You are Winner`;
    playerOneScore++;
    scorePlayerOne.innerText = playerOneScore;
    setTimeout(() => {}, 1000);
    // reusltGame.style.visibility = "hidden";
  } else {
    reusltGame.innerText = `Computer is Winner`;
    reusltGame.style.visibility = "visible";
    playerTwoScore++;
    scorePlayerTwo.innerText = playerTwoScore;
    setTimeout(() => {}, 1000);
    // reusltGame.style.visibility = "hidden";
  }
};
// console.log(btns);

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
resetBtn.addEventListener("click", () => {
  userSelected = 0;
  playerOneScore = 0;
  playerTwoScore = 0;
  //   reusltGame.style.visibility = "hidden";
  scorePlayerOne.innerText = playerOneScore;
  scorePlayerTwo.innerText = playerTwoScore;
  reusltGame.innerText = "You vs Computer";
});
