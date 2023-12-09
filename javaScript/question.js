import formatData from "./helper.js";

const loader =document.getElementById("loader");
const container =document.getElementById("container");
const questionNumber =document.querySelector("question-number");
const questionText =document.getElementById("question-text");
const answerList = document.querySelectorAll(".answer-text");

const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
let formattedData =null;
let questionIndex = 0;
let correctAnswer = null;

const fectchData = async ()=>{
const response = await fetch(URL);
const json = await response.json();
console.log(json);
formattedData = formatData(json.results);
start();
}
const start = ()=>{
loader.style.display = "none";
container.style.display = "block";
showQuestion();
}
const showQuestion = ()=>{
// questionNumber.innerText =  questionIndex + 1;
const {question, answers , correctAnswerIndex} = formattedData[questionIndex];
correctAnswer = correctAnswerIndex;
console.log(correctAnswer);
questionText.innerText = question;
answerList.forEach((button,index)=>{
   button.innerText = answers[index];
}
)


}
fectchData();