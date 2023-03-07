var timerEl = document.getElementById('countdown');
var questionContainer = document.getElementById('questions-container')
var currentIndex = 0
var endPage = document.getElementById('end-page')

var timerCountdown = 75

var timer

var questions = [
    {
        prompt: 'Commonly Used Data Types DO NOT include: ',
        choices: ['string', 'boolean', 'numbers', 'alerts'],
        answer: 'alerts'
    }
]

//start quiz function

var startQuiz = function() {
    var startPage = document.querySelector('.start-page')
    startPage.setAttribute('class', 'hide-element')
    questionContainer.removeAttribute('class')
    timer = setInterval(clock, 1000)
    timerEl.textContent = timerCountdown
    callQuestions()
}

//display question function

//answer compare function

//clock function
var clock = function() {
    timerCountdown--
    timerEl.textContent = timerCountdown
    if (timerCountdown <= 0) {
        quizEnded()
    }

}

//end quiz function

var quizEnded = function() {
    clearInterval(timer)
    questionContainer.setAttribute('class', 'hide-element')
    endPage.removeAttribute('class')
}

// save score function

// two on clicks
// 1 for start
//1 for submit