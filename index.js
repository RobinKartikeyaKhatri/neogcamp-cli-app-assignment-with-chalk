const readlineSync = require("readline-sync");
const chalk = require("chalk");

const userName = readlineSync.question(chalk.yellow("What's your name? "));

let score = 0;

console.log(chalk.green("Welcome " + chalk.blue(userName)));

function play(question, answer) {
  const userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.red("You are right!"));
    score++;
  } else {
    console.log("You are wrong!");
    score--;
  }

  console.log(chalk.red("Your score is: " + score));
}

const questions = [
  {
    question: chalk.yellow("National bird of India? "),
    answer: "Peacock"
  },
  {
    question: chalk.yellow("National animal of India? "),
    answer: "Tiger"
  },
  {
    question: chalk.yellow("National tree of India? "),
    answer: "Banyan Tree"
  },
  {
    question: chalk.yellow("National vegetable of India? "),
    answer: "Pumpkin"
  },
  {
    question: chalk.yellow("National fruit of India? "),
    answer: "Mango"
  },
  {
    question: chalk.yellow("National river of India? "),
    answer: "Ganga"
  },
  {
    question: chalk.yellow("National reptile of India? "),
    answer: "King Cobra"
  },
  {
    question: chalk.yellow("National flower of India? "),
    answer: "Lotus",
  },
  {
    question: chalk.yellow("National aquatic animal of India? "),
    answer: "Dolphin"
  },
  {
    question: chalk.yellow("National heritage animal of India? "),
    answer: "Elephant"
  }
];

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log(chalk.bgRed.bold("Your final score is: " + score));
console.log(chalk.green("******************************"));
console.log(chalk.bgRed.bold("*** Check out the highscores ***"));

const highScores = [
  {
    name: "Robin",
    score: 10
  },
  {
    name: "Raja",
    score: 9
  },
  {
    name: "Rahul",
    score: 8
  }
];

for (let i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ": " + highScores[i].score);
}

function checkHighScore(highscores) {
  let max = highscores[0].score;
  for (let i = 1; i < highscores.length; i++) {
    if (max > highscores[i].score) {
      max = highscores[i].score;
    }
  }

  if(score > max){
    console.log(chalk.inverse.bold("\n Congratulations you beat the high score \n To register your score send your details: kartikrobin[at]gmail[dot]com"));
  } else{
    console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));
  }
}

checkHighScore(highScores);