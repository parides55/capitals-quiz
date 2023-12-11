const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-text');
const maxQuestions = 3;
const pointsCorrect = 5;
const nextButton = document.getElementById('next-btn');
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questions = [
    {
        question: 'What is the capital of Cyprus',
        choice1: 'Nicosia',
        choice2: 'Athens',
        choice3: 'Limasol',
        choice4: 'Larnaka',
        answer: '1'
    },

    {
        question: 'What is the capital of Greece',
        choice1: 'Athens',
        choice2: 'Thesaloniki',
        choice3: 'Crete',
        choice4: 'Nicoisa',
        answer: '1'
    },

    {
        question: 'What is the capital of England',
        choice1: 'London City',
        choice2: 'London',
        choice3: 'Manchester',
        choice4: 'Glasgow',
        answer: '2'
    },

    {
        question: 'What is the capital of Italy',
        choice1: 'Venice',
        choice2: 'Milan',
        choice3: 'Rome',
        choice4: 'Turin',
        answer: '3'
    },

    {
        question: 'What is the capital of Spain',
        choice1: 'Barcelona',
        choice2: 'Valencia',
        choice3: 'Catalonia',
        choice4: 'Madrid',
        answer: '4'
    }
];

nextButton.addEventListener('click', getNewQuestion);


function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {

    for (choice of choices) {
        choice.parentElement.classList.remove('correct-answer');
        choice.parentElement.classList.remove('wrong-answer');
    }

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign('contact.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    for (choice of choices) {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    }

    availableQuestions.splice(questionIndex, 1);
}

function checkAnswer() {
    for (choice of choices) {
        isCorrect = this.getAttribute('data-number');
        if (isCorrect === currentQuestion.answer) {
            this.parentElement.classList.add('correct-answer');
            incrementScore();
        } else {
            this.parentElement.classList.add('wrong-answer');
            
        }
    }
}

for (choice of choices) {
    choice.addEventListener('click', checkAnswer);
}

function incrementScore() {
    console.log('you scored');
}




startQuiz();