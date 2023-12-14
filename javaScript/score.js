const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const list = document.querySelector("ol");

list.innerHTML=highScores.map((score , index)=>{

    return `
    <li>
    <span class="user-number">${index+1}</span> 
    <p class="user"> ${score.name} </p>
    <span class="user-score">${score.score}</span>
   </li>
   
    `;

}).join("");