const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setnextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore = 0;
}

function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }
    document.getElementById('right-answer').innerText ='';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(selectedButton, correct);
    Array.from(answerButtonElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (correct === "true") {
        quizScore++;
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        nextButton.classList.add("hide");
        showFinalScore(); 
    }
}

function showFinalScore() {
    questionContainerElement.classList.add('hide');
    document.getElementById('right-answer').innerText = `Final Score: ${quizScore}/${shuffledQuestions.length}`;
}



function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct === "true") {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Which of the following is a widely used front-end framework for building responsive web applications?',
        answers: [
            { text: 'Django', correct: false },
            { text: 'React', correct: true },
            { text: 'Flask', correct: false },
            { text: 'Node.js', correct: false },
        ],
    },
    {
        question: 'Which language is used to style web pages in front-end development?',
        answers: [
            { text: 'JavaScript', correct: false },
            { text: 'CSS', correct: true },
            { text: 'HTML', correct: false },
            { text: 'Python', correct: false },
        ],
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'HyperText Machine Learning', correct: false },
            { text: 'High-Tech Markup Language', correct: false },
            { text: 'HyperText Media Layout', correct: false },
        ],
    },
    {
        question: 'Which of the following is used for client-side scripting in web development?',
        answers: [
            { text: 'PHP', correct: false },
            { text: 'JavaScript', correct: true },
            { text: 'Ruby', correct: false },
            { text: 'SQL', correct: false },
        ],
    },
    {
        question: 'Which CSS property is used to change the background color of an element?',
        answers: [
            { text: 'color', correct: false },
            { text: 'font-color', correct: false },
            { text: 'background-color', correct: true },
            { text: 'text-color', correct: false },
        ],
    },
    {
        question: 'What is the primary purpose of Flexbox in CSS?',
        answers: [
            { text: 'Create tables', correct: false },
            { text: 'Manage fixed layouts', correct: false },
            { text: 'Create responsive layouts', correct: true },
            { text: 'Animate elements', correct: false },
        ],
    },
    {
        question: 'Which tag is used to include JavaScript in an HTML file?',
        answers: [
            { text: '<js>', correct: false },
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<link>', correct: false },
        ],
    },
    {
        question: 'Which framework is based on JavaScript for building user interfaces?',
        answers: [
            { text: 'Laravel', correct: false },
            { text: 'React', correct: true },
            { text: 'Flask', correct: false },
            { text: 'Django', correct: false },
        ],
    },
    {
        question: 'What does the "DOM" in web development stand for?',
        answers: [
            { text: 'Document Object Model', correct: true },
            { text: 'Data Output Module', correct: false },
            { text: 'Dynamic Object Markup', correct: false },
            { text: 'Document Online Module', correct: false },
        ],
    },
    {
        question: 'What is Bootstrap mainly used for?',
        answers: [
            { text: 'Server-side scripting', correct: false },
            { text: 'Database management', correct: false },
            { text: 'Responsive web design', correct: true },
            { text: 'Debugging', correct: false },
        ],
    },
];
