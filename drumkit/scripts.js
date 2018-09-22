let keyList = Array.from(document.getElementsByClassName('key'))
keyList.forEach(key=>key.addEventListener('transitionend',removeClass))

window.addEventListener('keydown',detect)

function detect(e){
  let x = document.querySelectorAll(`[data-key='${e.keyCode}'`)
  if (x.length>0){
    x[0].classList.add('playing')
    x[1].currentTime=0
    x[1].play()
    }
  }

function removeClass(e) {
   e.currentTarget.classList.remove('playing')
}
