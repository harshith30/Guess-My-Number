let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = Number(document.querySelector(`.score`).textContent);
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);

  if (!guess) {
    document.querySelector(`.message`).textContent = "⛔️ No Number.";
  } else {
    if (guess === secretNumber) {
      // document.body.style.backgroundColor = "Green";
      document.querySelector(`body`).style.backgroundColor = "#60b347";
      document.querySelector(`.message`).textContent = "🎉 Correct Number!";
      document.querySelector(`.number`).textContent = secretNumber;
      if (highScore > scoreValue) {
      } else {
        highScore = scoreValue;
        document.querySelector(`.highscore`).textContent = scoreValue;
      }
    } else {
      if (guess < secretNumber) {
        document.querySelector(`.message`).textContent = "📉 Too low";
        reduceScore();
      } else {
        document.querySelector(`.message`).textContent = "📈 Too high";
        reduceScore();
      }
    }
  }
});

function reduceScore() {
  //   document.body.style.backgroundColor = "";
  document.querySelector(`body`).style.backgroundColor = "#222";

  if (scoreValue === 0) {
    scoreValue = 0;
    document.querySelector(`.score`).textContent = scoreValue;
    document.querySelector(`.message`).textContent = " 😂 You lost the game!";
  } else {
    scoreValue--;
    document.querySelector(`.score`).textContent = scoreValue;
  }
}

// Reset

document.querySelector(`.again`).addEventListener(`click`, function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.guess`).value = "";
  document.querySelector(`.score`).textContent = scoreValue;
  document.querySelector(`.message`).textContent = "Start guessing...";
  document.querySelector(`body`).style.backgroundColor = "#222";
  // document.querySelector(`.highscore`).textContent = 0;
  document.querySelector(`.number`).textContent = "?";
});
