// creating the required elements
var timeEl = document.querySelector('.time');
var introEl = document.querySelector(".intro");
var startButtonEl = document.querySelector(".start-button");
var questionsEl = document.querySelector(".questions");

var initialInsertEl = document.querySelector(".initials");
// High score info
var highScoreEl = document.getElementById("high-scores");
var scoreLink = document.querySelector(".link");
var home_btn = document.querySelector(".quiz-restart");
// sections
var section1 = document.getElementById("section-1");
var section2 = document.getElementById("section-2");
var section3 = document.getElementById("section-3");
var section4 = document.getElementById("section-4");
// question answer buttons
var correct1 = document.getElementById("correct");
var correct2 = document.getElementById("correct2");
var correct3 = document.getElementById("correct3");
var correct4 = document.getElementById("correct4");
var right = document.querySelector('.correct-statement');
var wrong = document.querySelector('.wrong-statement');
// quiz results
var retakeQuiz = document.querySelector(".retake");
var goToHighScores = document.querySelector(".score");
var quizScoreEl = document.querySelector(".quiz-score");
// Start button clicked
startButtonEl.addEventListener('click', startButton, setTime);

function startButton() {
    console.log("start button activated");
    introEl.classList.add('hide');
    section1.classList.remove("hide");
    setTime(timeLeft);
}

// set timer
var timeLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
        restart(timeLeft);
      }
    }, 1000);
  }

//  QUESTION ONE
// making sure all buttons are able to be clicked...once they are clicked, it moves onto next question!
for(var question1 = document.querySelectorAll(".button-1"), i=0; i<question1.length; i++){
    question1[i].addEventListener('click', questionOne);
}  

function questionOne() {
    console.log("question one button activated");
    section1.classList.add('hide');
    section2.classList.remove('hide');
}

// right or wrong answer?
correct1.addEventListener('click', rightAnswer);

function rightAnswer(){
    if(correct1){
        right.classList.remove('hide');
    } 
    else{
        wrong.classList.remove('hide');
    } 
}


//  QUESTION TWO
// making sure all buttons are able to be clicked...once they are clicked, it moves onto next question!
for(var question2 = document.querySelectorAll(".button-2"), i=0; i<question2.length; i++){
    question2[i].addEventListener('click', questionTwo);
}  

function questionTwo() {
    console.log("question two button activated");
    section2.classList.add('hide');
    section3.classList.remove('hide');
}

// right or wrong answer?
correct2.addEventListener('click', rightAnswer2);

function rightAnswer2(){
    if(correct2){
        right.classList.remove('hide');
    } else {
        wrong.classList.remove('hide');
    } 
}


//  QUESTION THREE
// making sure all buttons are able to be clicked...once they are clicked, it moves onto next question!
for(var question3 = document.querySelectorAll(".button-3"), i=0; i<question3.length; i++){
    question3[i].addEventListener('click', questionThree);
}  

function questionThree() {
    console.log("question three button activated");
    section3.classList.add('hide');
    section4.classList.remove('hide');
}

// right or wrong answer?
correct3.addEventListener('click', rightAnswer3);

function rightAnswer3(){
    if(correct3){
        right.classList.remove('hide');
    } else {
        wrong.classList.remove('hide');
    } 
}

//  QUESTION FOUR
// making sure all buttons are able to be clicked...once they are clicked, it moves onto next question!
for(var question4 = document.querySelectorAll(".button-4"), i=0; i<question4.length; i++){
    question4[i].addEventListener('click', questionFour);
}  

function questionFour() {
    console.log("question four button activated");
    section4.classList.add('hide');
    quizScoreEl.classList.remove('hide');
}

// right or wrong answer?
correct4.addEventListener('click', rightAnswer4);

function rightAnswer4(){
    if(correct4){
        right.classList.remove('hide');
    } else {
        wrong.classList.remove('hide');
    } 
}


// Quiz Score Results



    // quiz result buttons
        retakeQuiz.addEventListener('click', retake)

        function retake(){
            console.log('retake activated')
            quizScoreEl.classList.add('hide');
            introEl.classList.remove('hide');
        }

        goToHighScores.addEventListener('click', goTo)

        function goTo(){
            console.log('go to activated')
            quizScoreEl.classList.add('hide');
            highScoreEl.removeAttribute('id');
        }



// High Scores

        // link and button clicks   
        scoreLink.addEventListener('click', highScoreEvent)

        function highScoreEvent(){
            introEl.classList.add('hide');
            section1.classList.add('hide');
            section2.classList.add('hide');
            section3.classList.add('hide');
            section4.classList.add('hide');
            highScoreEl.removeAttribute('id');
        }

        home_btn.addEventListener('click', restart)

        function restart(){
            console.log('restart activated')
            highScoreEl.setAttribute('id','high-scores');
            introEl.classList.remove('hide');
        }