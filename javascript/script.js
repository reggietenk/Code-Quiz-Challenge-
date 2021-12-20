
const quizStartEl = document.querySelector("#quizbtn");
const quizEl = document.querySelector("#questions");
const quesContainer = document.querySelector("#quesContainer");
const timer = document.querySelector("#countdown");


function start() {
    document.querySelector('.startBtn') 

    

    

};
console.log(start)


let startquiz = () => {
    score = 0
    quesTime = 0
    questionChoices = [...questions]
    nextQues ()
}

function nextQues() {

}


console.log(startquiz)






// array to hold high scores 

let highscores = [];

countdown = () => {
    setInterval;
}

let questions = [
    {
        question: 'A very useful tool used during development  and debugging for printing content to the debgger is:',
        reply1: 'Javascript',
        reply2: 'terminal/bash',
        reply3: 'for loops',
        reply4: 'console.log',
        answer: console.log,
    },
   
    {
        question: 'Commonly used data types Do Not Include:',
        reply1: 'strings',
        reply2: 'boolean',
        reply3: 'alert',
        reply4: 'numbers',
        answer: 'alert',
    },
   
    {
        question: 'The condition in an if / else staement is enclosed with.',
        reply1: 'quotes',
        reply2: 'curly brackets',
        reply3: 'parenthesis',
        reply4: 'square brackets',
        answer: 'parenthesis',
    },
   
    {
        question: 'Arrays in JavaScript can be used to store',
        reply1: 'numbers and strings',
        reply2: 'other arrays',
        reply3: 'booleans',
        reply4: 'all of the above',
        answer: 'alloftheabove',
    },
    {
        question: 'String values must be enclosed within ______ when being assigned to variables',
        reply1: 'commas',
        reply2: 'curly brackets',
        reply3: 'quotes',
        reply4: 'parenthesis',
        answer: 'quotes',
    },
]
console.log(questions);





