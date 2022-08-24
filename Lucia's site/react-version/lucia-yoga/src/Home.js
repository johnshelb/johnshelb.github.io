import { Link } from 'react-router-dom'

  export default function Home(){
    return(
      <div id = 'home'>
        <header>
            <div className='headText'>
              <p className="herself">Lucia Russett</p>
              <p className='light'>Yoga & Meditation</p>
            </div>
            <div className = "tabs">
              <span className="tab"><Link to="/about">About Lucia</Link></span>
              <span className="tab"><Link to="/offerings">Offerings</Link></span>
              <span className="tab"><Link to="/events">Events</Link></span>
              <span className="tab"><Link to="/sched">Schedule</Link></span>
              <span className="tab"><Link to="/contact">Contact</Link></span>
            </div>
        </header>
      </div>
    )
}
