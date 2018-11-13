const cards=document.querySelectorAll(".memory-card");

let hasFlippedCard=false;
let lockBoard = false;
let firstClick=true;
let firstCard,secondCard,startTime;
let element=document.getElementsByTagName('section')[0]
element.setAttribute('style',`width:${element.offsetHeight}px`);
cards.forEach(card=>{
let randomPos=Math.floor(Math.random()*12);
card.style.order=randomPos
card.addEventListener('click',flipCard)
})

function flipCard(){
    if(lockBoard) return
if(this===firstCard) return


this.classList.add('flip');


if(!hasFlippedCard){
    hasFlippedCard=true
    firstCard=this;
    return;
}
   secondCard=this;
   checkForMatch();

}


function checkForMatch(){
    let isMatch=firstCard.dataset.framework===secondCard.dataset.framework
    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);
    firstCard.dataset.listener=false;
    secondCard.dataset.listener=false;
    if(Array.prototype.slice.call(cards).every(allDone)) return
    nextTurn();
    }
    function allDone(card){
        return card.dataset.listener=="false"
    }

    function unflipCards(){

        lockBoard=true

        setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            nextTurn();

        },1500)
    }

    function nextTurn(){
        [hasFlippedCard,lockBoard]=[false,false];
        [firstCard,secondCard]=[null,null];
    }
