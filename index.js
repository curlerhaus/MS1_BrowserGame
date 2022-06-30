const arrayQuestions = [
    {question : 'How much does a typical curling stone weigh?', choices : ['50lbs', '45bls', '30lbs', '42lbs'], correctAnswer : 3},
    {question : 'What is the scoring circle called?', choices : ['House', 'Target', 'Scoring Zone', 'Pancake'], correctAnswer : 0},
    {question : 'In what year did the U.S. Mens Olympic curling team win the gold medal?', choices : ['Sochi 2010', 'Vancouver 2014', ' Pyeongchang 2018', 'Beijing 2022'], correctAnswer : 2},
    {question : 'In a 4 person game, what is the name of the position that throws first?', choices : ['Lead', 'Second', 'Vice', 'Skip'], correctAnswer: 0},
    {question : 'In a 4 person game, what is the name of the position that throws second?', choices : ['Lead', 'Second', 'Vice', 'Skip'], correctAnswer: 1},
    {question : 'In a 4 person game, what is the name of the position that throws third?', choices : ['Lead', 'Second', 'Vice', 'Skip'], correctAnswer: 2},
    {question : 'In a 4 person game, what is the name of the position that throws last?', choices : ['Lead', 'Second', 'Vice', 'Skip'], correctAnswer: 3},
]

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

function buildQuiz(){

    const question = arrayQuestions[currentQuestion].question;
    const questionClass = document.querySelector('.quizContainer > .question');
    const choiceList = document.querySelector('.quizContainer > .choiceList');
    const numChoices = arrayQuestions[currentQuestion].choices.length;

    questionClass.innerHTML = question;

    choiceList.innerHTML = '';

    var choice;
    for (i=0; i < numChoices; i++){
        choice = arrayQuestions[currentQuestion].choices[i];
        const li  = document.createElement('li');
            li.innerHTML = '<li><input type = 'radio' value = "' + i + '" name = "dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);
    }
    console.log(choice);

    // arrayQuestions.forEach(element => console.log(element.question));
    // arrayQuestions.forEach(display)
    // function display(item) {
    //     document.getElementById('question').innerHTML += item.question + '<br>'
    // }
    
}

    


// showRestults(){

// }