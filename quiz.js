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
  },
  {
    question: "Hva er hovedstaden i Islam?",
    answers: [
      { text: "Moskéby", correct: true },
      { text: "Reysjavik", correct: false },
      { text: "Nordkapp", correct: false },
      { text: "Irak", correct: false },
    ]
  },
  {
    question: "Hva er Frankriket ikke kjent for?",
    answers: [
      { text: "The 3 big G's", correct: false },
      { text: "Alpene til Øst-Timor", correct: false },
      { text: "Monarki, Økonomi og Innflytelse", correct: false },
      { text: "Kultur, Mat og Historie", correct: true },
    ]
  },
  {
    question: "Av hvem og når ble flagget til Sverige laget?",
    answers: [
      { text: "Zlatan Ibrahimović under slaget ved stiklestad", correct: false },
      { text: "Karl Jansson Godal under anngrepet på perl harbor.", correct: true },
      { text: "NJ mens han spiste polarbrød under borgerkrigen i Shangai", correct: false },
      { text: "Av Quizdan under \"The crackdown\"", correct: false },
    ]
  },
  {
    question: "Hva står det egentilig på flagget til Saudi-arabia?",
    answers: [
      { text: "Gay-capsen til Tore", correct: false },
      { text: "Norten med... med... med...", correct: false },
      { text: "Mamma, kan jeg få godteri?", correct: true },
      { text: "Vi MÅ spleise på is", correct: false },
    ]
  },
  {
    question: "Uruguay?",
    answers: [
      { text: "Ur a gay", correct: true },
      { text: "Ur a gay", correct: true },
      { text: "Ur a gay", correct: true },
      { text: "Ur a gayest", correct: true },
    ]
  },
  {
    question: "Hva førte til \"The crackdown\" i \"2002\"?",
    answers: [
      { text: "Vitsen til Sverige om svensken dansken og normannen", correct: false },
      { text: "Konflikten mellom Dennis Vareide og drammen nationalbad", correct: false },
      { text: "Den økonomiske krisen til aksjene til NVIDIA", correct: false },
      { text: " Høy økonomisk kriseverdi pga. George Bush sin politikk", correct: true },
    ]
  },
  {
    question: "Finalespørsmål(vert 10 poeng), hva er arealet til Toreland?",
    answers: [
      { text: "Tore sitt pollytrack potensial", correct: false },
      { text: "Samme som Afghanistan", correct: true },
      { text: "Stort som en (Go) dal", correct: false },
      { text: "Hva sa hun?", correct: false },
    ]
  },
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
    questions[currentIndex].answers.forEach((answer, index) => {
      if (answer.correct) {
        answerButtonsEl.children[index].classList.add("riktig");
      }
    });
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