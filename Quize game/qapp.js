const startbutton = document.getElementById("start-quiz");
const startscreen = document.getElementById("start-screen");
const quizescreen= document.getElementById("quize-screen");
const questiontitle =document.getElementById("question-title");
const ansbutton= document.getElementById("answer-buttons");
const myscore = document.getElementById("score");
const currentquestion= document.getElementById("current-question");
const totalquestions= document.getElementById("total-questions");
const progress = document.getElementById("progress");
const resultscreen= document.getElementById("result-screen");
const restartquiz= document.getElementById("restart-quiz");
const finalscore = document.getElementById("final-score");
const resultmessage =document.getElementById("result-message")
const maxscore = document.getElementById("max-scrore")
/*step1: from start screen to quize screen when click button*/
/*function startQuize():Hide the Start screen and show the Quiz screen.
Call showQuestion() to display the first question*/
/*calling the same function repeatedly to update the screen dynamically.*/
function startQuize(){
    //all to 0  in start and restart
     score = 0;
  currentQue = 0;
  myprogress = 0;

  myscore.textContent = score;
  currentquestion.textContent = 1;
  progress.style.width = "0%";
  startscreen.classList.remove("active");
  quizescreen.classList.add("active");
  showQue();//calling funtion fist time if not blank apper
}
startbutton.addEventListener("click", startQuize)

/*step2: have to display  dynamyc question by creating arry of objects*/
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style System",
            "Creative Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: "<a>"
    },
    {
        question: "Which CSS property changes text color?",
        options: [
            "background",
            "font-size",
            "color",
            "text-style"
        ],
        correct: "color"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "define"
        ],
        correct: "var"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "**",
            "##"
        ],
        correct: "//"
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: [
            "<picture>",
            "<image>",
            "<img>",
            "<src>"
        ],
        correct: "<img>"
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "getElementById()",
            "querySelectorAll()",
            "getElementsByClass()",
            "createElement()"
        ],
        correct: "getElementById()"
    },
    {
        question: "Which CSS property makes a layout flexible?",
        options: [
            "position",
            "display: flex",
            "font-weight",
            "text-align"
        ],
        correct: "display: flex"
    },
    {
        question: "Which method adds an event listener in JavaScript?",
        options: [
            "addEvent()",
            "clickEvent()",
            "addEventListener()",
            "onEvent()"
        ],
        correct: "addEventListener()"
    }
];

  /*step3: create button dynamycally by js */
/*create button*/  
let score=0;
let currentQue=0;
let myprogress= 0;
   /* displyong question .textcontent is js propery to put text*/

/*questions[0]  will show  alll belongings to that quesion similar all
questions[1] same but we want it should change by itselt not randomaly so we put whole blueprint code inside 
function showquestion() and replace  questions[0],questions[1] with questions[currentque]
*/
function showQue(){
totalquestions.textContent = questions.length;//it will show the total qustions present in array,This automatically displays 2.
 //If you later add more questions, the total updates automatically.

     questiontitle.textContent= questions[currentQue].question;
       ansbutton.innerHTML="";//if not used it will display opions..innerhtml overwrite changes thetext
questions[currentQue].options.forEach(function(option,index){
    const button = document.createElement("button");
  //button.textContent=option/*we want srno.to be dynamic*/
   button.className = "ans-button";//This gives every newly created button the class ans-button.button1, burron2, button3..
    /*we want to detect which button clicked*/
    button.addEventListener("click",function(){
    ansbutton.querySelectorAll(".ans-button").forEach(function(btn){
        btn.disabled= true;
    })//this code log only one ans wrong or right

    function common(){
        // score increased

currentQue = currentQue + 1;

myprogress = (currentQue/questions.length)*100;


progress.style.width = myprogress +  "%";//applied it to the progress bar's CSS width.


if(currentQue === questions.length){
    resultscreen.classList.add("active");
    quizescreen.classList.remove("active");
     finalscore.textContent=score ;
let percentage = (score / (questions.length * 10)) * 100;


if(percentage <=20){
resultmessage.textContent="work hard...keep"
}
else if(percentage <=40){
 resultmessage.textContent="Keep Practicing"   
}
else if(percentage <=60){
 resultmessage.textContent="Good Job"   
}
else if(percentage <=80){
 resultmessage.textContent="Very Good"   
}else if(percentage <=100){
 resultmessage.textContent="Excellent!!!"   
}

  //Because this condition runs only when all questions are completed.So the final score will appear when the result screen opens.
}
else{
currentquestion.textContent = currentQue + 1;
showQue();/*dd the showQue() function calling 2nd time immediately after the instruction that increases currentQue.*/
//progress will be by formulla correct /total *100
}
   



        }
      
    
        
    
    if(option===questions[currentQue].correct){
        score = score+ 10;
myscore.textContent= score;
 
button.classList.add("correct");
         
        setTimeout(function(){
    common();
}, 1000);


}
      
        else {
button.classList.add("incorrect");

setTimeout(function(){
    common();
}, 1000);

        }
      
    });


  
const span = document.createElement("span");
span.textContent=String.fromCharCode(65+index)+".";
span.className="srno";

    button.appendChild(span);
    button.append(" " + option);

    ansbutton.appendChild(button);

});
}
maxscore.textContent = questions.length * 10;//mx score out of if 5 que then will 10*5=50, dynamically
//final screen updation

function restartquize(){
    //all to 0 in start nad restart
  score = 0;
  currentQue = 0;
  myprogress = 0;

  myscore.textContent = score;
  currentquestion.textContent = 1;
  progress.style.width = "0%";
  resultscreen.classList.remove("active");
startscreen.classList.add("active");
  
    showQue();
  
}

restartquiz.addEventListener("click", restartquize );


    





