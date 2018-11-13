let keyList = Array.from(document.getElementsByClassName('key'))
//typo

keyList.forEach(key=>key.addEventListener('transitionend',removeClass))

//4 typos 

window.addEventListener('keydown',detect)
//2 typos line 5

function detect(e){
    let x= document.querySelectorAll(`[data-key='${e.keyCode}'`)
//4 typos
    if(x.length>0){
      //typo
        x[0].classList.add('playing')
//missing something on line 12
        x[1].currentTime=0
//typo line 14
        x[1].play()
    }
}

function removeClass(e) {
  console.log(e.currentTarget)
    e.currentTarget.classList.remove('playing')
}
