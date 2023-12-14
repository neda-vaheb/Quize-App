const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const gameScore = document.getElementById("game-score");
const input = document.getElementById("input-user");
const saveButton = document.querySelector("button");

gameScore.innerText = score;
 const saveHandler =()=>{
    if(!input.value || !score){
    alert("Invalid Score or Username ")

    }else{
        const finalScore = {name : input.value, score};
        highScores.push(finalScore);
        highScores.splice(10);
        highScores.sort((a,b)=>b.score - a.score);
        localStorage.setItem("highScores" , JSON.stringify(highScores));
        localStorage.removeItem("score");
        window.location.assign("/");

    }

 }

saveButton.addEventListener("click",saveHandler);


