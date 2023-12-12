const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-btn');
const yourScore = document.getElementById('score');
const questionNumber = document.getElementById('counter');
const maxQuestions = 3;
const pointsCorrect = 5;
const nextButton = document.getElementById('next-btn');
const usernameArea = document.getElementById('username-area');
const gameArea = document.getElementById('game-area');
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//question bank stored in an array and each question as an object.
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

//Event listener which activates the getNewQuestion function when the NEXT button is clicked.
nextButton.addEventListener('click', getNewQuestion);


function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * Get a new question randomly form the questionBank and remove that question from the available ones
 * and incremente the number of questions left.
 * Removes the previous correct/wrong classes from the selections, eanbles the buttons again
 * and removes the NEXT button until a new selection is made.
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

//Event Listener to activate the checkAnswer function when a choice button is clicked.
for (choice of choices) {
    choice.addEventListener('click', checkAnswer);
}

/**
 * Checks the correct answer and if the wrong is selected displays the correct one.
 * Also, disables the buttons for further selections 
 */
function checkAnswer(event) {
    const selectedChoice = event.target;
    const showCorrect = selectedChoice.dataset.number === currentQuestion.answer;

    if (showCorrect) {
        this.parentElement.classList.add('correct-answer');
        incrementScore(pointsCorrect);  
    } else {
        this.parentElement.classList.add('wrong-answer'); 
    }

    for (choice of choices) {
        
        if (choice.getAttribute('data-number') === currentQuestion.answer) {
            choice.parentElement.classList.add('correct-answer');
        }

        choice.disabled = true;
    }

    nextButton.style.display = 'block';

}


//Increments score
function incrementScore(num) {
    score += num;
    yourScore.innerText = score;
}


startQuiz();