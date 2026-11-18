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
      { text: "Ur a gayest", correct: false },
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
    question: "Viktig spørsmål, hva er arealet til Toreland?",
    answers: [
      { text: "Tore sitt pollytrack potensial", correct: false },
      { text: "Samme som Afghanistan", correct: true },
      { text: "Stort som en (Go) dal", correct: false },
      { text: "Hva sa hun?", correct: false },
    ]
  },
  {
    question: "Hvor mange innbyggere er det i Canada?",
    answers: [
      { text: "Fem", correct: false },
      { text: "Hauk thua spit on that thing", correct: false },
      { text: "56 røvere bak en stein", correct: false },
      { text: "2 tennisballer ut av 58 katter i suppe", correct: true },
    ]
  },
  {
    question: "Hva er hovedstaden i Tyskland?",
    answers: [
      { text: "Senegal", correct: false },
      { text: "Holmlia", correct: false },
      { text: "Berlin", correct: true },
      { text: "Litchenstein", correct: false },
    ]
  },
  {
    question: "Hva er språket i mikroasia?",
    answers: [
      { text: "Mikroasisk", correct: false },
      { text: "To maur spiste den.", correct: true },
      { text: "Imsdal, Monster og Villa(alle med vann)", correct: false },
      { text: "Hubspot nr. 1", correct: false },
    ]
  },
  {
    question: "Hvordan ser DDR stitt flagg ut?",
    answers: [
      { text: "Hvitt felt med en rød kant. Neida jeg tuller.", correct: true },
      { text: "Auf der Heide blüht ein kleines Blümelein. Und das heißt ...", correct: false },
      { text: "Goonepixel", correct: false },
      { text: "Rødt, gult og svart", correct: false },
    ]
  },
  {
    question: "Hvem oppfant sakkosekken?",
    answers: [
      { text: "Antonio Sakkosekki", correct: true },
      { text: "Anne Frank", correct: false },
      { text: "Albert Stein", correct: false },
      { text: "Adolf Godal", correct: false },
    ]
  },
  {
    question: "Hva oppfant Kristoffer nudelsang?",
    answers: [
      { text: "Hentai", correct: false },
      { text: "Ramen", correct: false },
      { text: "Nudelbretten", correct: true },
      { text: "Monopolbrettet til bestefaren", correct: false },
    ]
  },
  {
    question: "Hvilken stor hendelse sjedde i Marokko 2022?",
    answers: [
      { text: "De spiste alle kamelene til Vest-Sahara", correct: false },
      { text: "3. Verdenskonflikt", correct: false },
      { text: "Benjamin Netanyahu", correct: false },
      { text: "De kastet 50,000 tonn plast i matavfallet.", correct: true },
    ]
  },
  {
    question: "Hva er styreformen til Nigeria?",
    answers: [
      { text: "7 Blekkspruter", correct: false },
      { text: "Gryansk ostepop strupesang", correct: true },
      { text: "Konstantrepublikk", correct: false },
      { text: "Eins Swei Drei", correct: false },
    ]
  },
  {
    question: "Hvor mange innbyggere bor det i Aserbajdsjan?",
    answers: [
      { text: "67", correct: false },
      { text: "Gamb(ling)ia sine portrettmalerier", correct: false },
      { text: "1,000,000", correct: false },
      { text: "Er det egentlig så viktig?", correct: true },
    ]
  },
  {
    question: "Hva fikk innbyggerne i Colombia til å se bort fra krig?",
    answers: [
      { text: "Infanteriet til frankriket", correct: false },
      { text: "Mac and cheese med såpebobler", correct: true },
      { text: "Hitler og Stalin", correct: false },
      { text: "Gambling og betting", correct: false },
    ]
  },
   {
    question: "Hvilken valutta bruker de i Irak?",
    answers: [
      { text: "Indokinesiske stoler", correct: true },
      { text: "Vindusviskere med ledlys", correct: false },
      { text: "Kurdiske alfaer", correct: false },
      { text: "Inkognito faner", correct: false },
    ]
  },
   {
    question: "I Jamaica, hva kan gjøre at du kan bli offentlig henrettet i en vulkan?",
    answers: [
      { text: "At du ikke spiser vann", correct: false },
      { text: "At du ikke har braids", correct: true },
      { text: "At du ikke går med adidas sko", correct: false },
      { text: "At du ikke kan russisk", correct: false },
    ]
  },
   {
    question: "Hva er ulovelig i Jordan?",
    answers: [
      { text: "Airpods", correct: false },
      { text: "Sveitsisk valutta", correct: false },
      { text: "Penner", correct: true },
      { text: "Det bermudiske treangel", correct: false },
    ]
  },
   {
    question: "Hva er det som innbyggerne i Nepal bruker som en oppskrift på livet?",
    answers: [
      { text: "Å smile", correct: true },
      { text: "Trådløs lading", correct: false },
      { text: "Flinke katter", correct: false },
      { text: "Elfenbenskysten", correct: false },
    ]
  },
   {
    question: "Hva er Jordens største land?",
    answers: [
      { text: "Russland", correct: false },
      { text: "Uganda", correct: false },
      { text: "RKongo", correct: true },
      { text: "Toreland", correct: false },
    ]
  },
   {
    question: "Hva var en av favorittene til Carl Magnus Johaug?",
    answers: [
      { text: "Valutaen til Nicaragua", correct: false },
      { text: "Flagget til Liechtenstein", correct: true },
      { text: "Miguel phonk", correct: false },
      { text: "Ultraprosseserte poteter", correct: false },
    ]
  },
  {
    question: "Hva er infoen til flagget til Nord-Makedonia?",
    answers: [
      { text: "Kronologiske kiropraktorer", correct: false },
      { text: "Stort headset-dent", correct: false },
      { text: "Vanskelig å spise", correct: true },
      { text: "Introen til Ringenes herre", correct: false },
    ]
  },
  {
    question: "Hva er styreformen til Pakistan?",
    answers: [
      { text: "Våpen", correct: false },
      { text: "Medier og Komunikkasjon", correct: false },
      { text: "Tiktok", correct: false },
      { text: "Det velger de selv", correct: true },
    ]
  },
  {
    question: "Hva er styreformen til Spania?",
    answers: [
      { text: "Et komandosenter", correct: false },
      { text: "Europris", correct: false },
      { text: "Lamine Yamal", correct: true },
      { text: "Propellcaps", correct: false },
    ]
  },
  {
    question: "Hva gjør alle i Tyrkia?",
    answers: [
      { text: "Smaker på kjøleskap", correct: false },
      { text: "Snakker om klima", correct: false },
      { text: "Spiser kebab", correct: false },
      { text: "Snakker høyt i telefonen", correct: true },
    ]
  },
];

let currentIndex = 0;
let score = 0;
const quizQuestionCount = 10;
const quizQuestions = [...questions];

const questionEl = document.getElementById("question");
const questionNumberEl = document.getElementById("question-number");
const answerButtonsEl = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

for (let i = quizQuestions.length - 1; i > 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [quizQuestions[i], quizQuestions[randomIndex]] = [quizQuestions[randomIndex], quizQuestions[i]];
}
quizQuestions.length = Math.min(quizQuestionCount, quizQuestions.length);

function showQuestion() {
  answerButtonsEl.innerHTML = "";
  nextBtn.style.display = "none";
  const current = quizQuestions[currentIndex];
  questionNumberEl.innerText = `Spørsmål nr. ${currentIndex + 1}`;
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
    quizQuestions[currentIndex].answers.forEach((answer, index) => {
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
  if (currentIndex < quizQuestions.length) {
    showQuestion();
  } else {
    questionNumberEl.style.display = "none";
    questionEl.innerText = `Gratulerer! Din score ble: ${score}/${quizQuestions.length}`;
    answerButtonsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

showQuestion();