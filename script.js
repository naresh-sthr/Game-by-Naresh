let randomNumber;
let timer = 60;
let getHit;
let score = 0;
let clickedNumber;

function createBubble(){
  var clutter = "";
  for(let i=0;i<140;i++){
    randomNumber = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
    document.querySelector('.bottom-panel').innerHTML = clutter;
}

function createTimer(){
  var timerInt = setInterval(function(){
    if(timer > 0){
      timer--;
    document.querySelector('#timer').textContent = timer;
    }
    else{
      clearInterval(timerInt);
      document.querySelector('.bottom-panel').innerHTML = "Game Over";
    }
  }, 1000);
}

function createHit(){
  getHit = Math.floor(Math.random()*10);
  document.querySelector('#hit').textContent = getHit;
}

function getScore(){
  score += 10;
  document.querySelector('#score').textContent = score;
}

document.querySelector('.bottom-panel').addEventListener('click',function(details){
  clickedNumber = Number(details.target.textContent);
  if(clickedNumber === getHit){
    getScore();
    createBubble();
    createHit();
  }
})
createBubble();
createHit();
createTimer();
