const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-btn');
const yourScore = document.getElementById('score');
const questionNumber = document.getElementById('counter');
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

/**
 * Get a new question randomly form the questionBank and remove that question from the available ones
 * and incrementes the number of questions left.
 * Removes the NEXT button until a new selection is made.
 */
function getNewQuestion() {

    
    nextButton.style.display = 'none';

    for (choice of choices) {
        choice.parentElement.classList.remove('correct-answer');
        choice.parentElement.classList.remove('wrong-answer');
        choice.disabled = false;
    }

    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        return window.location.assign('contact.html');
    }

    questionCounter++;
    questionNumber.innerText = `${questionCounter}/${maxQuestions}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    for (choice of choices) {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    }

    availableQuestions.splice(questionIndex, 1);
}

//Checks the answer when a choice is clicked and displays the next button.
for (choice of choices) {
    choice.addEventListener('click', checkAnswer);
}

function checkAnswer(event) {
    for (choice of choices) {
        const selectedChoice = event.target;
        selectedAnswer = selectedChoice.getAttribute('data-number');
        const displayCorrect = 
        choice.disabled = true;
    }

    if (selectedAnswer === currentQuestion.answer) {
        this.parentElement.classList.add('correct-answer');
        incrementScore(pointsCorrect);  
    } else {
        this.parentElement.classList.add('wrong-answer');
    }



    
    nextButton.style.display = 'block';

}


//Increments score
function incrementScore(num) {
    score += num;
    yourScore.innerText = score;
}


startQuiz();