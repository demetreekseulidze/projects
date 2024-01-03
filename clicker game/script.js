const clickButton = document.getElementById("click");
const scoreElement = document.getElementById("score");
const prestigeButton = document.getElementById("prestige");
const prestigeElement = document.getElementById("prestige-level");

let score = 0;

let prestige = 0;



clickButton.addEventListener("click", function () {
  score++;
  scoreElement.textContent = "Score: " + score;
});


prestigeButton.addEventListener("click", function(){
    score=0
    scoreElement.textContent="score:"+score;
})



prestigeButton.addEventListener("click", function () {
  prestige++;
  scoreElement.textContent = "score: " + score;
  prestigeElement.textContent = "prestige: " + prestige;
});
