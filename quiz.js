const questions = [
  {
    question: "Hva kan du sammenligne Ukrainas store ubåtproduksjonelt monarki med?",
    answers: [
      { text: "En Løk", correct: true },
      { text: "To Løk", correct: false },
      { text: "Tre Løk", correct: false },
      { text: "Fire Løk", correct: false },
    ]
  },
  {
    question: "Hvilket språk snakker de i Turkmenistan?",
    answers: [
      { text: "Turkmensk", correct: false },
      { text: "Turkmenkeskerenemeneke", correct: true },
      { text: "Turk", correct: false },
      { text: "Dansk", correct: false },
    ]
  },
  {
    question: "Hvem er statsministeren i Britania?",
    answers: [
      { text: "Jhon F. Kennedy", correct: false },
      { text: "Erna solberg", correct: false },
      { text: "Tore", correct: false },
      { text: "David Attenborough", correct: true },
    ]
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  answerButtonsEl.innerHTML = "";
  nextBtn.style.display = "none";
  const current = questions[currentIndex];
  questionEl.innerText = current.question;

  current.answers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "knapp";
    button.innerText = answer.text;
    button.onclick = () => selectAnswer(button, answer.correct);
    answerButtonsEl.appendChild(button);
  });
}

function selectAnswer(button, isCorrect) {
  if (isCorrect) {
    button.classList.add("riktig");
    score++;
  } else {
    button.classList.add("feil");
  }
  Array.from(answerButtonsEl.children).forEach(btn => btn.disabled = true);
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    questionEl.innerText = `Gratulerer! Din score ble: ${score}/${questions.length}`;
    answerButtonsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

showQuestion();