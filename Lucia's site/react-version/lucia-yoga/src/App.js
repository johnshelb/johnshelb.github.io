import Home from './Home';
import Overlay from './Overlay'
import About from './About'
import Offerings from './Offerings'
import Events from './Events'
import Schedule from './Schedule'
import Contact from './Contact'
import { Routes, Route, useParams } from 'react-router-dom'

function App() {
  const { page } = useParams
  console.log(page)
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route path = '/index' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/offerings' element = {<Offerings/>}/>
        <Route path = '/events' element ={<Events/>}/>
        <Route path = '/sched' element = {<Schedule/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
      <Overlay/>
    </div>
  );
}

export default App;
