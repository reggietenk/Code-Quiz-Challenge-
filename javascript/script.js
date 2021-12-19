
// quiz timer 
let quizIdCounter = 0;

let quizStartEl = document.querySelector("#start-quiz");
let quizEl = document.querySelector("#questions");
let highScore = document.querySelector("#highscore");
console.log(quizEl)



let startQuizHandler = function(event) {
    event.preventDefault();
    console.log(startQuizHandler)
    }



quizStartEl.addEventListener("click", startQuizHandler); 
console.log(startQuizHandler)
