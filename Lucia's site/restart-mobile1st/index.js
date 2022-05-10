window.addEventListener('resize',closeModal)
const body = document.getElementsByTagName('body')[0]

function closeModal(){
  if(window.innerWidth>500){
    body.classList.remove('open')
  }
}

function toggle(){
  document.getElementsByTagName("body")[0].classList.toggle("open")
}
