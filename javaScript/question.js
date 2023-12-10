import formatData from "./helper.js";

const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.getElementById("question-text");
const AnswerList = document.querySelectorAll(".answer-text");
const scoreText =document.getElementById("score"); 
const nextButton = document.getElementById("next-button");
const questionNumber = document.getElementById("question-number"); 
const finishButton = document.getElementById("finish-button"); 
const error = document.getElementById("error");


const CORRECT_BONUS = 10 ;
const URL = `https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`;
let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;
let score = 0;
let isAccept = true;
 const fetchData = async ()=>{
   try{
      const response = await fetch(URL);
      const json = await response.json();
       formattedData = formatData(json.results);
      start();
   }catch(err){
      loader.style.display = "none";
      error.style.display="block";
   }

 };
 const start = ()=>{
   showQuestion();
    loader.style.display = "none";
    container.style.display="block";

 }
 const showQuestion = ()=>{
   questionNumber.innerText = questionIndex + 1;
   const {question , answers , correctAnswerIndex} = formattedData[questionIndex];
    correctAnswer = correctAnswerIndex;
    console.log(correctAnswer);
   questionText.innerText = question;
   AnswerList.forEach((button , index)=>{
      button.innerText = answers[index];
   })


 };
 const checkAnswer = (event,index)=>{
   if(!isAccept) return;
   isAccept = false;
const isCorrect = index === correctAnswer ? true : false ;
if(isCorrect){
 
 event.target.classList.add("correct");
score += CORRECT_BONUS;
scoreText.innerText = score;
}else{
   
   event.target.classList.add("incorrect");
  AnswerList[correctAnswer].classList.add("correct"); 

 }
};
const nextButtonHandler =()=>{
   questionIndex++;
  
  if(questionIndex < formattedData.length){
   isAccept = true;
    showQuestion();
    removeClass ();
  }else{
   finishButtonHandler();
  }
};
const removeClass = ()=>{
   AnswerList.forEach((button)=>{
      button.className = "answer-text";
   })
};
const finishButtonHandler = ()=>{

localStorage.setItem("score" , JSON.stringify(score));
window.location.assign("./end.html");

};

window.addEventListener("load",fetchData);
nextButton.addEventListener("click", nextButtonHandler);
finishButton.addEventListener("click" , finishButtonHandler);
AnswerList.forEach((button, index)=>{
   button.addEventListener("click",(event)=> checkAnswer(event,index));
})