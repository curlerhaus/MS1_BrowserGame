const arrayQuestions = [
    {question : 'How much does a typical curling stone weigh?', choices : [' 50 lbs', ' 45 lbs', ' 30 lbs', ' 42 lbs'], correctAnswer : 3},
    {question : 'What is the scoring circle called?', choices : [' House', ' Target', ' Scoring Zone', ' Pancake'], correctAnswer : 0},
    {question : 'Which Winter Olympics did the U.S. Mens Olympic curling team win the gold medal?', choices : [' Sochi 2010', ' Vancouver 2014', ' PyeongChang 2018', ' Beijing 2022'], correctAnswer : 2},
    {question : 'In a 4 person game, what is the name of the position that throws first?', choices : [' Lead', ' Second', ' Vice', ' Skip'], correctAnswer: 0},
    {question : 'In a 4 person game, what is the name of the position that throws second?', choices : [' Lead', ' Second', ' Vice', ' Skip'], correctAnswer: 1},
    {question : 'In a 4 person game, what is the name of the position that throws third?', choices : [' Lead', ' Second', ' Vice', ' Skip'], correctAnswer: 2},
    {question : 'In a 4 person game, what is the name of the position that throws last?', choices : [' Lead', ' Second', ' Vice', ' Skip'], correctAnswer: 3},
]

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;



window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');

        quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === arrayQuestions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < arrayQuestions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Play Again?';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = arrayQuestions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = arrayQuestions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
        choice = arrayQuestions[currentQuestion].choices[i];
        var li = document.createElement('li');
            li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);

    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    const percentScored = correctAnswers / arrayQuestions.length * 100
    const displayPercent = percentScored.toFixed(0);
    document.querySelector('.quizContainer > .result').innerText = "Wasn't that a lot of fun?! You scored: " + displayPercent + '%';
    document.querySelector('.quizContainer > .result').style.display = 'block';
    console.log(displayPercent)
}

function hideScore(){
    document.querySelector('.result').style.display = 'none';
}

