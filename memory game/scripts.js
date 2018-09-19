
//SET-UP
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstClick = true
let firstCard, secondCard, startTime;


cards.forEach(card=>{
  let randomPos = Math.floor(Math.random() * 12);
  card.style.order = randomPos;
  card.addEventListener('click',flipCard)
})


window.addEventListener('click', startTimer)


function flipCard(){
  if (lockBoard) return
  if (this===firstCard) return

  this.classList.add('flip');

  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch(){
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
  isMatch ? disableCards() : unflipCards();
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  firstCard.dataset.listener = false;
  secondCard.dataset.listener = false;
  if (Array.prototype.slice.call(cards).every(allDone))
    {
    document.getElementById('score').innerHTML=`You did it!  It only took you <span style="color:red">${(new Date() - startTime)/1000}</span> seconds.`
  }
  else{
  nextTurn();
  }
}

function allDone(card){
  return card.dataset.listener=="false"
}

function unflipCards(){
  lockBoard = true

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    nextTurn();
  }, 1500);
}

function nextTurn() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


function startTimer(){
  if (firstClick){
    firstClick = false
    startTime = new Date()
  }
}


function startOver(){
  location.reload()
}
