const score = JSON.parse(localStorage.getItem("score"));

const gameScore = document.getElementById("game-score");
const input = document.getElementById("input-user");
const saveButton = document.querySelector("button");
let user = [];
gameScore.innerText = score;
 const saveHandler =()=>{
    if(!input.value || !score){
    alert("Invalid Score or Username ")

    }else{
        const finalScore = {name : input.value, score}
      
    }

 }

saveButton.addEventListener("click",saveHandler);


