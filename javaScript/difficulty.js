const levelButtons = document.querySelectorAll("button");


const levelButtonsHandler=(event)=>{
level = event.target.innerText.toLowerCase();
console.log(level);
localStorage.setItem("difficulty",level);
window.location.assign("./index.html");
};

levelButtons.forEach((button)=>{
    button.addEventListener("click",(event)=>levelButtonsHandler(event))
});