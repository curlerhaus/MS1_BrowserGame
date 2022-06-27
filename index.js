

// // inner html push h2 tag welcoming user.
// function welcomeUser() {
// document.getElementById("entername").onclick =function(){
//     if(typeof entername == 'undefined')
//     alert('Please input a user name.')
//     else {
//     var namestr;
//     namestr=document.getElementById("name").value;
//     document.getElementById("display").innerHTML="Hi"+" "+namestr+"!"+" "+"Let play some curling trivia!";
// }
//   }}

const arrayQuestions = [
    {quesiton : 'How much does a typical curling stone weigh?', answers : {a: '50lbs', b: '45bls',c: '30lbs',d: '42lbs'}, correctAnswer : 'd'},
    {question : 'What is the scoring circle called?', answers : {a: 'House',b: 'Target',c: 'Scoring Zone',d: 'Pancake'}, correctAnswer : 'a'},
    {question : 'In what year did the U.S. Mens Olympic curling team win the gold medal?', answers : {a: '2010',b: '2014',c: '2018',d: '2022'}, correctAnswer : 'c'},

]

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = [];
    arrayQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type = 'radio' name = 'question${questionNumber}' value ='${letter}'>
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class = 'question'> ${currentQuestion.question}</div>
            <div class = 'answers'> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showRestults(){

}

buildQuiz();

submitButton.addEventListener('click', showResults);


