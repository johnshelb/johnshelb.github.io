// let keyList = Array.from(document.getElementsByClassName('key'))
// // fix typo line 1
// keyList.forEach(key=>key.addEventListener('transitionend',removeClass))
//
// window.addEventListener('keydown',detect)
//
// function detect(e){
//     let x =document.querySelectorAll(`[data-key='${e.keyCode}'`)
//     if(x.length>0){
//         x[0].classList.add('playing')
//         x[1].currentTime=0
//         x[1].play()
//     }
// }
//
// function removeClass(e){
//     e.currentTarget.classList.remove('playing')
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
