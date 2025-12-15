
const quizData = [
    {
        question: "Which company owns YouTube?",
        options: ["Microsoft", "Meta", "Google", "Amazon"],
        correct: 2,
    },
    {
        question: "What does 'AI' stand for?",
        options: ["Automated Internet", "Artificial Intelligence", "Advanced Input", "Auto Information"],
        correct: 1,
    },
    {
        question: "Which company developed Facebook?",
        options: ["Google", "Meta (formerly Facebook Inc.)", "Apple", "IBM"],
        correct: 1,
    },
    {
        question: "Which of the following is a search engine?",
        options: ["Google", "Facebook", "WhatsApp", "Instagram"],
        correct: 0,
    },
    {
        question: "What does the term 'Cloud Storage' mean?",
        options: ["Storing data in pen drives", "Storing data on remote servers", "Storing data inside RAM", "Storing data only on mobile"],
        correct: 1,
    },
    {
        question: "Which technology is used for digital cryptocurrency like Bitcoin?",
        options: ["Blockchain", "Cloud Computing", "AI", "5G"],
        correct: 0,
    },
    {
        question: "What does 'URL' stand for?",
        options: ["User Resource Link", "Universal Resource Locator", "Unified Register Line", "Universal Routing List"],
        correct: 1,
    },
    {
        question: "Which company created the Android operating system?",
        options: ["Apple", "Google", "Samsung", "Huawei"],
        correct: 1,
    },
    {
        question: "What is 5G mainly used for?",
        options: ["High-speed internet & low latency", "Charging mobile faster", "Saving battery", "Making calls only"],
        correct: 0,
    },
    {
        question: "What is the main purpose of Google Drive?",
        options: ["Play online games", "Store and share files online", "Create websites", "Edit programming code"],
        correct: 1,
    },
];

const optionBtn = ['A', 'B', 'C', 'D'];

const shuffleQuestions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
// let score = 0;
let correctAnsCount = 0;
let wrongAnsCount = 0;

const questionEl = document.getElementById("question")
const optionsContainer = document.getElementById("optionsContainer")
const currentQuestionEle = document.getElementById("currentQuestion1")
const totalQuestionEle = document.getElementById("totalQuestions")
const nextBtnEle = document.getElementById("nextBtn");
const resultBtnEle = document.getElementById("resultBtn");
const resultSectionEle = document.getElementById("resultSection")
const quizSectionEle = document.getElementById("quizSection")
const restartBtnEle = document.getElementById("restartBtn")
const correctAnsEle = document.getElementById("correctAnswers")
const wrongAnsEle = document.getElementById("wrongAnswers")
const scorePercentEle = document.getElementById("scorePercent")
const progressPercentEle = document.getElementById("progressPercent")
const progressBarEle = document.getElementById("progressBar")

function progressPercent(){
    progress = ((currentQuestion + 1) / quizData.length) * 100;
    return progress;
}

function loadQuestions() {
    const p = progressPercent();
    const q = shuffleQuestions[currentQuestion];
    questionEl.textContent = q.question;
    currentQuestionEle.innerText = currentQuestion + 1;
    totalQuestionEle.innerText = quizData.length;
    progressPercentEle.textContent = p + "%";
    progressBarEle.style.width = `${p}%`;
    optionsContainer.innerHTML = " ";
    q.options.forEach((option, index) => {
        optionsContainer.innerHTML += `<button class="option-cart" onclick="userAns(${index})">
                    <span class="option-btn">${optionBtn[index]}</span>
                    <span class="option-text">${option}</span>
                </button>`
    })
}
loadQuestions();

function userAns(index) {
    const q = shuffleQuestions[currentQuestion];
    const btn = document.getElementsByClassName("option-cart");
    const btn1 = document.getElementsByClassName("option-btn")[index];
    for (btnExtra of btn) {
        btnExtra.setAttribute("disabled", true);
    }
    if (index === q.correct) {
        correctAnsCount += 1;
        btn[index].style.background = "linear-gradient(90deg, rgb(20, 80, 20), rgb(60, 160, 60))";
        // btn.style.borderColor = "white";
        btn1.style.backgroundColor = "green";
    }
    else {
        wrongAnsCount += 1;
        const correctBtn = document.getElementsByClassName("option-cart")[q.correct];
        const btn2 = document.getElementsByClassName("option-btn")[q.correct]
        // correctBtn.style.borderColor = "white"
        correctBtn.style.background = "linear-gradient(90deg, rgb(20, 80, 20), rgb(60, 160, 60))";
        correctBtn.style.opacity = "0.7";
        btn2.style.backgroundColor = "green";


        btn[index].style.background = "linear-gradient(90deg, rgb(150, 0, 0), rgb(255, 50, 50))";
        // btn.style.borderColor = "white";
        btn1.style.backgroundColor = "red";
    }
}
nextBtnEle.addEventListener("click", nextBtnActive)
function nextBtnActive() {
    if (currentQuestion == quizData.length - 2) {
        nextBtnEle.setAttribute("disabled", true),
            resultBtnEle.removeAttribute("disabled")
    }
    currentQuestion++;
    loadQuestions();
}

resultBtnEle.addEventListener("click", resultSecShow);
function resultSecShow() {
     correctAnsEle.textContent = correctAnsCount;
    wrongAnsEle.textContent = wrongAnsCount;
    score = (correctAnsCount / quizData.length) * 100 + "%";
    scorePercentEle.textContent = score
    quizSectionEle.classList.toggle("hidden");
    resultSectionEle.classList.toggle("hidden")
    
}
restartBtnEle.addEventListener("click", () => {
resetUi();
})
function resetUi() {
    currentQuestion = 0;
    // score = 0;
    correctAnsCount = 0;
    wrongAnsCount = 0;
    quizSectionEle.classList.toggle("hidden");
    resultSectionEle.classList.toggle("hidden")
    nextBtnEle.removeAttribute("disabled"),
        resultBtnEle.setAttribute("disabled", true);
    loadQuestions();
}