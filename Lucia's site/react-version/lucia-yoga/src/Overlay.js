import { Link } from 'react-router-dom'
export default function Overlay(){

const bod = document.getElementsByTagName("body")[0]
window.addEventListener('resize',closeModal)
function closeModal(){
    if(window.innerWidth>1167){
      bod.classList.remove("open")
    }
  }
  function toggle(){
    bod.classList.toggle("open")
  }

  return(
    <div id='overlay'>
      <button className='nav_toggle' onClick={toggle}>
        <span id ="burger" className='burger'></span>
        <br/>
        <p className='light fineprint'>menu</p>
      </button>
      <ul id = 'overlayTabs' onClick={toggle}>
        <Link className='oLtab' to="/index">Home</Link>
        <Link className='oLtab' to="/about">About Lucia</Link>
        <Link className='oLtab' to="/offerings">Offerings</Link>
        <Link className='oLtab' to="/events">Events</Link>
        <Link className='oLtab' to="/sched">Schedule</Link>
        <Link className='oLtab' to="/contact">Contact</Link>
      </ul>
    </div>
  )
}
