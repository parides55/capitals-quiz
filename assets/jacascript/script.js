//Variables
const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-btn');
const yourScore = document.getElementById('score');
const questionNumber = document.getElementById('counter');
const user = document.getElementById('username');
const showYourScore = document.getElementById('show-your-score');
const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
const scoreList = document.getElementById('score-list');
const contactForm = document.getElementById('contact-form');
const displayMessage = document.getElementById('display-message');
const maxQuestions = 8;
const pointsCorrect = 1;
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


//Variables for the buttons
const letsPlayButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const playAgainButton = document.getElementById('play-again-btn');
const startGameButton = document.getElementById('start-game-btn');
const menuIcon = document.getElementById('menu-btn');
const closeIcon = document.getElementById('close-btn');
const instructionsButton = document.getElementById('instructions-btn');
const highscoreButton = document.getElementById('highscores-btn');
const contactButton = document.getElementById('contact-btn');
const submitButton = document.getElementById('submit-btn');


//Variables for the various sections
const menuSelections = document.getElementById('menu-sections');
const instructionsArea = document.getElementById('instructions-area');
const highscoresArea = document.getElementById('highscores-area');
const contactPageArea = document.getElementById('contact-page-area');
const startUpArea = document.getElementById('startup-area');
const usernameArea = document.getElementById('username-area');
const gameArea = document.getElementById('game-area');
const thankYouArea = document.getElementById('thankyou-area');

//Event listeners
instructionsButton.addEventListener('click', showRules);
highscoreButton.addEventListener('click', showHighscores);
contactButton.addEventListener('click', showContactPage);
letsPlayButton.addEventListener('click', setUsername);
startGameButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', getNewQuestion);
playAgainButton.addEventListener('click', setUsername);
menuIcon.addEventListener('click', displayMenu);
closeIcon.addEventListener('click', hideMenu);
submitButton.addEventListener('click', dispalyThankYouMessage);
//Event Listener to activate the checkAnswer function when a choice button is clicked.
for (choice of choices) {
    choice.addEventListener('click', checkAnswer);
}

