let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

//document.querySelector(".number").textContent = number;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = number;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > number ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score === 0) {
      document.querySelector(".message").textContent = "Lost the Game";
      document.querySelector("body").style.backgroundColor = "#E21717";
    }
  }

  // else if (guess > number) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Lost the Game";
  //   }
  // } else if (guess < number) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Lost the Game";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  let number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
