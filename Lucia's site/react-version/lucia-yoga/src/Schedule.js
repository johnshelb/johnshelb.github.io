import { Link } from 'react-router-dom'

export default function Schedule(){
  return(
<body id='schedule'>
  <div className = 'titleText light'>
    <p>Schedule of Classes</p>
    <div className='tabs'>
        <span className="tab"><Link to="/index">Home</Link></span>
        <span className="tab"><Link to ="/about">About Lucia</Link></span>
        <span className="tab"><Link to ="/offerings">Offerings</Link></span>
        <span className="tab"><Link to ="/events">Events</Link></span>
        <span className="tab"><Link to ="/contact">Contact</Link></span>
    </div>
  </div>
  <div id='overlay'>
    <button className='nav_toggle' onclick='toggle()'>
      <span id ="burger" className='burger'></span>
      <br/>
      <p className='light fineprint'>menu</p>
    </button>
  </div>
  <div className='main'>
    <div className='skedType'>
      <h2>Senior Yoga</h2>
      <ul>
        <li>92nd Street Y Himan Brown Center<br/>Monday/Friday 9:30-10:20</li>
        <ul>
          <li><a href="#">Himan Brown Contact Info</a></li>
        </ul>
        <li>Zoom class through Taft Houses<br/>Tuesday 10 - 11</li>
        <ul>
          <li><a href="#">Taft Center Contact Info</a></li>
        </ul>
        <li>Isaacs Center 93rd Street<br/>Wednesday 9:30-10:30</li>
        <ul>
          <li><a href="#">Isaacs Center contact info</a></li>
        </ul>
        <li>Simone's building<br/> 1st, 3rd, and 5th Thursdays of each month, 5-6</li>
        <ul>
          <li><a href="#">Simone' private phone number</a></li>
        </ul>
      </ul>
    </div >
    <div className='skedType'>

      <h2>Hatha Flow</h2>
      <ul>
        <li>Marcus Garvey Park<br/>Tuesday 6-7</li>
        <ul>
          <li><a target = '_blank' href='https://harlemyogastudio.com/schedule/'>Click to sign up</a></li>
        </ul>
        <li>Zoom class<br/>Saturday 10-11</li>
        <ul>
          <li><a  href = "mailto: jsnd11@gmail.com" className="emailLink">Email me!</a></li>
        </ul>
      </ul>
    </div>
    <div className='skedType'>

      <h2>Restorative Yoga</h2>
      <ul>
        <li>Harlem Yoga Studio <br/> Friday/Sunday 6-7</li>
        <ul>
          <li><a target = '_blank' href='https://harlemyogastudio.com/schedule/'>Click to sign up</a></li>
        </ul>
      </ul>
    </div>

    <div className='skedType'>
      <h2>Meditation</h2>
      <ul>
        <li>Isaacs Center 93rd Street<br/>Wednesday 10:30-11:00</li>
        <ul>
          <li><a href="#">Isaacs Center contact info</a></li>
        </ul>
        <li>Zoom via Taft Center<br/> Thursday 3:00-3:30</li>
        <ul>
          <li><a href="#">Taft Center Contact Info</a></li>
        </ul>
      </ul>
    </div>

    <div className='skedType'>
      <h2>Private Session</h2>
      <ul>
        <li>  <a  href = "mailto: jsnd11@gmail.com" className="emailLink">Email me!</a></li>
      </ul>
    </div>

  </div>
</body>
)}
