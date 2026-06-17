const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Marketing Language",
    d: "High Text Markup Language",
    correct: "b"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Cascading Style Sheets",
    c: "Computer Style Sheets",
    d: "Colorful Style Sheets",
    correct: "b"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    a: "<script>",
    b: "<javascript>",
    c: "<js>",
    d: "<scripting>",
    correct: "a"
  }
];

let question = document.querySelector("#question")
let answers = document.querySelectorAll(".answer")
let next = document.querySelector(".next")
let a_answer = document.querySelector("#a")
let b_answer = document.querySelector("#b")
let c_answer = document.querySelector("#c")
let d_answer = document.querySelector("#d")

let currentQuestion = 0;
let score = 0;

function start() {
  btnEnabled()
  let currentquestiondata = quizData[currentQuestion]
  question.innerText = currentquestiondata.question;
  a_answer.innerText = currentquestiondata.a;
  b_answer.innerText = currentquestiondata.b;
  c_answer.innerText = currentquestiondata.c;
  d_answer.innerText = currentquestiondata.d;
}

answers.forEach(answer => {
  answer.addEventListener("click", (e) => {
    if (e.target.id === quizData[currentQuestion].correct) {
      score++;
      e.target.classList.add("green")
    } else {
      e.target.classList.add("red")
    }
    btnDisabled()
  })
})
next.addEventListener("click", () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    start()
  } else {
    question.innerText = `Your score is ${score} out of ${quizData.length}`
    answers.forEach(answer => {
      answer.style.display = "none";
    })
    next.style.display = "none";
  }

})

function btnDisabled() {
  answers.forEach(answer => {
    answer.disabled = true
  })
}
function btnEnabled() {
  answers.forEach(answer => {
    answer.disabled = false
    answer.classList.remove("green", "red")
  })
}

start();