//Question bank stored in an array and each question is an object.
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
        choice4: 'Nicosia',
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
    },

    {
        question: 'What is the capital of Nigeria',
        choice1: 'Abuja',
        choice2: 'Accra',
        choice3: 'Addis Ababa',
        choice4: 'Madrid',
        answer: '1'
    },

    {
        question: 'What is the capital of UAE',
        choice1: 'Abu Dhabi',
        choice2: 'Dubai',
        choice3: 'Doha',
        choice4: 'Amman',
        answer: '1'
    },

    {
        question: 'What is the capital of Qatar',
        choice1: 'Abu Dhabi',
        choice2: 'Dubai',
        choice3: 'Doha',
        choice4: 'Amman',
        answer: '3'
    },

    {
        question: 'What is the capital of Turkey',
        choice1: 'Instabul',
        choice2: 'Yerevan',
        choice3: 'Ankara',
        choice4: 'Athens',
        answer: '3'
    },

    {
        question: 'What is the capital of China',
        choice1: 'Cape Town',
        choice2: 'Shanghai',
        choice3: 'Hong Kong',
        choice4: 'Beijing',
        answer: '4'
    },

    {
        question: 'What is the capital of Colombia',
        choice1: 'Buenos Aires',
        choice2: 'Bogota',
        choice3: 'Caracas',
        choice4: 'Montevideo',
        answer: '2'
    },

    {
        question: 'What is the capital of Uruguay',
        choice1: 'Buenos Aires',
        choice2: 'Bogota',
        choice3: 'Caracas',
        choice4: 'Montevideo',
        answer: '4'
    },

    {
        question: 'What is the capital of Peru',
        choice1: 'Caracas',
        choice2: 'Bogota',
        choice3: 'Lima',
        choice4: 'Madrid',
        answer: '3'
    },

    {
        question: 'What is the capital of Portugal',
        choice1: 'Seville',
        choice2: 'Faro',
        choice3: 'Porto',
        choice4: 'Lisbon',
        answer: '4'
    },

    {
        question: 'What is the capital of Maroco',
        choice1: 'Casablance',
        choice2: 'Marrakesh',
        choice3: 'Podgorica',
        choice4: 'Rabat',
        answer: '4'
    },

    {
        question: 'What is the capital of Iceland',
        choice1: 'Reykjavík',
        choice2: 'Akranes',
        choice3: 'Greenland',
        choice4: 'Akureyri',
        answer: '1'
    },

    {
        question: 'What is the capital of Puerto Rico',
        choice1: 'San José',
        choice2: 'Santiago',
        choice3: 'San Marino',
        choice4: 'San Juan',
        answer: '4'
    },

    {
        question: 'What is the capital of Chile',
        choice1: 'San José',
        choice2: 'Santiago',
        choice3: 'San Marino',
        choice4: 'San Juan',
        answer: '2'
    },

    {
        question: 'What is the capital of South Korea',
        choice1: 'Seoul',
        choice2: 'Singapore',
        choice3: 'Pyongyang',
        choice4: 'Hong Kong',
        answer: '1'
    },

    {
        question: 'What is the capital of Bulgaria',
        choice1: 'Plovdiv',
        choice2: 'Burgas',
        choice3: 'Varnas',
        choice4: 'Sofia',
        answer: '4'
    },

    {
        question: 'What is the capital of Sweden',
        choice1: 'Stockholm',
        choice2: 'Oslo',
        choice3: 'Malmö',
        choice4: 'Gothenburg',
        answer: '1'
    },

    {
        question: 'What is the capital of Georgia',
        choice1: 'Damascus',
        choice2: 'Athens',
        choice3: 'Atlanta',
        choice4: 'Tbilisi',
        answer: '4'
    },

    {
        question: 'What is the capital of Russia',
        choice1: 'Saint Petersburg',
        choice2: 'Rostov-on-Don',
        choice3: 'Moscow',
        choice4: 'Siberia',
        answer: '3'
    },

    {
        question: 'What is the capital of Tunisia',
        choice1: 'Tunis',
        choice2: 'Sousse',
        choice3: 'Casablanca',
        choice4: 'Kairouan',
        answer: '1'
    },

    {
        question: 'What is the capital of Lithuania',
        choice1: 'Vilnius',
        choice2: 'Warsaw',
        choice3: 'Vienna',
        choice4: 'Kaunas',
        answer: '1'
    },

    {
        question: 'What is the capital of Cuba',
        choice1: 'Santiago de Cuba',
        choice2: 'Santa Clara',
        choice3: 'Havana',
        choice4: 'Cienfuegos',
        answer: '3'
    },

    {
        question: 'What is the capital of Guatemala',
        choice1: 'Tashkent',
        choice2: 'Guatemala City',
        choice3: 'Mixco',
        choice4: 'Antigua Guatemala',
        answer: '2'
    },

    {
        question: 'What is the capital of  Bermuda',
        choice1: 'Tashkent',
        choice2: 'Toronto',
        choice3: 'Hamilton',
        choice4: 'Hanoi',
        answer: '3'
    },

    {
        question: 'What is the capital of Senegal',
        choice1: 'TNicosia',
        choice2: 'Dakar',
        choice3: 'Copenhagen',
        choice4: 'Lagos',
        answer: '2'
    },

    {
        question: 'What is the capital of Barbados',
        choice1: 'Hanoi',
        choice2: 'Dakar',
        choice3: 'Bridgetown',
        choice4: 'Brazzaville',
        answer: '3'
    }
];

//When the webpage loads, this function will show the main page.
window.onload = function () {
    instructionsArea.classList.add('hide');
    usernameArea.classList.add('hide');
    gameArea.classList.add('hide');
    menuSelections.classList.add('hide');
    closeIcon.classList.add('hide');
    contactPageArea.classList.add('hide');
    highscoresArea.classList.add('hide');
    thankYouArea.classList.add('hide');
};

/**
 * Displays the page to set the username.
 */
function setUsername() {
    usernameArea.classList.remove('hide');
    startUpArea.classList.add('hide');
    menuIcon.classList.add('hide');
    highscoresArea.classList.add('hide');
}

/**
 * Removes the username area and displays the game area to begin the quiz.
 */
