import React,{useState} from 'react'
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css'
// Importing arrow
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from "./components/menu/Menu"
import Footer from './components/footer/Footer';
import About from './components/about/About';
function App() {
   // initialize aos
   Aos.init({
    duration:1800,
    offset:100,
  })
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    <div className="sections">
    <Intro/>
    <About/>
    <Portfolio/>
    <Works/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
