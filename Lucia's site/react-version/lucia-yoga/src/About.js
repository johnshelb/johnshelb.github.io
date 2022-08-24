import { Link } from 'react-router-dom'

export default function About(){
  return(
    <div id="about">
      <div className='titleText light'>
        <p id="truth">Lucia!</p>
        <div className = "tabs">
        <span className="tab"><Link to="/index">Home</Link></span>
        <span className="tab"><Link to ="/offerings">Offerings</Link></span>
        <span className="tab"><Link to ="/events">Events</Link></span>
        <span className="tab"><Link to ="/sched">Schedule</Link></span>
        <span className="tab"><Link to ="/contact">Contact</Link></span>
        </div>
      </div>

      <div className = 'main'>
      <img src="images/headOnLu.jpg" alt='Lucia'/>
      <p id="bio">For Lucia, yoga is a means of self-expression and cultivating compassionate self-awareness. She completed a 200-hour teacher training at Kripalu Center for Yoga & Health in 2013 and is certified to teach Trauma-Informed Yoga by Exhale to Inhale. Before becoming a yoga teacher, she lived and worked as a social worker in East Harlem for 18 years. Lucia has taught yoga to teen girls, seniors, immigrant mothers and her neighbors, and is thrilled to be part of the yoga community. </p>
      </div>
    </div>
  )
}
