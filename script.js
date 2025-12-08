// ============================================
// QUIZ DATA - JavaScript Questions
// ============================================
const quizData = [
    {
        question: "What does 'let' keyword do in JavaScript?",
        options: ["Declares a global variable", "Declares a block-scoped variable", "Creates a function", "Imports a module"],
        correct: 1,
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["remove()", "delete()", "pop()", "shift()"],
        correct: 2,
    },
    {
        question: "What is the correct way to write a JavaScript comment?",
        options: ["// This is a comment", "<!-- This is a comment -->", "* This is a comment *", "{ This is a comment }"],
        correct: 0,
    },
    {
        question: "What does 'JSON' stand for?",
        options: ["Java Source Object Notation", "JavaScript Object Notation", "Java Syntax Object Name", "JavaScript Online Notation"],
        correct: 1,
    },
    {
        question: "Which method converts a string to a number in JavaScript?",
        options: ["parseInt()", "stringToNumber()", "convertNumber()", "toInteger()"],
        correct: 0,
    },
    {
        question: "What is the default return value of a function in JavaScript?",
        options: ["null", "0", "undefined", "false"],
        correct: 2,
    },
    {
        question: "Which operator checks both value AND type in JavaScript?",
        options: ["==", "===", "!=", "="],
        correct: 1,
    },
    {
        question: "What does 'const' keyword do?",
        options: ["Creates a changeable variable", "Creates a constant variable", "Creates a global variable", "Creates a local function"],
        correct: 1,
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["unshift()", "push()", "add()", "append()"],
        correct: 1,
    },
    {
        question: "What is the correct way to declare a function in JavaScript?",
        options: ["function myFunction() {}", "def myFunction():", "func myFunction() {}", "define myFunction() {}"],
        correct: 0,
    },
];

const optionBtn = ['A', 'B', 'C', 'D'];

const shuffleQuestions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;

const questionEl = document.getElementById("question")
const optionsContainer = document.getElementById("optionsContainer")

function loadQuestions() {
    const q = shuffleQuestions[currentQuestion];
    questionEl.textContent = q.question;
    q.options.forEach((option, index) => {
        optionsContainer.innerHTML += `<button class="option-cart">
                    <span class="option-btn">${optionBtn[index]}</span>
                    <span class="option-text">${option}</span>
                </button>`
    })
}
loadQuestions();