function startQuiz() {

    if (user.value != "" && user.value != null && user.value != undefined) {
        usernameArea.classList.add('hide');
        gameArea.classList.remove('hide');
        questionCounter = 0;
        score = 0;
        yourScore.innerText = '0';
        availableQuestions = [...questions];
        getNewQuestion();
    } else {
        user.setCustomValidity("");
        alert('Please provide a username to start');
    }

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
        highscoresArea.classList.remove('hide');
        showYourScore.innerText = `${user.value} you scored ${score} points`;
        playAgainButton.classList.remove('hide');
        gameArea.classList.add('hide');
        menuIcon.classList.remove('hide');
        storeHighscores();
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

/**
 * Displays the menu sections.
 */
function displayMenu() {
    menuSelections.classList.remove('hide');
    instructionsArea.classList.add('hide');
    startUpArea.classList.add('hide');
    usernameArea.classList.add('hide');
    gameArea.classList.add('hide');
    menuIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    contactPageArea.classList.add('hide');
    highscoresArea.classList.add('hide');
}

/**
 * Hides the menu selections
 */
function hideMenu() {
    menuSelections.classList.add('hide');
    instructionsArea.classList.add('hide');
    startUpArea.classList.remove('hide');
    usernameArea.classList.add('hide');
    gameArea.classList.add('hide');
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    contactPageArea.classList.add('hide');
    highscoresArea.classList.add('hide');
}

/**
 * Displays the Rules page
 */
function showRules() {
    menuSelections.classList.add('hide');
    instructionsArea.classList.remove('hide');
    startUpArea.classList.add('hide');
    usernameArea.classList.add('hide');
    gameArea.classList.add('hide');
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    contactPageArea.classList.add('hide');
    highscoresArea.classList.add('hide');
}

/**
 * Displays the page with the 3 highest scores
 */
function showHighscores() {
    menuSelections.classList.add('hide');
    instructionsArea.classList.add('hide');
    startUpArea.classList.add('hide');
    usernameArea.classList.add('hide');
    gameArea.classList.add('hide');
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    contactPageArea.classList.add('hide');
    highscoresArea.classList.remove('hide');
    playAgainButton.classList.add('hide');
    displayHighscores();
}

/**
 * Displays the page with the Contact form 
 */
function showContactPage() {
    menuSelections.classList.add('hide');
    instructionsArea.classList.add('hide');
    startUpArea.classList.add('hide');
    usernameArea.classList.add('hide');
    gameArea.classList.add('hide');
    menuIcon.classList.remove('hide');
    closeIcon.classList.add('hide');
    contactPageArea.classList.remove('hide');
    highscoresArea.classList.add('hide');
}

/**
 * Stores the scores in the Local Storage of the Browser and sorts them.
 */
function storeHighscores() {

    const userScore = {
        score: score,
        name: user.value
    };

    highscores.push(userScore);
    highscores.sort((a, b) => b.score - a.score);
    highscores.splice(3);

    localStorage.setItem('highscores', JSON.stringify(highscores));

    displayHighscores();

}

/**
 * It displays the 3 highest scores from the local storage in an ordered list.
 */
function displayHighscores() {

    scoreList.innerHTML = highscores.map(userScore => {
        return `<li class="score-list-places">${userScore.name} scored ${userScore.score}</li>`;
    }).join('');
}

/**
 * Once the form is Sumbit with the user's details and message this function will display
 * all this information along with a Thank You message.
 */
function dispalyThankYouMessage(event) {

    event.preventDefault();

    let fullName = contactForm.elements['fullname'].value;
    let emailAddress = contactForm.elements['email'].value;
    let message = contactForm.elements['message'].value;

    if (fullName != null && fullName != "" && fullName != undefined || emailAddress != null && emailAddress != "" && emailAddress != undefined || message != null && message != "" && message != undefined) {
       
        displayMessage.innerHTML = `Hi ${fullName}! You have sent us the following: "${message}". We will get back to you on your email address ${emailAddress}.`;

        menuSelections.classList.add('hide');
        instructionsArea.classList.add('hide');
        startUpArea.classList.add('hide');
        usernameArea.classList.add('hide');
        gameArea.classList.add('hide');
        menuIcon.classList.add('hide');
        closeIcon.classList.add('hide');
        contactPageArea.classList.add('hide');
        highscoresArea.classList.add('hide');
        thankYouArea.classList.remove('hide');
    } else {
        alert('Please fill all the fields with an asterisk (*)');
    }

}

