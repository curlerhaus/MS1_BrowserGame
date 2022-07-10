const arrayQuestions = [
    {question : 'How much does a typical curling stone weigh?', choices : [' 54 lbs', ' 45 lbs', ' 38 lbs', ' 42 lbs'], correctAnswer : 3},
    {question : 'What is the scoring circle called?', choices : [' House', ' Target', ' Scoring Zone', ' Pancake'], correctAnswer : 0},
    {question : 'Which Winter Olympics did the U.S. Mens Olympic curling team win the gold medal?', choices : [' Sochi 2010', ' Vancouver 2014', ' PyeongChang 2018', ' Beijing 2022'], correctAnswer : 2},
    {question : 'What is the name of the player on the team that is in charge of the strategy?', choices : [' Lead', ' Vice', ' Skip', ' Second'], correctAnswer : 2},
    {question : 'From back board to back board how long is a curling sheet?', choices : [' 150ft', ' 130ft', ' 200ft', ' 100ft'], correctAnswer : 0},
]

let currentQuestion = 0;
let correctAnswers = 0;
let quizDone = false;


// loads quiz on page load
window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    let quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(quizDone === false){
            let radioBtnsChecked = document.querySelector('input[type=radio]:checked');
            //if not checked make a selection
            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                // if correct answer add to score then go to next question
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === arrayQuestions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < arrayQuestions.length){
                    displayCurrentQuestion();
                } else {
                    // if no more questions change button to play again? and display score
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Play Again?';
                    quizDone = true;
                 }
                }
        // if quiz is over reset score, display first question, hide score                   
        } else {
            quizDone = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){

    let question = arrayQuestions[currentQuestion].question;
    let questionClass = document.querySelector('.question');
    let choiceList = document.querySelector('.choiceList');
    let numChoices = arrayQuestions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    // iterates through choice list and puts those options to a list
    let choice;
    for (i = 0; i < numChoices; i++){
        choice = arrayQuestions[currentQuestion].choices[i];
        let li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);
    }
}

// Displays percent correct and the link to find a club when quiz is complete.
function displayScore(){
    const percentScored = correctAnswers / arrayQuestions.length * 100
    const displayPercent = percentScored.toFixed(0);
    document.querySelector('.result').innerHTML = "Wasn't that a lot of fun?! You scored: " + displayPercent + '%' + "<br>Ready to try curling! Follow <a href='https://www.usacurling.org/find-a-club' target='_blank'>this link</a> to find a club near you!";
    document.querySelector('.result').style.display = '';

}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}