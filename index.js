// Your Code Here

let userName = window.prompt("Please enter your name:");
let userScore = 0;
let playAgain = true;

function playGame() {
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let userAnswer = window.prompt(question.text);
    if (userAnswer === question.correctAnswer) {
      userScore = userScore + 10;
    }
    window.alert("Your score is: " + userScore);
  }

  window.alert(
    `Thanks for playing, ${userName}! Your final score is ${userScore}`
  );
}

while (playAgain === true) {
  playGame();
  let rematch = window.prompt("Do you want to play again? (yes or no)");
  if (rematch === "yes") {
    playAgain = true;
  } else {
    playAgain = false;
  }
}

window.alert("Thanks for playing the game!");
