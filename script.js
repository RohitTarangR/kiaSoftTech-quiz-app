let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown; 

const quizArray = [
  {
    id: "0",
    question: "HTML stans for _____ ?",
    options: [
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "Hypertext Markup Language",
      "None of these",
    ],
    correct: "Hypertext Markup Language",
  },
  {
    id: "1",
    question: "Javascript is an _______ language?",
    options: ["Object-Oriented", "Object-based", "Procedural", "None of these"],
    correct: "Object-Oriented",
  },
  {
    id: "2",
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: ["var", "let", "Both A and B", "None of these"],
    correct: "Both A and B",
  },
  {
    id: "3",
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      "getElementById()",
      "getElementsByClassName",
      "Both A and B",
      "None of these",
    ],
    correct: "Both A and B",
  },
  {
    id: "4",
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [
      "Throws an error",
      "Ignores the Statements",
      "Gives a warning",
      "None of these",
    ],
    correct: "Ignores the Statements",
  },
  {
    id: "5",
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    options: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
    correct: "All of the above",
  },
  {
    id: "6",
    question: "How can a datatype be declared to be a constant type?",
    options: ["const", "var", "let", "constant"],
    correct: "const",
  },
  {
    id: "7",
    question:
      "When the switch statement matches the expression with the given labels, how is the comparison done?",
    options: [
      "Both the datatype and the result of the expression are compared.",
      "Only the datatype of the expression is compared.",
      "Only the value of the expression is compared.",
      "None of these",
    ],
    correct: "Both the datatype and the result of the expression are compared.",
  },
  {
    id: "8",
    question:
      "What keyword is used to check whether a given property is valid or not?",
    options: ["in", "is in", "exists", "lies"],
    correct: "in",
  },
  {
    id: "9",
    question: "What is the use of the noscript tag in Javascript?",
    options: [
      "The contents are displayed by non-JS-based browsers.",
      "Clears all the cookies and cache.",
      "Both A and B",
      "None of these",
    ],
    correct: "The contents are displayed by non-JS-based browsers.",
  },
];



restart.addEventListener("click",()=>{
    initial(); 
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click",(displayNext = () => {
    questionCount +=1;
 
    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is "+ scoreCount + " out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question ";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
})
);

const timerDisplay = () =>{
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if(count==0){
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};


function quizCreater(){
    quizArray.sort(()=> Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=> Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid","hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question ";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>`;

        quizContainer.appendChild(div);
    }
}



function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");


    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
      }
      else{
        
        userOption.classList.add("incorrect")

        
        // options.forEach((element) => {
        //     if ((element.innerText = quizArray[questionCount].correct)) {
        //         // element.classList.add("correct");  aato aave j ni
        //         userOption.element.add("incorrect");
        //     }
        // });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled  = true;
    });
}



function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}



startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () =>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
}



































