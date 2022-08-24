import { Link } from 'react-router-dom'

export default function Offerings(){
  return(
    <div id='offerings'>
      <div class='titleText light'>
        <p>Offerings</p>

        <div class = "tabs">
        <span class="tab"><Link to="/index">Home</Link></span>
        <span class="tab"><Link to ="/about">About Lucia</Link></span>
        <span class="tab"><Link to ="/events">Events</Link></span>
        <span class="tab"><Link to ="/sched">Schedule</Link></span>
        <span class="tab"><Link to ="/contact">Contact</Link></span>
        </div>
      </div>

      <div class = 'main'>
        <img id = 'offerings_photo' alt='stream in the sun' src = 'images/sunstream.webp'/>
        <div class = 'container'>
          <img class = 'chair' src = 'images/retreat chair yoga.png'/>
          <div class = 'desc chairDesc'><p class='descText'><span>Senior yoga</span> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
          <a class='schedLink' href='schedule.html'>Check Schedule</a></div>
          <img class='hatha' src="images/alt-hatha.jpg" alt=""/>
          <div class = 'desc hathaDesc'><p class='descText'><span>Hatha Flow</span> yoga lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
          <a class='schedLink' href='schedule.html'>Check Schedule</a></div>
          <img class='rstrtv' src="images/alt-restorative.jpg"/>
          <div class = 'desc rstrtvDesc'><p class='descText'><span>Restorative yoga</span> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
          <a class='schedLink' href='schedule.html'>Check Schedule</a></div>
          <img class='med' src="images/meditator.jpg"/>
          <div class = 'desc medDesc'><p class='descText'><span>Meditation</span> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
          <a class='schedLink' href='schedule.html'>Check Schedule</a>
          </div>
          <img class='privateYoga' src="images/privateYoga.jpg"/>
          <div class = 'desc privDesc'><p class='descText'><span>Private sessions,</span> in person or on Zoom, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.</p>
          <a  href = "mailto: jsnd11@gmail.com" class="schedLink">Contact me</a>
        </div>
      </div>
    </div>
    </div>
  )}
