// JavaScript Console Quiz Game for Assignment
// --------------------------------------------

// Array of questions and answers
const quiz = [
  {
    question: "What is the capital of India?",
    answer: "delhi"
  },
  {
    question: "What does CSS stand for?",
    answer: "cascading style sheets"
  },
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    answer: "let"
  },
  {
    question: "Which data type is used for true/false values?",
    answer: "boolean"
  },
  {
    question: "What operator is used for addition?",
    answer: "+"
  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0;
  alert("Welcome to the JavaScript Console Quiz!");

  for (let i = 0; i < quiz.length; i++) {
    let userAnswer = prompt(quiz[i].question);
    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    } else {
      userAnswer = "";
    }

    if (userAnswer === quiz[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect! The correct answer is: " + quiz[i].answer);
    }
  }

  alert("Quiz finished!
Your score: " + score + " out of " + quiz.length);
}

// Start the quiz
runQuiz();