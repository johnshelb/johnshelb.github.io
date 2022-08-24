import { Link } from 'react-router-dom'

export default function Contact(){
  return(
  <div id="contactPage"  className="contact">
    <div className='titleText light'>
      <p>Let's Keep in Touch!</p>

      <div className = "tabs">
      <span className="tab"><Link to="/index">Home</Link></span>
      <span className="tab"><Link to ="/about">About Lucia</Link></span>
      <span className="tab"><Link to ="/offerings">Offerings</Link></span>
      <span className="tab"><Link to ="/events">Events</Link></span>
      <span className="tab"><Link to ="/sched">Schedule</Link></span>
      </div>
    </div>


    <div id = 'contactForm' className='contact main'>
      <h2>Questions? Comments? Want to explore private sessions? Just want to say hi?  Email me!</h2>
      <a href = "mailto: jsnd11@gmail.com" className="emailLink">Send Email</a>
      <br/>
      <br/>
      <h2>Sign up for my email list!</h2>
      <p className = 'fineprint dar'>(I send out an occassional newsletter.  You can unsubscribe at any time.  I will never sell or share your information.)</p>
      <br/>
      <form id = "addEmail" method = "POST" action = "/addEmail">
         <label for="fname">First name:</label>
         <input type="text" id="fname" name="fname" placeholder="first name"/><br/>
<br/>
         <label for="lname">Last name:</label>
         <input type="text" id="lname" name="lname" placeholder="last name"/><br/>
<br/>
         <label for="email">Email:</label>
         <input type="email" id="email" name="email" placeholder="email@isp.com"/><br/>
<br/>
         <input id='subscribe' type="submit" value="Subscribe"/>
      </form>

  </div>

  </div>
)}
