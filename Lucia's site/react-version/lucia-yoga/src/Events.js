import { Link } from 'react-router-dom'

export default function Events(){
  return(

    <div id = 'events'>
      <div className='titleText light'>
        <p id="truth"> Special Events</p>
        <div className = "tabs">
          <span className="tab"><Link to="/index">Home</Link></span>
          <span className="tab"><Link to ="/about">About Lucia</Link></span>
          <span className="tab"><Link to ="/offerings">Offerings</Link></span>
          <span className="tab"><Link to ="/sched">Schedule</Link></span>
          <span className="tab"><Link to ="/contact">Contact</Link></span>
        </div>
      </div>
      <div className='main'>
        <img src="images/squidface.jpg" alt="Lucia vs. squid"/>
        <h2 className="eventHead">Senior Yoga and Meditation Retreat with Lucia!</h2>
        <h3 className="eventHead2">June 13-15, Stony Point, NY</h3>
        <div id="retreat">
          <h4 className="eventHead3">Join me for a three-day getaway at the lovely Stony Point Center!</h4>
          <h4 className="eventHead3">This retreat, designed just for you, will feature:</h4>
          <div className="eventFeatures">
            <ul>
              <li>A beautiful, wooded upstate retreat center: <a href="https://stonypointcenter.org" target="_blank">stonypointcenter.org</a></li>
              <li>Your own private room, with bathroom, in a Victorian mansion</li>
              <li>Accessible yoga (chair- and mat-based), meditation and relaxation offerings each day</li>
              <li>All meals included, from dinner on Monday through lunch on Wednesday</li>
              <li>Beautiful grounds, a labyrinth, hammocks and a fire pit!</li>
              <li>Group size limited to 14 maximum</li>
            </ul>
          </div>
          <br/>
          <div className="exhort">Now is the time to take a break from daily life, get out into nature and deepen your practice. I have years of experience teaching gentle yoga, meditation and relaxation, and specialize in classes for seniors of all abilities. (Non-seniors are also welcome to this retreat!)
            <br/>
            I'm so excited to share this opportunity with you!
            <br/>
            Reach out to me with any questions.
          </div>
          <br/>
          <fineprint>
            <p>All attendees must be vaccinated and boosted against Covid-19. A negative Covid test (within 48 hours) must be shown on arrival.</p>
            <p>Masks are required in shared, public spaces, but optional in our own practice rooms.</p>
            <p>Retreat center is less than an hour's drive from NYC; also reachable via NJ Transit and a short taxi ride.</p>
          </fineprint>
        </div>
      </div>
      </div>

  )
}
