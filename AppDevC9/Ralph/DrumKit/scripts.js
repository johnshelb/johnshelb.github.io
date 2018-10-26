// let keyList=Array.from(document.getElementsByClassName('key'))
// //typo line 1
// keyList.forEach(key=>key.addEventListener('transitionend',removeClass))
// //2 typos line 3
// window.addEventListener('keydown',detect)
//
// function detect(e){
// let x =document.querySelectorAll(`[data-key='${e.keyCode}'`)
// //2 typos line 8
// if (x.length>0){
// x[0].classList.add('playing')
// //2 typos line 11
// x[1].currentTime=0
// //3 typos line 13
// x[1].play()
// //2 typos line 15
// }
// }
//
// function removeClass(e) {
// e.currentTarget.classList.remove('playing')
// }

let keyList = Array.from(document.getElementsByClassName('key'))
keyList.forEach(key=>key.addEventListener('transitionend',removeClass))

keyList.forEach(key=>key.addEventListener('click',detect))

window.addEventListener('keydown',detect)
function detect(e){
    let y = document.querySelectorAll(`[data-key='${e.target.parentElement.dataset.key}']`)
    let x = document.querySelectorAll(`[data-key='${e.keyCode}']`)
  if (x.length>0){
    x[0].classList.add('playing')
    x[1].currentTime=0
    x[1].play()
    }
    else{
      if (y.length>0){
        y[0].classList.add('playing')
        y[1].currentTime=0
        y[1].play()
        }
    }
  }

function removeClass(e) {
   e.currentTarget.classList.remove('playing')
}
