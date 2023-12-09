import formatData from "./helper.js";

const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

const showQuestion = async()=>{
const response = await fetch(URL);
const json = await response.json();
console.log(json);
}
showQuestion();