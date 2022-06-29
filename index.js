const arrayQuestions = [
    {question : 'How much does a typical curling stone weigh?', choices : ['50lbs', '45bls', '30lbs', '42lbs'], correctAnswer : 3},
    {question : 'What is the scoring circle called?', choices : ['House', 'Target', 'Scoring Zone', 'Pancake'], correctAnswer : 0},
    {question : 'In what year did the U.S. Mens Olympic curling team win the gold medal?', choices : ['2010', '2014', '2018', '2022'], correctAnswer : 2},

]


function buildQuiz(){
    arrayQuestions.forEach(element => console.log(element.question));
    arrayQuestions.forEach(display)
    function display(item) {
        document.getElementById('question').innerHTML += item.question + '<br>'
    }
    
}

    


// showRestults(){

// }